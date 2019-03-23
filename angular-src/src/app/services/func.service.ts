import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

function _window() {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class FuncService {
  public ServerAddress: String = "http://localhost:3000";

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  authToken: any;

  constructor(
    private titleService: Title,
    private router: Router,
    private http: Http
  ) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd ) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    })
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  setTitle(title: string) {
    this.titleService.setTitle(title + ' :: RWrite');
  }

  getPreviousUrl() {
    return this.previousUrl;
  }

  openWindow(url: string) {
    const option = 'width=500, height=600, left=300, top=100, scrollbars=yes, toolbars=no, location=no';
    _window().open(url, '', option);
  }

  openInfoWindow(userid) {
    this.openWindow(this.ServerAddress + '/modals/info?userid=' + userid);
  }

  openWindowWithAuth(url: string, userid: string) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    this.http.post(this.ServerAddress + '/modals/getCode', {userid: userid}, {headers: headers})
      .pipe(map(res => res.json())).subscribe(data => {
        const code = data.code;
        this.openWindow(url + '&c=' + code);
      });
  }

}
