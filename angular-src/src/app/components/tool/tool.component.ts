import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { GameService } from '../../services/game.service';
import { PlayService } from '../../services/play.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from '../../guards/component-can-deactivate';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent extends ComponentCanDeactivate implements OnInit {
  iframe: string;
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
    super();
    this.funcService.setTitle('게임 만들기');
  }

  ngOnInit() {
    this.playService.logs = [];
    this.authService.getProfile().subscribe(profile => {
      if ( !profile.user.clean ) {
        this.router.navigate(['/no-page']);
        return false;
      }
      this.authService.getCode(profile.user.userid).subscribe(data => {
        this.iframe = '<iframe src="'
          + this.funcService.ServerAddress
          + '/games/tool?uid='
          + profile.user._id
          + '&c='
          + data.code
          + '" style="width: 100%; height: 1000px;">loading...</iframe>';
      });
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

  onWriteGame(content: HTMLTextAreaElement, version: HTMLInputElement) {
    if ( version.value == undefined || version.value == '' ) {
      alert('버전을 입력해주세요.');
      version.focus();
      return;
    }
    if ( !confirm('저장하시겠습니까?') ) return;
    this.gameService.writeGame(content.value, version.value).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['/game/' + data.num]);
      } else {
        alert('게임 생성 오류\n' + data.msg);
      }
    });
  }

}
