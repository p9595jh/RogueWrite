import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from './func.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  authToken: any;

  constructor(
    private http: Http,
    private funcService: FuncService,
    private authService: AuthService
  ) { }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  takeOnePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
    return this.http.get(this.funcService.ServerAddress + '/games/takeOnePost?num=' + num + '&loggedIn=' + loggedIn, {headers: headers})
      .pipe(map(res => res.json()))
  }

  takeAllPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/takeAllPosts', {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeGame(content) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/write', {content: content}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/removePost', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeComment(postNum, cmtNum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/removeComment', {postNum: postNum, cmtNum: cmtNum}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  recommend(num, isRecommend: Boolean) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/recommend', {num: num, isRecommend: isRecommend}, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
