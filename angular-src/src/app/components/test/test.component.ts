import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { FuncService } from '../../services/func.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
// import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  foods: Object[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private funcService: FuncService
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
    
  }

}
