import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { GameService } from '../../services/game.service';
import { PlayService } from '../../services/play.service';
import { TempDialog } from '../temp/temp.component';
import { CommentDialog, ReplyDialog } from '../board/board.component';
import { NgFlashMessageService } from 'ng-flash-messages';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  navigationSubscription;
  svg: number = 0;

  num: string = '';
  content: any;
  contents: any[];
  comments: any[];
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
    private playService: PlayService,
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

  ngOnInit() {
    const b: boolean = this.num != this.route.snapshot.paramMap.get('num'); // first or another post
    if ( b ) this.num = this.route.snapshot.paramMap.get('num');

    this.gameService.takeAllPosts().subscribe(data => {
      this.contents = data.posts;
      if ( this.num != 'list' ) {
        this.gameService.takeOnePost(this.num).subscribe(result => {
          if ( result.fail ) {
            this.router.navigate(['/no-page']);
            return false;
          }
          this.content = result.post;
          this.setCommentsArray(this.content.comment);
          if ( b ) {
            this.funcService.setTitle(this.content.title + ' :: 게임게시판');
            this.playService.gameSet(this.content.game);
            this.playService.numSet(this.num);
          }
          if ( this.authService.loggedIn() ) {
            this.authService.getProfile().subscribe(profile => {
              this.user = profile.user;
            });
          }
        });
      } else {
        this.funcService.setTitle('게임 게시판');
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
    this.gameService.writeComment(formData).subscribe(data => {
      if ( data.success ) {
        field.value = '';
        this.router.navigate(['/game/' + this.num]);
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
      this.gameService.replyComment(formData).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/game/' + this.num]);
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

  onRemoveComment(cmtNum) {
    if ( confirm('삭제하시겠습니까?') ) {
      this.gameService.removeComment(this.num, cmtNum).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/game/' + this.num]);
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
      this.gameService.removeReply(this.num, cmtNum, reply).subscribe(result => {
        if ( result.success ) {
          this.router.navigate(['/game/' + this.num]);
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

  requestBoard() {
    this.gameService.requestBoard(this.num).subscribe(data => {
      if ( data.success ) {
        this.content.boardRequest = 1;
        this.flashMessage.showFlashMessage({
          messages: ['요청되었습니다.'], 
          type: 'success', 
          timeout: 2000
        });
      } else {
        this.flashMessage.showFlashMessage({
          messages: [data.msg], 
          type: 'danger', 
          timeout: 3000
        });
      }
    });
  }

  acceptBoard() {
    this.gameService.acceptBoard(this.num, this.content.game.title, this.content.userid).subscribe(data => {
      if ( data.success ) {
        this.content.boardRequest = 2;
        this.content.board = data.link;
        this.flashMessage.showFlashMessage({
          messages: ['수락되었습니다.'], 
          type: 'success', 
          timeout: 2000
        });
      } else {
        this.flashMessage.showFlashMessage({
          messages: [data.msg], 
          type: 'danger', 
          timeout: 3000
        });
      }
    });
  }

  viewBlock() {
    this.funcService.popUp(`${this.funcService.ServerAddress}/modals/view-block?game=${this.num}&height=600`, 1000, 600);
  }

  toMyTempList() {
    const dialogRef = this.dialog.open(TempDialog, {
      width: '300px',
      data: {
        title: this.content.title,
        text: this.content.title
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if ( data ) {
        this.gameService.toMyTempList(this.num, data).subscribe(result => {
          if ( result.success ) {
            this.flashMessage.showFlashMessage({
              messages: ['저장되었습니다.'], 
              type: 'success', 
              timeout: 2000
            });
          } else {
            this.flashMessage.showFlashMessage({
              messages: [result.msg], 
              type: 'danger', 
              timeout: 3000
            });
          }
        });
      }
    });
  }

  scrapDialog() {
    this.dialog.open(ScrapDialog, {
      width: '300px',
      data: {
        title: this.content.title,
        text: '<iframe src="' + this.funcService.ServerAddress + '/#/play/' + this.num + '" style="width: 560px; height: 480px;"></iframe>'
      }
    });
  }

  onSearch(category, text) {
    if ( text == '' ) {
      this.gameService.takeAllPosts().subscribe(data => {
        this.contents = data.posts;
      });
    } else {
      this.gameService.takeSearchedPosts(category, text).subscribe(data => {
        this.contents = data.posts;
      });
    }
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

  paging(pageEvent: PageEvent) {
    this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    this.router.navigate(['/game/' + this.num]);
  }

}

export interface DialogData {
  title: string,
  text: string
}

@Component({
  selector: 'app-game-dialog',
  templateUrl: './game.component.dialog.html'
})
export class ScrapDialog {

  constructor(
    public dialogRef: MatDialogRef<ScrapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onClose() {
    this.dialogRef.close();
  }

  copyText(copy: HTMLInputElement) {
    copy.select();
    document.execCommand('copy');
  }

}
