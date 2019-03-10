import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncService {
  public ServerAddress: String = "http://localhost:3000";

  constructor() { }
}
