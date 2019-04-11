import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  source = [];
  subs = new Map<string, any[][]>();

  constructor(
    private funcService: FuncService,
    private boardService: BoardService
  ) {
    this.funcService.setTitle('서브게시판 목록');
  }

  private mapInput(data: any) {
    let first: string = data.title.substring(0, 1).toUpperCase();

    // alphabet (A~Z)
    for (let i=65; i<=90; i++) {
      let capital = String.fromCharCode(i);
      if ( first == capital ) {
        this.arrInput(capital, data);
        return;
      }
    }

    // 한글 (가~하)
    for (let i=0; i<19; i++) {
      let fcc = i * 588 + 44032;
      let start = String.fromCharCode(fcc);
      let end = String.fromCharCode(fcc + 587);
      let regex = new RegExp('^[' + start + '-' + end + ']');
      if ( regex.test(first) ) {
        this.arrInput(start, data);
        return;
      }
    }

    // number (0~9)
    for (let i=0; i<=9; i++) {
      let num = String(i);
      if ( first == num ) {
        this.arrInput(num, data);
        return;
      }
    }

    // etc.
    this.arrInput('etc', data);
  }

  private arrInput(key, data) {
    if ( this.subs.get(key) ) {
      if ( this.subs.get(key)[this.subs.get(key).length-1].length < 3 ) {
        this.subs.get(key)[this.subs.get(key).length-1].push(data);
      } else {
        this.subs.get(key).push([data]);
      }
    } else {
      this.subs.set(key, [[data]]);
    }
  }

  ngOnInit() {
    this.boardService.takeAllBoards().subscribe(data => {
      for (let s of data.subs) {
        this.mapInput(s);
      }
    });
  }

}
