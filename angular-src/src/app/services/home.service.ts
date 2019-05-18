import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from './func.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  rows = [
    {
      title: 'THE FIRST TITLE',
      contents: [
        '이렇게 내용을',
        '써내려가면 되는 형식'
      ]
    }, {
      title: 'THE SECOND TITLE',
      contents: [
        '이렇게 내용을',
        '써내려가면 되는 형식'
      ]
    }, {
      title: 'THE THIRD TITLE',
      contents: [
        '이렇게 내용을',
        '써내려가면 되는 형식 ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ'
      ]
    }
  ];

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

  takeAddedSub() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/boards/home', {headers: headers})
      .pipe(map(res => res.json()));
  }

  lrControl(i: number) {
    return i % 2 == 0 ? 'text-right' : 'order-md-2';
  }

  lrControlSmall(i: number) {
    return i % 2 == 0 ? '' : 'order-md-2';
  }

}
