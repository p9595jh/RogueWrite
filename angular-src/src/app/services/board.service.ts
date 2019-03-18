import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from './func.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: Http,
    private funcService: FuncService,
    private authService: AuthService
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

    writePost(post: any) {
      if ( post ) {
        this.authService.getProfile().subscribe(profile => {
          post.userid = profile.user.userid;
          post.nickname = profile.user.nickname;

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          return this.http.post(this.funcService.ServerAddress + '/boards/write', post, {headers: headers})
            .pipe(map(res => res.json()));
        });
      } else return null;

    }

}
