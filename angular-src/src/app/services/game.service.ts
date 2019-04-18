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

  writeGame(content) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/write', {content: content}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getSessionGame() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/getSessionGame', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeOnePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
    return this.http.get(this.funcService.ServerAddress + '/games/takeOnePost?num=' + num + '&loggedIn=' + loggedIn, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeAllPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/takeAllPosts', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeRequestedPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/takeRequestedPosts', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeOneTemp(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/takeOneTemp', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeMyOneTemp(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/takeMyOneTemp', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/writeComment', cmt, {headers: headers})
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

  requestBoard(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/requestBoard', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  acceptBoard(num, title, userid) {
    const formData = {
      num: num,
      accept: true,
      title: title,
      userid: userid
    };
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/acceptBoard', formData, {headers: headers})
      .pipe(map(res => res.json()));
  }

  rejectBoard(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/acceptBoard', {num: num, accept: false}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  toMyTempList(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/toMyTempList', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeMyTemps() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/takeMyTemps', {}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeTemp(_id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/removeTemp', {_id: _id}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  versionRollBack(num, length) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/versionRollBack', {num: num, length: length}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  acceptCoWorkReq(coworkRequest, accept: boolean) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/acceptCoWorkReq', {accept: accept, coworkRequest: coworkRequest}, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
