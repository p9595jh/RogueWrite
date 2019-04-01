import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  url = 'https://www.youtube.com/embed/9OTkhsJUK0U';
  tag = '<iframe src="' + this.url + '" style="width: 100%; height: 600px;"></iframe>';

  constructor(
    private funcService: FuncService
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
  }

  get() {
    return this.url;
  }

}
