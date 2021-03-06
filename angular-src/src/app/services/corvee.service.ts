import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from './func.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CorveeService {
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
    return this.http.get(this.funcService.ServerAddress + '/corvees/take-one-post?num=' + num + '&loggedIn=' + loggedIn, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeAllPosts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/corvees/take-all-posts', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeSearchedPosts(category, text) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/corvees/take-searched-posts?category=' + category + '&text=' + text, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeMyTemps() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/take-my-temps', {}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeTempUsers(coworkers) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/take-temp-users', {coworkers: coworkers}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writePost(post) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/write', post, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/write-comment', cmt, {headers: headers})
      .pipe(map(res => res.json()));
  }

  replyComment(cmt) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/reply-comment', cmt, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removePost(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/remove-post', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeComment(postNum, cmtNum) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/remove-comment', {postNum: postNum, cmtNum: cmtNum}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  removeReply(postNum, cmtNum, reply) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/remove-reply', {postNum: postNum, cmtNum: cmtNum, reply: reply}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  recommend(num) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/corvees/recommend', {num: num}, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
