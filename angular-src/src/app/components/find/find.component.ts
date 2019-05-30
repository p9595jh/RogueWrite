import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private funcService: FuncService,
    private authService: AuthService
  ) {
    this.funcService.setTitle('아이디 찾기');
  }

  ngOnInit() {
  }

  check(place: HTMLSpanElement) {
    this.authService.findUserByEmail(this.emailFormControl.value).subscribe(result => {
      if ( result.success ) {
        place.innerHTML = '회원님의 아이디는 ' + result.userid + ' 입니다.';
      } else {
        place.innerHTML = '아이디를 찾을 수 없습니다.';
      }
    });
  }

}
