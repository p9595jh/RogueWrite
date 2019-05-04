import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { BoardService } from '../../services/board.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
  navigationSubscription;

  type: String;
  num: String;
  content: any;
  contents: any[];
  comments: any[];
  cmtWrite = new FormControl();

  user: any;
  sub: any;
  isMyBookmark: boolean;
  bk: any = undefined;
  
  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  constructor(
    private route: ActivatedRoute,
    private funcService: FuncService,
    private authService: AuthService,
    private boardService: BoardService,
    private router: Router,
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog
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
    this.type = this.route.snapshot.paramMap.get('type');
    this.num = this.route.snapshot.paramMap.get('num');
    this.boardService.checkBoardExists(this.type).subscribe(result => {
      if ( result.exist ) {
        this.boardService.getSub(this.type).subscribe(data => {
          this.sub = data.sub;
          this.boardService.takeAllPosts(this.type).subscribe(data => {
            this.contents = data.posts;
            if ( this.num != 'list' ) {
              this.boardService.takeOnePost(this.num).subscribe(result => {
                if ( result.fail ) {
                  this.router.navigate(['/no-page']);
                  return false;
                }
                this.content = result.post;
                this.setCommentsArray(this.content.comment);

                if ( this.type == 'free' ) {
                  this.funcService.setTitle(this.content.title + ' :: 자유게시판');
                } else if ( this.type == 'notice' ) {
                  this.funcService.setTitle(this.content.title + ' :: 공지게시판');
                } else {
                  this.funcService.setTitle(this.content.title + ' :: ' + this.sub.title + ' 게시판');
                }
                if ( this.authService.loggedIn() ) {
                  this.authService.getProfile().subscribe(profile => {
                    this.user = profile.user;
                  });
                }
              });
            } else {
              if ( this.type == 'free' ) {
                this.funcService.setTitle('자유게시판');
              } else if ( this.type == 'notice' ) {
                this.funcService.setTitle('공지게시판');
              } else {
                this.funcService.setTitle(this.sub.title + ' 게시판');
              }
              if ( this.authService.loggedIn() ) {
                this.authService.getProfile().subscribe(profile => {
                  this.user = profile.user;
                  this.isMyBookmark = false;
                  for (let bookmark of this.user.bookmark) {
                    if ( bookmark.url == this.type ) {
                      this.isMyBookmark = true;
                      this.bk = bookmark;
                      break;
                    }
                  }
                });
              }
            }
          });
        });
      } else {
        this.router.navigate(['/no-page']);
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
    this.boardService.writeComment(formData).subscribe(data => {
      if ( data.success ) {
        field.value = '';
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
      this.boardService.replyComment(formData).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/board/' + this.type + '/' + this.num]);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['답글 작성 오류'], 
            type: 'danger', 
            timeout: 3000
          });
        }
      });
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

  onRemoveReply(cmtNum, reply) {
    if ( confirm('삭제하시겠습니까?') ) {
      this.boardService.removeReply(this.num, cmtNum, reply).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/board/' + this.type + '/' + this.num]);
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

  bookmark() {
    this.boardService.bookmark(this.type).subscribe(result => {
      if ( result.success ) {
        this.isMyBookmark = true;
        this.bk = result.bookmark;
      } else {
        this.flashMessage.showFlashMessage({
          messages: [result.msg], 
          type: 'danger', 
          timeout: 3000
        });
      }
    });
  }

  unbookmark() {
    this.boardService.removeBookmark(this.bk).subscribe(result => {
      if ( result.success ) {
        this.isMyBookmark = false;
        this.bk = undefined;
      } else {
        this.flashMessage.showFlashMessage({
          messages: [result.msg], 
          type: 'danger', 
          timeout: 3000
        });
      }
    });
  }

  onSearch(category, text) {
    if ( text == '' ) {
      this.boardService.takeAllPosts(this.type).subscribe(data => {
        this.contents = data.posts;
      });
    } else {
      this.boardService.takeSearchedPosts(category, this.type, text).subscribe(data => {
        this.contents = data.posts;
      });
    }
  }

  paging(pageEvent: PageEvent) {
    this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/board/' + this.type + '/' + this.num]);
  }

}

export interface DialogData {
  title: string,
  comment: Array<any>,
  user: any
}

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board.component.dialog.html'
})
export class CommentDialog {

  constructor(
    public dialogRef: MatDialogRef<CommentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onClose() {
    this.dialogRef.close();
  }

}

export interface ReplyData {
  title: string,
  comments: Array<any>,
  comment: string,
  reply: string
}

@Component({
  selector: 'app-board-reply',
  templateUrl: './board.component.reply.html'
})
export class ReplyDialog {

  constructor(
    public dialogRef: MatDialogRef<ReplyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ReplyData,
    private dialog: MatDialog
  ) { }

  onTypingComment(field: HTMLTextAreaElement, text: string) {
    if ( this.data.comments.length == 0 ) return;
    const len: number = text.length;
    if ( len < 2 ) return;
    if ( text.substring(len - 2) == '[[' ) {
      const dialogRef = this.dialog.open(CommentDialog, {
        width: '300px',
        data: {
          title: this.data.title,
          comment: this.data.comments,
          user: undefined
        }
      });
      dialogRef.afterClosed().subscribe(data => {
        if ( !data ) return;
        field.value += data.userid + ']]';
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
