import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
import { FuncService } from './func.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: Http,
    private funcService: FuncService
  ) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/authenticate', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   loggedIn() {
    return tokenNotExpired('id_token');
   }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  modifyUser(user) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/modify', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  administrateUser(_id, clean: Boolean) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/admin', {_id: _id, clean: clean}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getAllUsers() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/getAllUsers', {}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  sendRequest(_id, title, tempId) {
    const formData = {
      _id: _id,
      title: title,
      tempId: tempId
    };
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/sendRequest', formData, {headers: headers})
      .pipe(map(res => res.json()));
  }

  findUserByIdOrNickname(text, tempId) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/findUserByIdOrNickname', {text: text, tempId: tempId}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getIdFromUserid(userid) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/users/getIdFromUserid', {userid: userid}, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getCode(userid) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.funcService.ServerAddress + '/modals/getCode', {userid: userid}, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
