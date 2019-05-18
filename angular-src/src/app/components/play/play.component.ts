import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { FuncService } from '../../services/func.service';
import { PlayService } from '../../services/play.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  num: string;

  constructor(
    private funcService: FuncService,
    private playService: PlayService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {
    this.funcService.setTitle('PLAY');
    this.num = this.route.snapshot.paramMap.get('num');
  }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.funcService.ServerAddress + '/games/take-one-game?num=' + this.num, {headers: headers})
      .pipe(map(res => res.json())).subscribe(data => {
        if ( !data.game ) this.router.navigate(['/no-page']);
        else this.playService.gameSet(data.game);
      });
  }

}
