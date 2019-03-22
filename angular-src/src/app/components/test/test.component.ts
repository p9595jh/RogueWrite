import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  options: Object = {
    placeholderText: '',
    height: 500,
    imageDefaultAlign: 'left'
  };

  type: String = 'free';
  title: String;
  content: String;

  constructor(
    private funcService: FuncService,
    private authService: AuthService,
    private http: Http,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
  }

  onWritePost() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authService.getProfile().subscribe(profile => {

      const post = {
        type: this.type,
        title: this.title,
        content: this.content,
        userid: profile.user.userid,
        nickname: profile.user.nickname
      };

      let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post(this.funcService.ServerAddress + '/boards/write', post, {headers: headers})
       .pipe(map((res: any) => res.json())).subscribe(data => {
          if ( data.success ) {
            this.flashMessage.showFlashMessage({
              messages: ['SUCCESS'],
              type: 'success',
              timeout: 2000
            });
            console.log('[[SUCCESS]]');
          } else {
            this.flashMessage.showFlashMessage({
              messages: ['FAIL'],
              type: 'danger',
              timeout: 3000
            });
            console.log('[[FAIL]]');
          }

       });
    })
      
  }

}
