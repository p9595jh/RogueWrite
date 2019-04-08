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

  delete() {
    this.gameService.deleteSessionGame().subscribe(data => {
      this.set = false;
    });
  }

  onWriteGame() {
    this.gameService.writeGame(this.content).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['/game/' + data.num]);
      } else {
        alert('게임 생성 오류');
      }
    });
  }

}
