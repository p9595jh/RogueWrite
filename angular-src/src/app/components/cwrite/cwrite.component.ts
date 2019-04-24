import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { FuncService } from '../../services/func.service';
import { CorveeService } from '../../services/corvee.service';
import { NgFlashMessageService } from 'ng-flash-messages';

interface TempNode {
  name: string,
  children?: TempNode[];
}

interface FlatNode {
  expandable: boolean,
  name: string,
  level: number
}

@Component({
  selector: 'app-cwrite',
  templateUrl: './cwrite.component.html',
  styleUrls: ['./cwrite.component.css']
})
export class CwriteComponent implements OnInit {
  options: any = {
    placeholderText: '',
    height: 500,
    imageDefaultAlign: 'left',
    imageDefaultWidth: 0,

    charCounterCount: true,
    imageUploadParam: 'image',
    imageUploadURL: '/boards/images',
    imageUploadMethod: 'POST',
    imageMaxSize: 5 * 1024 * 1024,  // maximun size : 5MB
    imageAllowTypes: [ 'jpeg', 'jpg', 'png', 'gif', 'webp' ],

    toolbarButtonsXS: [
      'insertImage', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'
    ]
  };

  title: string;
  content: string;

  private transformer = (node: TempNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    };
  };
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );
  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private funcService: FuncService,
    private flashMessage: NgFlashMessageService,
    private router: Router,
    private corveeService: CorveeService,
  ) {
    this.funcService.setTitle('노역장 작성');
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit() {
    this.corveeService.takeMyTemps().subscribe(data => {
      if ( !data.temps || data.temps.length == 0 ) {
        this.flashMessage.showFlashMessage({
          messages: ['작업목록이 없습니다.'], 
          type: 'danger', 
          timeout: 3000
        });
        this.router.navigate([this.funcService.getPreviousUrl()]);
      } else {
        let tree = [];
        for (let temp of data.temps) {
          let branch = {
            name: temp.title,
            children: []
          };
          for (let block of temp.block) {
            branch.children.push({name: block.savedate});
          }
          tree.push(branch);
        }
        this.dataSource.data = tree;
      }
    });
  }

  onWritePost() {
    if ( this.title == '' || this.title == undefined ) {
      this.flashMessage.showFlashMessage({
        messages: ['제목이 비어있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
      return false;
    } else if ( this.content == '' || this.content == undefined ) {
      this.flashMessage.showFlashMessage({
        messages: ['내용이 비어있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
      return false;
    } else {
      const formData = {
        title: this.title,
        content: this.content
      };
      this.corveeService.writePost(formData).subscribe(data => {
        if ( data.success ) {
          this.router.navigate(['/corvee/' + data.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['글 작성 실패'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      });

    }
  }

}
