import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { Router, NavigationEnd } from '@angular/router';
import { PlayService } from '../../services/play.service';
import { NgFlashMessageService } from 'ng-flash-messages';

export interface DialogData {
  text: string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  content: string;

  text: string;

  constructor(
    private funcService: FuncService,
    private playService: PlayService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
  }

}
