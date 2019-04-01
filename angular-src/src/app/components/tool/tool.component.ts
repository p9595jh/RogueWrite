import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  options: any = {
    placeholderText: '',
    height: 500,
    imageDefaultAlign: 'left',
    imageDefaultWidth: 0,

    charCounterCount: true,
    imageUploadParam: 'image',
    imageUploadURL: '/games/images',
    imageUploadMethod: 'POST',
    imageMaxSize: 5 * 1024 * 1024,  // maximun size : 5MB
    imageAllowTypes: [ 'jpeg', 'jpg', 'png', 'gif', 'webp' ],
  };
  content: String;
  user: any;

  iframe = '<iframe src="' + this.funcService.ServerAddress + '/games/tool" style="width: 100%; height: 700px;"></iframe>';

  constructor(
    private funcService: FuncService,
    private authService: AuthService,
    private gameService: GameService
  ) {
    this.funcService.setTitle('게임 만들기');
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    })
  }

  ngOnInit() {
  }

  onWriteGame() {
    this.gameService.writeGame(this.content).subscribe(data => {
      // handle
    });
  }

}
