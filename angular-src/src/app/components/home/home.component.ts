import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = undefined;

  testSentence = '<i>Hello</i>';

  constructor(
    private funcService: FuncService,
    private authService: AuthService
  ) {
    this.funcService.setTitle('HOME');
  }

  ngOnInit() {
    if ( this.authService.loggedIn() ) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      })
    }
  }

}
