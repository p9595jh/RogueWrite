import { Component, Input, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FuncService } from './services/func.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteName = 'ЯogueWrite';
  navLinks = [
    { label: '게임게시판', path: '/game/list' },
    { label: '블록게시판', path: '/corvee/list' }
  ];
  moreLinks = [
    { label: '자유게시판', path: '/board/free/list' },
    { label: '서브게시판', path: '/sub' },
    { label: '공지사항', path: '/board/notice/list' }
  ];

  constructor(
    private authService: AuthService,
    private funcService: FuncService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.showFlashMessage({
      messages: ['로그아웃 되었습니다.'], 
      type: 'success', 
      timeout: 2000
    });
    // this.router.navigate([this.funcService.getPreviousUrl()]);
    this.router.navigate(['/login']);
    return false;
  }

}
