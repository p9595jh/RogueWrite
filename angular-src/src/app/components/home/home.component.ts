import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = undefined;
  carousel = [];
  notice: any;
  frees: Array<any>;

  constructor(
    private funcService: FuncService,
    private authService: AuthService,
    private homeService: HomeService
  ) {
    this.funcService.setTitle('HOME');
  }

  ngOnInit() {
    this.homeService.takeBests().subscribe(bests => {
      this.carousel.push(bests.recent);
      this.carousel.push(bests.recommend);
      this.homeService.takeFromBoard().subscribe(data => {
        this.carousel.push(data.sub);
        this.notice = data.notice;
        this.frees = data.frees;

        if ( this.authService.loggedIn() ) {
          this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
          });
        }
      });
    });

  }

}
