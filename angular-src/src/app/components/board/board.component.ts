import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { BoardService } from '../../services/board.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
@Pipe({ name: 'safeHtml' })
export class BoardComponent implements OnInit, OnDestroy, PipeTransform {
  navigationSubscription;
  filteredOptions: Observable<string[]>;  // not using for now; a function for commenting

  type: String;
  num: String;
  content: any;
  contents: Object[];
  cmtWrite = new FormControl();
  user: any;
  
  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  ct: any = null;

  constructor(
    private route: ActivatedRoute,
    private funcService: FuncService,
    private authService: AuthService,
    private boardService: BoardService,
    private http: Http,
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
    // return this.sanitized.bypassSecurityTrustHtml(value);
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
    this.type = this.route.snapshot.paramMap.get('type');
    this.num = this.route.snapshot.paramMap.get('num');

    this.setFilteredOptions();
    this.boardService.takeAllPosts(this.type).subscribe(data => {
      this.contents = data.posts;
      if ( this.num != 'list' ) {
        this.boardService.takeOnePost(this.num).subscribe(result => {
          if ( result.fail ) {
            this.router.navigate(['/no-page']);
            return false;
          }
          this.content = result.post;
          this.funcService.setTitle(this.content.title + ' :: ' + (this.type == 'free' ? '자유게시판' : this.type + ' 게시판'));
          if ( this.authService.loggedIn() ) {
            this.authService.getProfile().subscribe(profile => {
              this.user = profile.user;
            });
          }
        });
      } else this.funcService.setTitle(this.type == 'free' ? '자유게시판' : this.type + ' 게시판');
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
    this.boardService.writeComment(formData).subscribe(data => {
      if ( data.success ) {
        this.router.navigate(['/board/' + this.type + '/' + this.num]);
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
      this.boardService.removePost(this.num).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/board/' + this.type + '/list']);
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
      this.boardService.removeComment(this.num, cmtNum).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/board/' + this.type + '/' + this.num]);
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
      this.boardService.recommend(this.num).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/board/' + this.type + '/' + this.num]);
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
    this.router.navigate(['/board/' + this.type + '/' + this.num]);
  }

}
