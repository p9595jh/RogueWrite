import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testSentence = '<i>Hello</i>';

  constructor(
    private funcService: FuncService
  ) { }

  ngOnInit() {
    this.funcService.setTitle('HOME');
  }

}
