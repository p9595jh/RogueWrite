import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from './func.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: Http,
    private funcService: FuncService
  ) { }

  takeBests() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/best', {headers: headers})
      .pipe(map(res => res.json()));
  }

  takeFromBoard() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/home', {headers: headers})
      .pipe(map(res => res.json()));
  }

}
