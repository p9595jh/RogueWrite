import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { GameService } from '../../services/game.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  temp: any;
  coworkerMap: Map<string, any>;
  coworkers: Array<any>;
  history: Array<any>;
  creator: any;
  user: any;

  num: string;
  count = 0;

  users = [];

  pagingSize = 25;
  pagingFrom: Number = 0;
  pagingTo: Number = this.pagingSize;

  constructor(
    private funcService: FuncService,
    private gameService: GameService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.num = this.route.snapshot.paramMap.get('num');
    this.gameService.takeMyOneTemp(this.num).subscribe(result => {
      if ( result.deny ) {
        this.router.navigate(['/no-page']);
      } else {
        this.temp = result.temp;
        this.creator = result.creator;
        this.coworkers = result.coworkers;

        this.coworkerMap = new Map<string, any>();
        this.history = [];
        this.coworkerMap.set(this.creator._id, this.creator);
        for (let coworker of this.coworkers) {
          this.coworkerMap.set(coworker._id, coworker);
        }
        for (let i=0; i<this.temp.block.length; i++) {
          let block = this.temp.block[i];
          if ( block.saveby ) {
            block.num = i + 1;
            this.history.push(block);
          }
        }
        this.history.reverse();
        this.funcService.setTitle(this.temp.title + ' :: 작업중');
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
        });
      }
    });
  }

  viewBlock(i) {
    this.funcService.popUp(this.funcService.ServerAddress + '/modals/viewTempBlock?game=' + this.num + '&recent=' + i, 1000, 600);
  }

  versionRollBack(i) {
    if ( !confirm('이 버전으로 되돌리시겠습니까?') ) return;
    this.gameService.versionRollBack(this.num, i).subscribe(result => {
      if ( result.success ) {
        this.flashMessage.showFlashMessage({
          messages: ['롤백되었습니다.'], 
          type: 'success', 
          timeout: 2000
        });
        this.ngOnInit();
      } else {
        this.flashMessage.showFlashMessage({
          messages: [result.msg],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

  remove() {
    if ( confirm('삭제하시겠습니까?') ) {
      this.gameService.removeTemp(this.temp._id).subscribe(result => {
        if ( result.success ) {
          this.flashMessage.showFlashMessage({
            messages: ['삭제되었습니다.'], 
            type: 'success', 
            timeout: 2000
          });
          this.router.navigate(['/profile']);
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

  onSearchChange(text: string) {
    if ( text == '' ) {
      this.users = [];
      return;
    } else if ( text.indexOf(' ') != -1 ) {
      this.users = [];
      return;
    }
    this.authService.findUserByIdOrNickname(text, this.temp._id).subscribe(data => {
      this.users = data.users;
    });
  }

  sendRequest(_id, idx) {
    this.authService.sendRequest(_id, this.temp.title, this.temp._id).subscribe(result => {
      if ( result.success ) {
        this.flashMessage.showFlashMessage({
          messages: ['요청되었습니다.'], 
          type: 'success', 
          timeout: 2000
        });
        this.users.splice(idx, 1);
      } else {
        this.flashMessage.showFlashMessage({
          messages: [result.msg],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

  paging(pageEvent: PageEvent) {
    this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
    this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
  }

}
