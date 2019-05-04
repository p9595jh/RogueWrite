import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { CorveeService } from '../../services/corvee.service';
import { NgFlashMessageService } from 'ng-flash-messages';

interface Selected {
  _id: string,
  idx: number
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
  temps: Array<any>;
  selectedItem: Selected = undefined;

  user: any;
  coworkerMap: Map<string, any>;

  constructor(
    private funcService: FuncService,
    private flashMessage: NgFlashMessageService,
    private router: Router,
    private corveeService: CorveeService,
  ) {
    this.funcService.setTitle('블록게시판 작성');
  }

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
        this.temps = data.temps;
        this.user = data.user;
        if ( !this.user.clean ) {
          this.router.navigate(['/no-page']);
          return false;
        }
        this.coworkerMap = new Map<string, any>();
        this.coworkerMap.set(this.user._id, {_id: this.user._id, userid: this.user.userid, nickname: this.user.nickname});
        for(let temp of this.temps) {
          temp.opened = false;
          temp.history = [];
          for (let i=0; i<temp.block.length; i++) {
            let block = temp.block[i];
            if ( block.saveby ) {
              block.num = i + 1;
              temp.history.push(block);
            }
          }
          temp.history.reverse();
        }
      }
    });
  }

  open(temp) {
    this.corveeService.takeTempUsers(temp.coworker).subscribe(data => {
      for (let user of data.users) {
        if ( !this.coworkerMap.get(user._id) ) {
          this.coworkerMap.set(user._id, user);
        }
      }
      temp.opened = !temp.opened;
    });
  }

  viewBlock(num, i) {
    this.funcService.popUp(this.funcService.ServerAddress + '/modals/viewTempBlock?game=' + num + '&recent=' + i, 1000, 600);
  }

  selectBlock(num, i) {
    this.selectedItem = {
      _id: num,
      idx: i
    };
    this.flashMessage.showFlashMessage({
      messages: ['선택되었습니다.'], 
      type: 'success', 
      timeout: 2000
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
    } else if ( !this.selectedItem ) {
      this.flashMessage.showFlashMessage({
        messages: ['블록이 선택되지 않았습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
      return false;
    } else {
      const formData = {
        title: this.title,
        content: this.content,
        item: this.selectedItem
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
