import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { GameService } from '../../services/game.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
@Pipe({ name: 'safeHtml' })
export class GameComponent implements OnInit, OnDestroy, PipeTransform {
  navigationSubscription;

  num: String;
  content: any;
  contents: Object[];
  cmtWrite = new FormControl();
  user: any;
  
  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  constructor(
    private route: ActivatedRoute,
    private funcService: FuncService,
    private authService: AuthService,
    private gameService: GameService,
    private router: Router,
    private sanitized: DomSanitizer,
    private flashMessage: NgFlashMessageService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  transform(value) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

  extractDate(date) {
    let writeDate = new Date(date);
    let today = new Date();

    let writeDateDay = writeDate.getDate();
    let todayDate = today.getDate();

    if ( writeDateDay != todayDate ) {
      return (writeDate.getMonth() + 1) + '/' + writeDateDay;
    } else {
      if ( writeDate.getFullYear() == today.getFullYear() && writeDate.getMonth() == today.getMonth() ) {
        let hour = writeDate.getHours();
        let min = writeDate.getMinutes();
        return (hour >= 10 ? hour : '0' + hour) + ':' + (min >= 10 ? min : '0' + min);
      } else {
        return (writeDate.getMonth() + 1) + '/' + writeDateDay;
      }
    }

  }

  scrollToPost(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.num = this.route.snapshot.paramMap.get('num');

    this.gameService.takeAllPosts().subscribe(data => {
      this.contents = data.posts;
      if ( this.num != 'list' ) {
        this.gameService.takeOnePost(this.num).subscribe(result => {
          if ( result.fail ) {
            this.router.navigate(['/no-page']);
            return false;
          }
          this.content = result.post;
          this.funcService.setTitle(this.content.title + ' :: 게임게시판');
          if ( this.authService.loggedIn() ) {
            this.authService.getProfile().subscribe(profile => {
              this.user = profile.user;
            });
          }
        });
      } else this.funcService.setTitle('게임 게시판');
    });

  }

  initialiseInvites() {
    // this.ngOnInit();
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  onRemovePost() {
    if ( confirm('삭제하시겠습니까?') ) {
      this.gameService.removePost(this.num).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/game/list']);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['삭제 오류'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      })
    }
  }

  onRecommend(isRecommend: Boolean) {
    if ( !this.authService.loggedIn() ) {
      this.flashMessage.showFlashMessage({
        messages: ['로그인 후 이용하실 수 있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
    } else {
      this.gameService.recommend(this.num, isRecommend).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/game/' + this.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: [result.msg], 
            type: 'danger', 
            timeout: 3000
          });
        }
      })
    }
    
  }

  paging(pageEvent: PageEvent) {
    this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/game/' + this.num]);
  }

}
