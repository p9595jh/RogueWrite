import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  data: any;
  paramMap;  // Map
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
    for (let obj of this.data.param) {  // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible});
    }
    for (let stage of this.data.stage) {
      if ( stage.stage_num == 0 ) {
        this.phase = stage.phase[0];
        break;
      }
    }
  }

  checkNextStageCondition(condition): boolean {
    for (let c of condition) {
      let value: number = this.paramMap.get(c.param).value;
      if ( !(c.above <= value && value <= c.below) ) return false;
    }
    return true;
  }

  select(condition: any) {
    this.stageNum++;
    for (let val of condition) {
      let pv: any = this.paramMap.get(val.param);
      this.paramMap.delete(val.param);
      // pv.value += condition.add;
      pv.value += Math.floor(Math.random() * (val.below - val.above + 1)) + val.above;
      this.paramMap.set(val.param, pv);
    }
    // this.showParams();

    if ( this.stageNum >= this.data.stage.length ) {
      // this is the end of the game
      this.end = true;
      console.log('[[END]]');
      return true;
    }

    for (let stage of this.data.stage) {
      if ( stage.stage_num == this.stageNum ) {
        for (let phase of stage.phase) {
          if ( this.checkNextStageCondition(phase.condition) ) {
            this.phase = phase;
            // refresh page without using 'ngOnInit'
            return true;
          }
        }
        // in this part, there is no condition to be fit to param
        console.log('[[NO MATCHED CONDITION]]');
        return false;
      }
    }
  }

}
