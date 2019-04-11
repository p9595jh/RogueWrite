import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { Router, NavigationEnd } from '@angular/router';
import { PlayService } from '../../services/play.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private funcService: FuncService,
    private playService: PlayService,
    private router: Router
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
    
  }

}
