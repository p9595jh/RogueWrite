import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FuncService } from '../../services/func.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  cmtWrite = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  test = { num: 1 };

  constructor(
    private funcService: FuncService
  ) {
    this.funcService.setTitle('TEST!!!!');
    
  }

  ngOnInit() {
    // this.filteredOptions = this.cmtWrite.valueChanges.pipe(
    //   startWith('TO::'),
    //   map(value => this._filter(value))
    // );
    this.setFilteredOptions();
  }

  private setFilteredOptions() {
    this.filteredOptions = this.cmtWrite.valueChanges.pipe(
      // startWith('TO::'),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    // return this.options.filter(option => option.toLowerCase().includes(filterValue));

    let f = [];
    for (let i=0; i<this.foods.length; i++) {
      f[i] = 'TO::' + this.foods[i].viewValue + ' [' + this.foods[i].value + '] ';
    }
    // return f.filter(option => option.toLowerCase().includes(filterValue));
    return this.foods;
  }

  onKeyUp(s: string) {
    if ( s.toLowerCase() == 'hello' ) {
      alert('HELLO!');
    }
  }

  asdf() {
    console.log(this.cmtWrite.value);
  }

  hello(a) {
    alert(a);
  }

}
