import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { BoardService } from '../../services/board.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
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

  type: String;
  title: String;
  content: String;

  constructor(
    private funcService: FuncService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private router: Router,
    private boardService: BoardService
  ) {
    this.type = this.route.snapshot.paramMap.get('type');
    this.funcService.setTitle('글 작성');
    this.boardService.checkBoardExists(this.type).subscribe(result => {
      if ( !result.exist ) {
        this.router.navigate(['/no-page']);
      }
    });
  }

  ngOnInit() {
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
        type: this.type,
        title: this.title,
        content: this.content
      };
      this.boardService.writePost(formData).subscribe(data => {
        if ( data.success ) {
          this.router.navigate(['/board/' + this.type + '/' + data.num]);
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
