import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) {
    this.funcService.setTitle('PLAY');
    this.num = this.route.snapshot.paramMap.get('num');
  }

  ngOnInit() {
    this.playService.takeOneGame(this.num).subscribe(data => {
      if ( !data.game ) this.router.navigate(['/no-page']);
      else this.playService.gameSet(data.game);
    });
  }

}
