import { Component, OnInit, OnDestroy } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  navigationSubscription;

  url = 'https://www.youtube.com/embed/9OTkhsJUK0U';
  tag = '<iframe src="' + this.url + '" style="width: 100%; height: 600px;"></iframe>';

  constructor(
    private funcService: FuncService,
    private router: Router
  ) {
    this.funcService.setTitle('TEST!!!!');
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if ( e instanceof NavigationEnd ) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if ( this.navigationSubscription ) {
      this.navigationSubscription.unsubscribe();
    }
  }

  initialiseInvites() {
    // this.ngOnInit();
  }

}
