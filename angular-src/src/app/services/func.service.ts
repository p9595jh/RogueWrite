import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FuncService {
  public ServerAddress: String = "http://localhost:3000";

  constructor(
    private titleService: Title
  ) { }

  setTitle(title: string) {
    this.titleService.setTitle(title + ' :: RWrite');
  }

}
