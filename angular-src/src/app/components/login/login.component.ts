import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid: String;
  pw: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
    ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    // console.log(this.username);
    const user = {
      userid: this.userid,
      pw: this.pw
    }

    if ( this.userid == '' || this.pw == '' || this.userid == undefined || this.pw == undefined ) {
      this.flashMessage.showFlashMessage({
        messages: ['필드가 비어있습니다.'], 
        type: 'danger', 
        timeout:3000
      });
      return false;
    } else {

      this.authService.authenticateUser(user).subscribe(data => {
        if(data.success) {
          this.authService.storeUserData(data.token, data.user);
          // this.flashMessage.showFlashMessage({
          //   messages: [data.msg], 
          //   type: 'success', 
          //   timeout:3000
          // });
          this.router.navigate(['/']);
        } else {
          this.flashMessage.showFlashMessage({
            messages: [data.msg], 
            type: 'danger', 
            timeout:3000
          });
          // this.router.navigate(['login']);
        }
      });
    }

  }

}
