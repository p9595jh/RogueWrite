import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  navigationSubscription;

  user: any = undefined;
  carousel: Array<any> = [];
  notice: any;
  frees: Array<any>;
  sub: any;
  others: Array<any>;

  constructor(
    private router: Router,
    private funcService: FuncService,
    private authService: AuthService,
    private homeService: HomeService
  ) {
    this.funcService.setTitle('HOME');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  // ngOnInit() { // debugging
  //   const c = {
  //     _id: 123,
  //     title: 'asdf',
  //     content: 'what',
  //     url: 'hello',
  //     createdate: 'yeah'
  //   };
  //   const b = {_id: 'B-ID', title: 'B-TITLE'};
  //   this.carousel = [];
  //   for(let i=0; i<3; i++) this.carousel.push(c);
  //   this.notice = b;
  //   this.sub = {title: 'SUB-TITLE', url: 'SUB-URL'};
  //   this.frees = [];
  //   this.others = [];
  //   for (let i=0; i<5; i++) {
  //     this.frees.push(b);
  //     this.others.push(b);
  //   }
  // }

  ngOnInit() {
    this.homeService.takeBests().subscribe(bests => {
      this.carousel[0] = bests.recent;
      this.carousel[1] = bests.recommend;
      this.homeService.takeFromBoard().subscribe(data => {
        this.carousel[2] = data.added;
        this.notice = data.notice;
        this.frees = data.frees;
        this.sub = data.sub;
        this.others = data.others;
        if ( this.authService.loggedIn() ) {
          this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
          });
        }
      });
    });
  }

  initialiseInvites() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
