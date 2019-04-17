import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FuncService } from '../../services/func.service';
import { GameService } from '../../services/game.service';
import { PageEvent } from '@angular/material';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  navigationSubscription;

  user: Object;
  temps: Array<any>;
  coworks: Array<any>;

  pagingSize = 25;
  tempPagingFrom: Number = 0;
  tempPagingTo: Number = this.pagingSize;
  coworkPagingFrom: Number = 0;
  coworkPagingTo: Number = this.pagingSize;

  constructor(
    private authService: AuthService,
    private funcService: FuncService,
    private gameService: GameService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.funcService.setTitle(profile.user.nickname + ' :: PROFILE');
      this.gameService.takeMyTemps().subscribe(result => {
        this.temps = result.temps;
        this.coworks = result.coworking;
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

  tempPaging(pageEvent: PageEvent) {
    this.tempPagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.tempPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/profile']);
  }

  coworkPaging(pageEvent: PageEvent) {
    this.coworkPagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.coworkPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/profile']);
  }

  removeTemp(_id) {
    if ( confirm('삭제하시겠습니까?') ) {
      this.gameService.removeTemp(_id).subscribe(result => {
        if ( result.success ) {
          this.flashMessage.showFlashMessage({
            messages: ['삭제되었습니다.'], 
            type: 'success', 
            timeout: 2000
          });
          this.router.navigate(['/profile']);
        } else {
          this.flashMessage.showFlashMessage({
            messages: [result.msg],
            type: 'danger',
            timeout: 3000
          });
        }
      });
    }
  }

}
