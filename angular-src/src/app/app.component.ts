import { Component, Input, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';
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
    { label: '공지게시판', path: '/board/notice/list' },
    { label: '자유게시판', path: '/board/free/list' },
    { label: '게임게시판', path: '/game/list' },
    { label: '서브게시판', path: '/sub' },
    { label: 'FIFTH', path: '/register' }
  ];
  activeLink = this.navLinks[0];

  constructor(
    private authService: AuthService,
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
