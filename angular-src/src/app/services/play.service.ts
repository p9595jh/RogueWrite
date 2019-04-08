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

  private checkNextStageCondition(condition): boolean {
    for (let c of condition) {
      let value: number = this.paramMap.get(c.param).value;
      if ( !(c.above <= value && value <= c.below) ) return false;
    }
    return true;
  }

  private ending() {
    this.end = true;
    console.log('[[END]]');
    console.log('[[SELECTED ENDING: ' + (this.stageNum-1) + '-' + this.phaseNum + ']]');
  }

  private noCondition() {
    this.end = true;
    console.log('[[NO MATCHED CONDITION]]');
  }

  select(condition: any) {
    this.stageNum++;
    for (let val of condition) {
      let pv: any = this.paramMap.get(val.param);
      this.paramMap.delete(val.param);
      pv.value += Math.floor(Math.random() * (val.below - val.above + 1)) + val.above;
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
        // in this part, there is no condition to be fit to param
        this.noCondition();
        return false;
      }
    }
  }

  private showParams() {
    this.paramMap.forEach((value, key) => {
      console.log(key + ' : ' + value.value);
    });
  }

}
