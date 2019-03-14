import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  options: Object = {
    placeholderText: '',
    height: 300
  };

  type: String = 'free';  // for debugging, set 'type' as just 'free'
  title: String;
  content: String;

  constructor(
    private funcService: FuncService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private flashMessage: NgFlashMessageService,
    private http: Http,
    private router: Router
  ) {
    // this.type = this.route.snapshot.queryParamMap.get('type');
  }

  ngOnInit() {
  }

  onWritePost() {
    if ( this.title == '' ) {
      this.flashMessage.showFlashMessage({
        messages: ['제목이 비어있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
      return false;
    } else if ( this.content == '' ) {
      this.flashMessage.showFlashMessage({
        messages: ['내용이 비어있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
      return false;
    }

    this.authService.getProfile().subscribe(profile => {
      const formData = {
        type: this.type,
        title: this.title,
        content: this.content,
        userid: profile.userid,
        nickname: profile.nickname
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.funcService.ServerAddress + '/boards/write', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((data: WritingResponse) => {
        if ( data.success ) {
          // this.router.navigate(['./boards/'+this.type], {queryParams: {num: data.num}});
          this.router.navigate(['/']);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['글 작성 실패'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      });
    });
  }

}

interface WritingResponse {
  success: Boolean,
  num: Number
}