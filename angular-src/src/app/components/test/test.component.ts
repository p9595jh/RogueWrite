import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  editorConfig: any;
  content: string;

  text: string;

  constructor(
    private funcService: FuncService
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
    this.editorConfig = {
      placeholder: '',
      spellcheck: false,
      height: '500',
      minHeight: '500',
      imageEndPoint: this.funcService.ServerAddress + '/tests/image'
    };
  }

  what() {
    alert(this.content);
  }

}
