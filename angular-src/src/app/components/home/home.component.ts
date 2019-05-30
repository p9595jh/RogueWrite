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
  backgrounds: Array<number>;

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

  ngOnInit() {
    this.backgrounds = [];
    for (let i=0; i<4; i++) {
      let idx: number = Math.floor(Math.random() * this.funcService.bgCounts);
      let flag: boolean = i != 0;
      while ( flag ) {
        for (let j=0; j<this.backgrounds.length; j++) {
          if ( idx == this.backgrounds[j] ) {
            flag = true;
            idx = Math.floor(Math.random() * this.funcService.bgCounts);
            break;
          } else {
            flag = false;
          }
        }
      }
      this.backgrounds[i] = idx;
    }

    // this.user = {userid: 'admin'}; const s = ['what the hack', 'i don\'t know', 'jesus', 'asdf', '?', 'hell yeah']; this.carousel = [];
    // for(let i=0; i<3; i++) {this.carousel.push({_id: 123, title: s[Math.floor(Math.random() * s.length)], content: 'what', url: 'hello', createdate: 'yeah'});}

    this.homeService.takeBests().subscribe(bests => {
      this.carousel[0] = bests.recent;
      this.carousel[1] = bests.recommend;
      this.homeService.takeAddedSub().subscribe(data => {
        this.carousel[2] = data.added;
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
