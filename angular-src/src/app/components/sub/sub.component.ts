import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FuncService } from '../../services/func.service';
import { BoardService } from '../../services/board.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit, OnDestroy {
  navigationSubscription;

  subs: Map<string, any[][]>;
  user: any = undefined;
  bkMap: Map<string, any[][]> = undefined;

  constructor(
    private funcService: FuncService,
    private boardService: BoardService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) {
    this.funcService.setTitle('서브게시판 목록');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  private mapInput(data: any, map: Map<string, any[][]>) {
    let first: string = data.title.substring(0, 1).toUpperCase();

    // alphabet (A~Z)
    for (let i=65; i<=90; i++) {
      let capital = String.fromCharCode(i);
      if ( first == capital ) {
        this.arrInput(map, capital, data);
        return;
      }
    }

    // 한글 (가~하)
    for (let i=0; i<19; i++) {
      let fcc = i * 588 + 44032;
      let start = String.fromCharCode(fcc);
      let end = String.fromCharCode(fcc + 587);
      let regex = new RegExp('^[' + start + '-' + end + ']');
      if ( regex.test(first) ) {
        this.arrInput(map, start, data);
        return;
      }
    }

    // number (0~9)
    for (let i=0; i<=9; i++) {
      let num = String(i);
      if ( first == num ) {
        this.arrInput(map, num, data);
        return;
      }
    }

    // etc.
    this.arrInput(map, 'etc', data);
  }

  private arrInput(map: Map<string, any[][]>, key, data) {
    if ( map.get(key) ) {
      if ( map.get(key)[map.get(key).length-1].length < 3 ) {
        map.get(key)[map.get(key).length-1].push(data);
      } else {
        map.get(key).push([data]);
      }
    } else {
      map.set(key, [[data]]);
    }
  }

  isInMyBookmark(url): boolean {
    for (let bookmark of this.user.bookmark) {
      if ( url == bookmark.url ) {
        return true;
      }
    }
    return false;
  }

  initialiseInvites() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    if ( this.authService.loggedIn() ) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.bkMap = new Map<string, any[][]>();
        for (let bk of this.user.bookmark) {
          this.mapInput(bk, this.bkMap);
        }
      });
    }
    this.boardService.takeAllBoards().subscribe(data => {
      this.subs = new Map<string, any[][]>();
      for (let s of data.subs) {
        this.mapInput(s, this.subs);
      }
    });
  }

  remove(bk: any) {
    if ( !confirm('즐겨찾는 게시판에서 지우시겠습니까?') ) return;
    this.boardService.removeBookmark(bk).subscribe(result => {
      if ( result.success ) {
        this.flashMessage.showFlashMessage({
          messages: ['삭제되었습니다.'], 
          type: 'success', 
          timeout: 2000
        });
        this.router.navigate(['/sub']);
      } else {
        this.flashMessage.showFlashMessage({
          messages: [result.msg], 
          type: 'danger', 
          timeout: 3000
        });
      }
    })
  }

  add(type) {
    this.boardService.bookmark(type).subscribe(result => {
      if ( result.success ) {
        this.flashMessage.showFlashMessage({
          messages: ['등록되었습니다.'], 
          type: 'success', 
          timeout: 2000
        });
        this.router.navigate(['/sub']);
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
