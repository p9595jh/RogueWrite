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

  writeGame(content, version) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/write', {content: content, version: version}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getSessionGame() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/session-game', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeOnePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
    return this.http.get(this.funcService.ServerAddress + '/games/take-one-post?num=' + num + '&loggedIn=' + loggedIn, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeAllPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/take-all-posts', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeRequestedPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/take-requested-posts', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeOneTemp(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/take-one-temp', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeMyOneTemp(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/take-my-one-temp', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeSearchedPosts(category, text) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/take-searched-posts?category=' + category + '&text=' + text, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/write-comment', cmt, {headers: headers})
      .pipe(map(res => res.json()));
  }

  replyComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/reply-comment', cmt, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/remove-post', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeComment(postNum, cmtNum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/remove-comment', {postNum: postNum, cmtNum: cmtNum}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeReply(postNum, cmtNum, reply) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/remove-reply', {postNum: postNum, cmtNum: cmtNum, reply: reply}, {headers: headers})
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
    return this.http.post(this.funcService.ServerAddress + '/games/request-board', {num: num}, {headers: headers})
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
    return this.http.post(this.funcService.ServerAddress + '/games/accept-board', formData, {headers: headers})
      .pipe(map(res => res.json()));
  }

  rejectBoard(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/accept-board', {num: num, accept: false}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  toMyTempList(num, title) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/to-my-temp-list', {num: num, title: title}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeMyTemps() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/take-my-temps', {}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeTemp(_id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/remove-temp', {_id: _id}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  versionRollBack(num, length) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/version-rollback', {num: num, length: length}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  acceptCoWorkReq(coworkRequest, accept: boolean) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/accept-co-work-req', {accept: accept, coworkRequest: coworkRequest}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  modifyTitle(num, title) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/modify-title', {num: num, title: title}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  setTopPlayer(num: string, score: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/games/done', {score: score, num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
