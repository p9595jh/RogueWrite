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

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
@Pipe({ name: 'safeHtml' })
export class BoardComponent implements OnInit, OnDestroy, PipeTransform {
  navigationSubscription;
  type: String;
  num: String;
  content: any;
  contents: Object[];
  cmtWrite: String;
  user: any;

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
    return this.sanitized.bypassSecurityTrustHtml(value);
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

    this.boardService.takeAllPosts(this.type).subscribe(data => {
      this.contents = data.posts;
      if ( this.num != 'list' ) {
        this.boardService.takeOnePost(this.num).subscribe(result => {
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

  onWriteComment() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let formData = {
      comment: this.cmtWrite
    };
    this.http.post(this.funcService.ServerAddress + '/boards/writeComment', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((data: ResponseWriting) => {
      if ( data.success ) {
        // i'd like to make this comment part to be working as an async way
      }
    });
  }

  onRemovePost() {
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

interface ResponseWriting {
  success: Boolean;
}
