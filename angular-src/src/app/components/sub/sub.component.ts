import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  subs;

  constructor(
    private funcService: FuncService,
    private boardService: BoardService
  ) {
    this.funcService.setTitle('서브게시판 목록');
  }

  ngOnInit() {
    this.boardService.takeAllBoards().subscribe(data => {
      this.subs = data.subs;
    });
  }

}
