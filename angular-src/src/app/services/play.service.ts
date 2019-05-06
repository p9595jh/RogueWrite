import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { FuncService } from './func.service';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  data: any;
  count: number;  // entire number of the stage whose number is over 0
  previousStageNum: number;

  paramMap: Map<string, any>;  // Map
  stageNum: number;
  phaseNum: number;
  phase: any;
  paramArr: Array<any[]>;

  end: boolean;
  score: number;

  constructor(
    private http: Http,
    private funcService: FuncService
  ) {}

  gameSet(gameData) {
    this.count = 0;
    this.stageNum = 1;
    this.previousStageNum = this.stageNum;
    this.phaseNum = 1;
    this.end = false;
    this.paramMap = new Map<string, any>();

    this.data = gameData;
    for (let obj of this.data.param) {
      // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible});
    }
    this.paramArr = this.formatAsDoubleDimension();
    for (let stage of this.data.stage) {
      if ( stage.stage_num > 0 ) {
        this.count++;
        if ( stage.stage_num == 1 ) this.phase = this.encodePhase(stage.phase[0]);
      }
    }
  }

  replay() {
    this.gameSet(this.data);
  }

  private substituteParams(text): number {
    if ( typeof text == 'number' ) return text;
    this.paramMap.forEach((value, key) => {
      text = text.split(key).join('this.paramMap.get("' + key + '").value');
    });
    return eval(text);
  }

  private checkNextStageCondition(condition): boolean {
    for (let c of condition) {
      let value: number = this.paramMap.get(c.param).value;
      if ( !(this.substituteParams(c.above) <= value && value <= this.substituteParams(c.below)) ) return false;
    }
    return true;
  }

  private getDone() {
    this.end = true;
    this.score = this.substituteParams(this.data.score);
    if ( this.score == Infinity || this.score == -Infinity ) {
      console.log('infinity');
    }
  }

  private ending() {
    this.getDone();
    console.log('[[END]]');
    if ( this.previousStageNum < 0 ) console.log('[[SELECTED ENDING: ' + this.previousStageNum + '-' + this.phaseNum + ']]');
    else console.log('[[SELECTED ENDING: ' + (this.stageNum - 1) + '-' + this.phaseNum + ']]');
  }

  private noCondition() {
    this.getDone();
    console.log('[[NO MATCHED CONDITION]]');
  }

  private getRandomNumber(n1: number, n2: number): number {
    if ( n1 < n2 ) {
      return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
    } else {
      return Math.floor(Math.random() * (n1 - n2 + 1)) + n2;
    }
  }

  select(condition: any, stage_to: number) {
    if ( stage_to == 0 ) this.stageNum++;
    else this.stageNum = stage_to;

    for (let val of condition) {
      let pv: any = this.paramMap.get(val.param);
      pv.value += this.getRandomNumber(this.substituteParams(val.above), this.substituteParams(val.below));
      this.paramMap.delete(val.param);
      this.paramMap.set(val.param, pv);
    }

    // this is the end of the game
    if ( this.stageNum > this.count ) {
      this.ending();
      return true;
    }

    for (let stage of this.data.stage) {
      if ( stage.stage_num == this.stageNum ) {
        for (let phase of stage.phase) {
          if ( this.checkNextStageCondition(phase.condition) ) {
            this.phase = this.encodePhase(phase);
            this.phaseNum = phase.phase_num;
            if ( this.stageNum < 0 ) {
              this.previousStageNum = this.stageNum;
              this.stageNum = this.count;
            }
            return true;
          }
        }
        // in this part, there is no condition to be fit to an any param
        this.noCondition();
        return false;
      }
    }
    // ends with no matched any stage number
    this.noCondition();
  }

  private formatAsDoubleDimension(): Array<any[]> {
    let arr = new Array();
    arr.push([]);
    this.paramMap.forEach((value, key) => {
      if ( value.visible ) {
        if ( arr[arr.length-1].length < 3 ) {
          arr[arr.length-1].push({key: key, value: value});
        } else {
          arr.push([{key: key, value: value}]);
        }
      }
    });
    return arr;
  }

  private encodePhase(phase): any {
    let text: string = phase.content;
    this.paramMap.forEach((value, key) => {
      let regex = new RegExp('\\{\\{' + key + '\\}\\}', 'g');
      text = text.replace(regex, value);
    });
    phase.content = text;
    return phase;
  }

  takeOneGame(num) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.funcService.ServerAddress + '/games/take-one-game?num=' + num, {headers: headers})
      .pipe(map(res => res.json()));
  }

}
