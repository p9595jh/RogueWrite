import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  navigationSubscription;

  users: any[];

  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  constructor(
    private funcService: FuncService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.funcService.setTitle('어드민');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      if ( profile.user.userid != 'admin' ) {
        this.router.navigate(['/no-page']);
        return false;
      } else {
        this.authService.getAllUsers().subscribe(data => {
          this.users = data.users;
        });
      }
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

  paging(pageEvent: PageEvent) {
    this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/admin']);
  }

  administrate(_id, clean: Boolean) {
    const work: string = clean ? '정지' : '해제';
    if ( confirm(work + '하시겠습니까?') ) {
      this.authService.administrateUser(_id, clean).subscribe(result => {
        if ( result.success ) {
          this.flashMessage.showFlashMessage({
            messages: [work + '되었습니다.'], 
            type: 'success', 
            timeout: 2000
          });
          this.router.navigate(['/admin']);
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
