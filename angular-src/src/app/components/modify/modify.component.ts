import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private funcService: FuncService
  ) {
    this.funcService.setTitle('회원정보수정');
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });
  }

}
