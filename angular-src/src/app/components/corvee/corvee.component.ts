import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { CorveeService } from '../../services/corvee.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-corvee',
  templateUrl: './corvee.component.html',
  styleUrls: ['./corvee.component.css']
})
export class CorveeComponent implements OnInit, OnDestroy {
  navigationSubscription;
  filteredOptions: Observable<string[]>;  // not using for now; a function for commenting

  num: String;
  content: any;
  contents: Object[];
  cmtWrite = new FormControl();

  user: any;
  coworkers: Array<any> = undefined;
  requesteds: Array<any> = undefined;
  writerIntro: string;
  iframe: string;
  
  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  ct: any = null;

  constructor(
    private route: ActivatedRoute,
    private funcService: FuncService,
    private authService: AuthService,
    private corveeService: CorveeService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
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
    this.corveeService.takeAllPosts().subscribe(data => {
      this.contents = data.posts;
      if ( this.num != 'list' ) {
        this.corveeService.takeOnePost(this.num).subscribe(result => {
          if ( result.fail ) {
            this.router.navigate(['/no-page']);
            return false;
          }
          this.content = result.post;
          this.coworkers = result.coworkers;
          this.requesteds = result.requesteds;
          this.writerIntro = result.introduction;
          this.iframe = '<iframe src="'
            + this.funcService.ServerAddress
            + '/corvees/frame?_id='
            + this.content._id
            + '" style="width: 100%; height: 500px;">loading...</iframe>';
          this.funcService.setTitle(this.content.title + ' :: 블록게시판');
          if ( this.authService.loggedIn() ) {
            this.authService.getProfile().subscribe(profile => {
              this.user = profile.user;
            });
          }
        });
      } else {
        this.funcService.setTitle('블록게시판');
        if ( this.authService.loggedIn() ) {
          this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
          });
        }
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

  private setFilteredOptions() {
    this.filteredOptions = this.cmtWrite.valueChanges.pipe(
      // startWith('TO::'),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    // [https://material.angular.io/components/autocomplete/overview]
    // return this.options.filter(option => option.toLowerCase().includes(filterValue));
    // let f = [];
    // for (let i=0; i<this.foods.length; i++) {
    //   f[i] = 'TO::' + this.foods[i].viewValue + ' [' + this.foods[i].value + '] ';
    // }
    // return f.filter(option => option.toLowerCase().includes(filterValue));
    // return this.foods;
    return this.content.comment;
  }

  setCmtTo(ct: any) {
    this.ct = ct;
  }

  onWriteComment() {
    const formData = {
      comment: this.cmtWrite.value,
      _id: this.num
    };
    this.corveeService.writeComment(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['/corvee/' + this.num]);
      } else {
        this.flashMessage.showFlashMessage({
          messages: ['댓글 작성 오류'], 
          type: 'danger', 
          timeout: 3000
        });
      }
    });
  }

  onRemovePost() {
    if ( confirm('삭제하시겠습니까?') ) {
      this.corveeService.removePost(this.num).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/corvee/list']);
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

  onRemoveComment(cmtNum) {
    if ( confirm('삭제하시겠습니까?') ) {
      this.corveeService.removeComment(this.num, cmtNum).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/corvee/' + this.num]);
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

  onRecommend() {
    if ( !this.authService.loggedIn() ) {
      this.flashMessage.showFlashMessage({
        messages: ['로그인 후 이용하실 수 있습니다.'], 
        type: 'danger', 
        timeout: 3000
      });
    } else {
      this.corveeService.recommend(this.num).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/corvee/' + this.num]);
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

  sendable(userid): boolean {
    if ( this.coworkers ) {
      for (let coworker of this.coworkers) {
        if ( coworker.userid == userid ) {
          return false;
        }
      }
    }
    if ( this.requesteds ) {
      for(let requested of this.requesteds) {
        if ( requested.userid == userid ) {
          return false;
        }
      }
    }
    return true;
  }

  sendRequest(userid) {
    if ( !confirm('요청을 보내시겠습니까?') ) return;
    // if ( this.coworkers ) {
    //   for (let coworker of this.coworkers) {
    //     if ( coworker.userid == userid ) {
    //       this.flashMessage.showFlashMessage({
    //         messages: ['이미 등록된 회원입니다.'],
    //         type: 'danger',
    //         timeout: 3000
    //       });
    //     }
    //   }
    // }
    // if ( this.requesteds ) {
    //   for (let requested of this.requesteds) {
    //     if ( requested.userid == userid ) {
    //       this.flashMessage.showFlashMessage({
    //         messages: ['이미 요청된 회원입니다.'],
    //         type: 'danger',
    //         timeout: 3000
    //       });
    //     }
    //   }
    // }
    this.authService.getIdFromUserid(userid).subscribe(data => {
      this.authService.sendRequest(data._id, this.content.title, this.content.temp).subscribe(result => {
        if ( result.success ) {
          this.flashMessage.showFlashMessage({
            messages: ['요청되었습니다.'], 
            type: 'success', 
            timeout: 2000
          });
          this.router.navigate(['/corvee/' + this.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: [result.msg],
            type: 'danger',
            timeout: 3000
          });
        }
      });
    });
  }

  onSearch(category, text) {
    if ( text == '' ) {
      this.corveeService.takeAllPosts().subscribe(data => {
        this.contents = data.posts;
      });
    } else {
      this.corveeService.takeSearchedPosts(category, text).subscribe(data => {
        this.contents = data.posts;
      });
    }
  }

  paging(pageEvent: PageEvent) {
    this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/corvee/' + this.num]);
  }

}
