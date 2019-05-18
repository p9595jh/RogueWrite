import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material';

import { CommentDialog, ReplyDialog } from '../board/board.component';
import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { CorveeService } from '../../services/corvee.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-corvee',
  templateUrl: './corvee.component.html',
  styleUrls: ['./corvee.component.css']
})
export class CorveeComponent implements OnInit, OnDestroy {
  navigationSubscription;
  svg: number = 0;

  num: String;
  content: any;
  contents: any[];
  comments: any[];
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
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog
  ) {
    this.svg = this.funcService.getRandomSVGBackground();
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
          this.setCommentsArray(this.content.comment);
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

  countComments(comments): number {
    let count = 0;
    for (let comment of comments) {
      if ( comment.reply ) count += comment.reply.length;
      count++;
    }
    return count;
  }

  private setCommentsArray(comments) {
    this.comments = [];
    for (let comment of comments) {
      if ( comment.reply ) {
        for (let reply of comment.reply) {
          this.pushToCommentsArray(reply);
        }
      }
      this.pushToCommentsArray(comment);
    }
  }

  private pushToCommentsArray(item) {
    for (let exist of this.comments) {
      if ( exist.userid == item.userid ) {
        return;
      }
    }
    this.comments.push({
      userid: item.userid,
      nickname: item.nickname
    });
  }

  onTypingComment(field: HTMLTextAreaElement, text: string) {
    if ( this.comments.length == 0 ) return;
    const len: number = text.length;
    if ( len < 2 ) return;
    if ( text.substring(len - 2) == '[[' ) {
      const dialogRef = this.dialog.open(CommentDialog, {
        width: '300px',
        data: {
          title: this.content.title,
          comment: this.comments,
          user: undefined
        }
      });
      dialogRef.afterClosed().subscribe(data => {
        if ( !data ) return;
        field.value += data.userid + ']]';
      });
    }
  }

  onWriteComment(field: HTMLTextAreaElement) {
    const formData = {
      comment: this.cmtWrite.value,
      _id: this.num,
      comments: this.comments
    };
    this.corveeService.writeComment(formData).subscribe(data => {
      if ( data.success ) {
        field.value = '';
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

  onReplyComment(comment) {
    if ( !this.authService.loggedIn() ) return;
    const dialogRef = this.dialog.open(ReplyDialog, {
      width: '300px',
      data: {
        title: this.content.title,
        comments: this.comments,
        comment: comment.comment,
        reply: undefined
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if ( !data ) return;
      const formData = {
        postNum: this.num,
        cmtNum: comment.num,
        comments: this.comments,
        comment: data
      }
      this.corveeService.replyComment(formData).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/corvee/' + this.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['답글 작성 오류'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      })
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

  onRemoveReply(cmtNum, reply) {
    if ( confirm('삭제하시겠습니까?') ) {
      this.corveeService.removeReply(this.num, cmtNum, reply).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/corvee/' + this.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['삭제 오류'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      });
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
