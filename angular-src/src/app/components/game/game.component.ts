import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { GameService } from '../../services/game.service';
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

  num: String;
  content: any;
  contents: Object[];
  cmtWrite = new FormControl();
  user: any;

  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  // GAME DATA
  data: any;
  paramMap: any;  // Map
  stageNum: number;
  phase: any;
  phaseNum: number;
  end: boolean;

  constructor(
    private route: ActivatedRoute,
    private funcService: FuncService,
    private authService: AuthService,
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

  showParams() {
    this.paramMap.forEach((value, key) => {
      console.log(key + ' : ' + value.value);
    });
  }

  ngOnInit() {
    this.num = this.route.snapshot.paramMap.get('num');

    this.stageNum = 0;
    this.phaseNum = 0;
    this.end = false;
    this.paramMap = new Map<string, any>(); // <'parameter_name', {'value: number', 'visible: boolean'}>

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
          this.gameSet();
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
    if ( this.num != this.route.snapshot.paramMap.get('num') ) {
      this.ngOnInit();
    } else {
      this.gameService.takeAllPosts().subscribe(data => {
        this.contents = data.posts;
        if ( this.num != 'list' ) {
          this.gameService.takeOnePost(this.num).subscribe(result => {
            if ( result.fail ) {
              this.router.navigate(['/no-page']);
              return false;
            }
            // this.content = result.post;
            this.content.boardRequest = result.post.boardRequest;
            this.content.hit = result.post.hit;
            this.content.recommend = result.post.recommend;
            this.content.unrecommend = result.post.unrecommend;
            this.content.recommendby = result.post.recommendby;
            this.content.comment = result.post.comment;

            if ( this.authService.loggedIn() ) {
              this.authService.getProfile().subscribe(profile => {
                this.user = profile.user;
              });
            }
          });
        } else this.funcService.setTitle('게임 게시판');
      });

    }
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  gameSet() { // on first
    this.data = this.content.game;
    for (let obj of this.data.param) {  // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible});
    }
    for (let stage of this.data.stage) {
      if ( stage.stage_num == 0 ) {
        this.phase = stage.phase[0];
        break;
      }
    }
  }

  checkNextStageCondition(condition): boolean {
    for (let c of condition) {
      let value: number = this.paramMap.get(c.param).value;
      if ( !(c.above <= value && value <= c.below) ) return false;
    }
    return true;
  }

  select(condition: any) {
    this.stageNum++;
    for (let val of condition) {
      let pv: any = this.paramMap.get(val.param);
      this.paramMap.delete(val.param);
      // pv.value += condition.add;
      pv.value += Math.floor(Math.random() * (val.below - val.above + 1)) + val.above;
      this.paramMap.set(val.param, pv);
    }
    // this.showParams();

    if ( this.stageNum >= this.data.stage.length ) {
      // this is the end of the game
      this.end = true;
      console.log('[[END]]');
      return true;
    }

    for (let stage of this.data.stage) {
      if ( stage.stage_num == this.stageNum ) {
        for (let phase of stage.phase) {
          if ( this.checkNextStageCondition(phase.condition) ) {
            this.phase = phase;
            // refresh page without using 'ngOnInit'
            return true;
          }
        }
        // in this part, there is no condition to be fit to param
        console.log('[[NO MATCHED CONDITION]]');
        return false;
      }
    }
  }

  onWriteComment() {
    const formData = {
      comment: this.cmtWrite.value,
      _id: this.num
    };
    this.gameService.writeComment(formData).subscribe(data => {
      if ( data.success ) {
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
