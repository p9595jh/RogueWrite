import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private funcService: FuncService
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
    
  }

  check() {
    let element = document.getElementById('demo');
    console.log(element);
    element.style.color = 'red';
  }

}
