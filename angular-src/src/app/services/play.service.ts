import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { FuncService } from './func.service';
import { AuthService } from './auth.service';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  data: any;
  private num: string;  // game number
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
    private funcService: FuncService,
    private authService: AuthService,
    private gameService: GameService
  ) { }

  gameSet(gameData) {
    this.num = undefined;
    this.count = 0;
    this.stageNum = 1;
    this.previousStageNum = this.stageNum;
    this.phaseNum = 1;
    this.end = false;
    this.paramMap = new Map<string, any>();

    this.data = gameData;
    for (let obj of this.data.param) {
      // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible, type: obj.type});
    }
    this.paramArr = this.formatAsDoubleDimension();
    for (let stage of this.data.stage) {
      if ( stage.stage_num > 0 ) {
        this.count++;
        if ( stage.stage_num == 1 ) this.phase = this.encodePhase(stage.phase[0]);
      }
    }
  }

  numSet(num: string) {
    this.num = num;
  }

  replay() {
    let temp: string = undefined;
    if ( this.num ) temp = this.num;
    this.gameSet(this.data);
    if ( temp ) this.num = temp;
  }

  private substituteParams(texts: string[]): string[] {
    // i'm trying to put the callback function to here,
    // so that can execute each needed code
    this.paramMap.forEach((value, key) => {
      for (let i=0; i<texts.length; i++) {
        texts[i] = texts[i].split(key).join('this.paramMap.get("' + key + '").value');
      }
    });
    return texts;
  }

  // private substituteParams(texts: string[], callback) {
  //   callback();
  // }

  // private substituteParams(text): number {
  //   if ( typeof text == 'number' ) return text;
  //   this.paramMap.forEach((value, key) => {
  //     text = text.split(key).join('this.paramMap.get("' + key + '").value');
  //   });
  //   return eval(text);
  // }

  private checkNextStageCondition(condition: string): boolean {
    // this.paramMap.forEach((value, key) => {
    //   condition = condition.split(key).join('this.paramMap.get("' + key + '").value');
    // });
    condition = this.substituteParams([condition])[0];
    let b: boolean = eval(condition);
    return b;
  }

  private changeParmaValueWithPrompt(key: string) {
    let changeValue = undefined;
    const type = this.paramMap.get(key).type == 'number' ? ' (숫자)' : '';

    do {
      changeValue = prompt("'" + key + "'의 값을 입력해주세요." + type, this.paramMap.get(key).value);
      if ( this.paramMap.get(key).type == 'number' ) {
        if ( !isNaN(parseInt(changeValue)) ) changeValue = parseInt(changeValue);
      } else {
        if ( changeValue == '' ) changeValue = undefined;
      }
    } while ( typeof changeValue != this.paramMap.get(key).type );

    let pv = this.paramMap.get(key);
    pv.value = changeValue;
    this.paramMap.delete(key);
    this.paramMap.set(key, pv);
  }

  private choiceIfState(state): boolean {
    let change: boolean = false;
    this.paramMap.forEach((value, key) => {
      state.if_slot = state.if_slot.split(key).join('this.paramMap.get("' + key + '").value');
      if ( key == state.do_slot ) change = true;
      else state.do_slot = state.do_slot.split(key).join('this.paramMap.get("' + key + '").value');
    });
    const b: boolean = eval(state.if_slot);
    if ( b ) {
      console.log(state.do_slot);
      if ( change ) this.changeParmaValueWithPrompt(state.do_slot);
      else eval(state.do_slot);
    }
    return b;
  }

  private getDone() {
    this.end = true;
    this.score = eval(this.substituteParams([this.data.score])[0]);
    if ( this.score == Infinity || this.score == -Infinity ) {
      console.log('infinity');
    }
    if ( this.authService.loggedIn() && this.num ) {
      this.gameService.setTopPlayer(this.num, this.score).subscribe(result => {console.log(result)});
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

  select(changeSet: any, stage_to: number) {
    // stage_num에 맞춰서 다음 스테이지 지정
    if ( stage_to == 0 ) this.stageNum++;
    else this.stageNum = stage_to;

    // 선택지에 맞춰서 변수들 값 변화
    let flag: boolean = false;
    let elseState: string = undefined;
    for (let val of changeSet) {
      let b: boolean = false;
      if ( val.if_slot == '' ) elseState = val.do_slot;
      else b = this.choiceIfState(val);
      if ( !flag ) flag = b;
    }
    if ( !flag && elseState ) {
      this.choiceIfState({if_slot: '1', do_slot: elseState});
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
    // ends with no matched stage number
    this.noCondition();
  }

  visible(text: string): boolean {
    // this.paramMap.forEach((value, key) => {
    //   text = text.split(key).join('this.paramMap.get("' + key + '").value');
    // });
    // return eval(text);
    return eval(this.substituteParams([text])[0]);
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
