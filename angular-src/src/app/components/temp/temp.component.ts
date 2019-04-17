import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  temp: any;
  coworkerMap: Map<string, any>;

  num: string;

  constructor(
    private funcService: FuncService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.num = this.route.snapshot.paramMap.get('num');
    this.coworkerMap = new Map<string, any>();
    this.gameService.takeOneTemp(this.num).subscribe(result => {
      if ( result.fail ) {
        this.router.navigate(['/no-page']);
      } else {
        this.temp = result.temp;
        for (let coworker of result.coworker) this.coworkerMap.set(coworker._id, coworker);
        this.funcService.setTitle(this.temp.title + ' :: 작업중');
      }
    });
  }

}
