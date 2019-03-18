import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteName = 'RogueWrite';
  navLinks = [
    { label: 'HOME', path: '/' },
    { label: '자유게시판', path: '/board/free/list' },
    { label: 'THIRD', path: '/login' },
    { label: 'FORTH', path: '/register' },
    { label: 'FIFTH', path: '/write/free' }
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
      messages: ['You are logged out'], 
      type: 'success', 
      timeout: 3000
    });
    this.router.navigate(['login']);
    return false;
  }
}
