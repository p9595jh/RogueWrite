import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { GameService } from '../../services/game.service';
import { PlayService } from '../../services/play.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  content: String;
  iframe = '<iframe src="' + this.funcService.ServerAddress + '/games/tool" style="width: 100%; height: 700px;"></iframe>';

  tooltipPosition = 'above';
  showDelay = 500;
  set: boolean = false;

  constructor(
    private funcService: FuncService,
    private gameService: GameService,
    private playService: PlayService,
    private router: Router
  ) {
    this.funcService.setTitle('게임 만들기');
  }

  ngOnInit() {
  }

  gameOn() {
    this.gameService.getSessionGame().subscribe(data => {
      if ( data.success ) {
        this.set = true;
        this.playService.gameSet(data.data);
      } else {
        alert(data.msg);
      }
    });
  }

  onWriteGame() {
    if ( !confirm('저장하시겠습니까?') ) return;
    // this.content = (<HTMLInputElement> document.getElementById('content')).value;
    this.gameService.writeGame(this.content).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['/game/' + data.num]);
      } else {
        alert('게임 생성 오류');
      }
    });
  }

  onTempWriteGame() {
    // this.content = (<HTMLInputElement> document.getElementById('content')).value;
    this.gameService.tempWriteGame(this.content).subscribe(data => {
      if ( data.success ) {
        alert('임시저장 되었습니다.')
      } else {
        alert('임시저장 오류');
      }
    });
  }

}
