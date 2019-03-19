import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { BoardService } from '../../services/board.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  options: Object = {
    placeholderText: '',
    height: 300,
    imageDefaultAlign: 'left'
  };

  type: String;
  title: String;
  content: String;

  constructor(
    private funcService: FuncService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private flashMessage: NgFlashMessageService,
    private http: Http,
    private router: Router,
    private boardService: BoardService
  ) {
    this.type = this.route.snapshot.paramMap.get('type');
    this.funcService.setTitle('글 작성');
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
