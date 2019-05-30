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
      title: 'Blockly',
      image: 'home1.jpg',
      contents: [
        'Google Blockly를 통해 게임을 제작해보세요.',
        '직관적인 인터페이스를 통해 쉬운 제작이 가능합니다.'
      ]
    }, {
      title: '제작 게임 관리',
      image: 'home2.png',
      contents: [
        '시스템을 통해 제작 중인 게임을 관리하세요.',
        '파트너를 구해서 협업을 진행하세요.'
      ]
    }, {
      title: 'Material Design',
      image: 'home3.jpg',
      contents: [
        'Google Material Design으로 이루어진 미려한 UI를 감상하세요.',
        'PC, 모바일 환경을 가리지 않는 유연한 접속이 가능합니다.'
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
