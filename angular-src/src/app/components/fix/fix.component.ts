import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { BoardService } from '../../services/board.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent implements OnInit {
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

  type: string;
  num: string;
  title: string;
  content: string;
  past: string;

  constructor(
    private funcService: FuncService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private router: Router,
    private boardService: BoardService,
    private authService: AuthService
  ) {
    this.num = this.route.snapshot.paramMap.get('num');
    this.funcService.setTitle('글 수정');
  }

  ngOnInit() {
    this.boardService.takeOnePost(this.num).subscribe(data => {
      this.authService.getProfile().subscribe(profile => {
        if ( !profile.user.clean || data.post.userid != profile.user.userid ) {
          this.router.navigate(['/no-page']);
        } else {
          this.type = data.post.type;
          this.title = data.post.title;
          this.past = data.post.content;
          this.content = data.post.content;
        }
      });
    });
  }

  onFixPost() {
    if ( this.content == '' || this.content == undefined ) {
      this.flashMessage.showFlashMessage({
        messages: ['내용이 비어있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
      return false;
    } else {
      const formData = {
        num: this.num,
        content: this.content
      };
      this.boardService.fixPost(formData).subscribe(data => {
        if ( data.success ) {
          this.router.navigate(['/board/' + this.type + '/' + this.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['글 수정 실패'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      });

    }
  }

}
