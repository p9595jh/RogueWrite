import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
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

  constructor(
    private funcService: FuncService,
    private gameService: GameService
  ) {
    this.funcService.setTitle('게임 만들기');
  }

  ngOnInit() {
  }

  onWriteGame() {
    this.gameService.writeGame(this.content).subscribe(data => {
      // handle
    });
  }

}
