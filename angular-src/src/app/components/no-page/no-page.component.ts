import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css']
})
export class NoPageComponent implements OnInit {
  constructor(
    private funcService: FuncService
  ) {
    this.funcService.setTitle('ERROR');
  }

  ngOnInit() {
  }

}
