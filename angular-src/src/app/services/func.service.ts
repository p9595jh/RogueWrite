import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncService {
  public ServerAddress: String = "http://localhost:3000";

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(
    private titleService: Title,
    private router: Router
  ) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd ) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    })
  }

  setTitle(title: string) {
    this.titleService.setTitle(title + ' :: RWrite');
  }

  getPreviousUrl() {
    return this.previousUrl;
  }

}
