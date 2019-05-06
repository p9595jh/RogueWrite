import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from './func.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
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
    return this.http.get(this.funcService.ServerAddress + '/boards/take-one-post?num=' + num + '&loggedIn=' + loggedIn, {headers: headers})
      .pipe(map(res => res.json()))
  }

  takeAllPosts(type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/take-all-posts?type=' + type, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeAllBoards() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/take-all-boards', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeSearchedPosts(category, type, text) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/take-searched-posts?category=' + category + '&type=' + type + '&text=' + text, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writePost(post) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/write', post, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/write-comment', cmt, {headers: headers})
      .pipe(map(res => res.json()));
  }

  replyComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/reply-comment', cmt, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/remove-post', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeComment(postNum, cmtNum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/remove-comment', {postNum: postNum, cmtNum: cmtNum}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeReply(postNum, cmtNum, reply) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/remove-reply', {postNum: postNum, cmtNum: cmtNum, reply: reply}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  recommend(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/recommend', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  checkBoardExists(type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/check-board-exists?type=' + type, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getSub(type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/sub?url=' + type, {headers: headers})
      .pipe(map(res => res.json()));
  }

  bookmark(type) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/bookmark', {type: type}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeBookmark(bookmark) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/boards/remove-bookmark', {url: bookmark.url, title: bookmark.title}, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
