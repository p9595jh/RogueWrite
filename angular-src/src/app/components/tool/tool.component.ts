import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { GameService } from '../../services/game.service';
import { PlayService } from '../../services/play.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  iframe: string /*= '<iframe src="' + this.funcService.ServerAddress + '/games/tool" style="width: 100%; height: 700px;"></iframe>';*/
  temps: Array<any>;

  tooltipPosition = 'above';
  showDelay = 500;
  set: boolean = false;

  constructor(
    private funcService: FuncService,
    private gameService: GameService,
    private playService: PlayService,
    private authService: AuthService,
    private router: Router
  ) {
    this.funcService.setTitle('게임 만들기');
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.iframe = '<iframe src="'
        + this.funcService.ServerAddress
        + '/games/tool?uid='
        + profile.user._id
        + '" style="width: 100%; height: 700px;"></iframe>';
    });
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

  onWriteGame(content: HTMLTextAreaElement) {
    if ( !confirm('저장하시겠습니까?') ) return;
    this.gameService.writeGame(content.value).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['/game/' + data.num]);
      } else {
        alert('게임 생성 오류\n' + data.msg);
      }
    });
  }

}
