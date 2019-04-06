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

  asdf = '<button (click)="hello()">click</button>'

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

  hello() {
    alert('Hi');
  }

}
