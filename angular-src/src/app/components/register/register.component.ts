import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userid: String;
  pw: String;
  pwchk: String;
  nickname: String;
  email: String;
  introduction: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      userid: this.userid,
      pw: this.pw,
      pwchk: this.pwchk,
      nickname: this.nickname,
      email: this.email,
      introduction: this.introduction
    }

    // Required Fields
    if ( !this.validateService.validateRegister(user) ) {
      this.flashMessage.showFlashMessage({messages: ['빈 항목이 있습니다'], type: 'danger', timeout: 2000});
      return false;
    }

    // Password check
    if ( this.pw != this.pwchk ) {
      this.flashMessage.showFlashMessage({messages: ['비밀번호가 일치하지 않습니다'], type: 'danger', timeout: 2000});
      return false;
    }

    // Check with conditions
    let conditions: any = this.validateService.validateConditions(user);
    if ( !conditions.valid ) {
      this.flashMessage.showFlashMessage({messages: [conditions.msg], type: 'danger', timeout: 2000});
      return false;
    }

    // Validate Email
    if( !this.validateService.validateEmail(user.email) ) {
      this.flashMessage.showFlashMessage({messages: ['이메일 형식이 맞지 않습니다'], type: 'danger', timeout: 2000});
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['회원가입 완료 - 로그인 해주십시오'], 
          type: 'success', 
          timeout: 2000
        });
        this.router.navigate(['/']);
      } else {
        this.flashMessage.showFlashMessage({
          messages: ['문제가 발생하였습니다'], 
          type: 'danger', 
          timeout: 3000
        });
        this.router.navigate(['/register']);
      }
    })
  }

}
