import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
@Pipe({ name: 'safeHtml' })
export class TestComponent implements OnInit, PipeTransform {

  url = 'https://www.google.com/';

  constructor(
    private funcService: FuncService,
    private sanitized: DomSanitizer
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  transform(value) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

  ngOnInit() {

  }

}
