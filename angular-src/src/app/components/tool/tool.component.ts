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
  iframe = '<iframe src="' + this.funcService.ServerAddress + '/games/tool" style="width: 100%; height: 700px;"></iframe>';
  temps: Array<any>;

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
    this.gameService.takeAllTemps().subscribe(data => {
      this.temps = data.temps;
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
        alert('게임 생성 오류');
      }
    });
  }

  onTempWriteGame(content: HTMLTextAreaElement, title: HTMLInputElement) {
    if ( title.value.trim() == '' ) {
      alert('임시저장 제목이 비어있습니다.');
      title.focus();
      return;
    }
    this.gameService.tempWriteGame(content.value, title.value).subscribe(data => {
      if ( data.success ) {
        alert('임시저장 되었습니다.')
      } else {
        alert('임시저장 오류\n' + data.msg);
      }
    });
  }

  loadTemp(_id: string, content: HTMLTextAreaElement, title: HTMLInputElement) {
    this.iframe = '<iframe src="' + this.funcService.ServerAddress + '/games/tool?_id=' + _id + '" style="width: 100%; height: 700px;"></iframe>';
    this.gameService.takeOneTemp(_id).subscribe(result => {
      if ( result.success ) {
        content.value = result.temp.content;
        title.value = result.temp.title;
      } else {
        alert('불러올 수 없습니다.');
      }
    });
  }

}
