import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private data: any;
  paramMap: Map<string, any>;  // Map
  stageNum: number;
  phase: any;
  phaseNum: number;
  end: boolean;
  paramArr: Array<any[]>;
  score: number;

  constructor() {}

  gameSet(gameData) {
    this.stageNum = 0;
    this.phaseNum = 0;
    this.end = false;
    this.paramMap = new Map<string, any>();

    this.data = gameData;
    for (let obj of this.data.param) {
      // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible});
    }
    this.paramArr = this.formatAsDoubleDimension();
    for (let stage of this.data.stage) {
      if ( stage.stage_num == 0 ) {
        this.phase = stage.phase[0];
        break;
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
  }

  private ending() {
    this.getDone();
    console.log('[[END]]');
    console.log('[[SELECTED ENDING: ' + (this.stageNum-1) + '-' + this.phaseNum + ']]');
  }

  private noCondition() {
    this.getDone();
    console.log('[[NO MATCHED CONDITION]]');
  }

  select(condition: any) {
    this.stageNum++;
    for (let val of condition) {
      let pv: any = this.paramMap.get(val.param);
      pv.value += Math.floor(Math.random() * (this.substituteParams(val.below) - this.substituteParams(val.above) + 1)) + this.substituteParams(val.above);
      this.paramMap.delete(val.param);
      this.paramMap.set(val.param, pv);
    }

    // this is the end of the game
    if ( this.stageNum >= this.data.stage.length ) {
      this.ending();
      return true;
    }

    for (let stage of this.data.stage) {
      if ( stage.stage_num == this.stageNum ) {
        for (let phase of stage.phase) {
          if ( this.checkNextStageCondition(phase.condition) ) {
            this.phase = phase;
            this.phaseNum = phase.phase_num;
            return true;
          }
        }
        // in this part, there is no condition to be fit to an any param
        this.noCondition();
        return false;
      }
    }
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

  private showParams() {
    this.paramMap.forEach((value, key) => {
      console.log(key + ' : ' + value.value);
    });
  }

}
