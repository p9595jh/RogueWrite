import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';
import { GameService } from '../../services/game.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from 'rxjs';
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

  data: any = {
    // game data will be placed here
  };
  paramMap = new Map<string, any>(); // <'parameter_name', {'value: number', 'visible: boolean'}>
  stageNum = 0;
  text: any = undefined;
  phaseNum = 0;
  
  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

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

  gameSet() {
    for (let obj of this.data.param) {  // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible});
    }
    for (let stage of this.data.stage) {
      if ( stage.stage_num == 0 ) {
        this.text = stage.texts[0];
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
      pv.value += condition.add;
      this.paramMap.set(val.param, pv);
    }

    if ( this.stageNum > this.data.stage.length ) {
      // this is the end of the game
      return true;
    }

    for (let stage of this.data.stage) {
      if ( stage.stage_num == this.stageNum ) {
        for (let text of stage.texts) {
          let b: boolean = false;
          for (let c of text.condition) {
            if ( (b = this.checkNextStageCondition(c)) ) {
              this.text = text;
              // refresh page without using 'ngOnInit'
              return true;
            }
          }
          if ( !b ) {
            // in this part, there is no condition to be fit to param
            return false;
          }
        }
      }
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
