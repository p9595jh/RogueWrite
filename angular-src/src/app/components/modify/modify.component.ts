import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FuncService } from '../../services/func.service';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  user: any;

  pw: string;
  newpw: string;
  nickname: string;
  introduction: string;

  constructor(
    private authService: AuthService,
    private funcService: FuncService,
    private validateService: ValidateService,
    private flashMessage: NgFlashMessageService,
    private router: Router
  ) {
    this.funcService.setTitle('회원정보수정');
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.nickname = this.user.nickname;
      this.introduction = this.user.introduction;
    });
  }

  onModifyUser() {
    if ( !this.validateService.validateModify({pw: this.pw, nickname: this.nickname, introduction: this.introduction}) ) {
      this.flashMessage.showFlashMessage({
        messages: ['필드가 비어있습니다.'], 
        type: 'danger',
        timeout: 3000
      });
      return false;
    }

    let conditions: any = this.validateService
      .validateConditions({userid: this.user.userid, pw: (this.newpw == undefined || this.newpw == '' ? this.pw : this.newpw), nickname: this.nickname});
    if ( !conditions.valid ) {
      this.flashMessage.showFlashMessage({messages: [conditions.msg], type: 'danger', timeout: 3000});
      return false;
    }

    this.authService.authenticateUser({userid: this.user.userid, pw: this.pw}).subscribe(data => {
      if ( !data.success ) {
        this.flashMessage.showFlashMessage({
          messages: ['비밀번호가 잘못되었습니다.'], 
          type: 'danger',
          timeout: 3000
        });
        return false;
      } else {
        const formData = {
          nickname: this.nickname,
          pw: (this.newpw == undefined || this.newpw == '' ? '' : this.newpw),
          introduction: this.introduction
        };
        this.authService.modifyUser(formData).subscribe(result => {
          if ( result.success ) {
            this.flashMessage.showFlashMessage({
              messages: ['회원정보가 변경되었습니다.'], 
              type: 'success',
              timeout: 2000
            });
            this.router.navigate(['/']);
          } else {
            this.flashMessage.showFlashMessage({
              messages: [result.msg], 
              type: 'danger',
              timeout: 3000
            });
          }
        })
      }
    })
    
  }

}
