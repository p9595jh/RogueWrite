import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { FuncService } from './func.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: Http,
    private funcService: FuncService,
    private authService: AuthService,
    private router: Router
  ) { }

    takeOnePost(num) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.funcService.ServerAddress + '/boards/takeOnePost?num=' + num, {headers: headers})
        .pipe(map(res => res.json()))
    }

    takeAllPosts(type) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.funcService.ServerAddress + '/boards/takeAllPosts?type=' + type, {headers: headers})
        .pipe(map(res => res.json()));
    }

    writePost(type, title, content) : any {
      this.authService.getProfile().subscribe(profile => {
        const formData = {
          type: type,
          title: title,
          content: content,
          userid: profile.user.userid,
          nickname: profile.user.nickname
        };
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/write', formData, {headers: headers})
          .pipe(map((res: Response) => res.json()));
      });
    }

}
