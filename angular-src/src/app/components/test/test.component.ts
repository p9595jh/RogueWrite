import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any = {
    // game data will be placed here
  };
  paramMap = new Map<string, any>(); // <'parameter_name', {'value: number', 'visible: boolean'}>

  stageNum = 0;
  text: any = undefined;
  phaseNum = 0;

  constructor(
    private funcService: FuncService,
  ) {
    this.funcService.setTitle('TEST!!!!');
  }

  ngOnInit() {
    for (let obj of this.data.param) {  // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible});
    }
    for (let stage of this.data.stage) {
      if ( stage.stage_num == 0 ) {
        this.text = stage.texts[0];
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
      pv.value += condition.add;
      this.paramMap.set(val.param, pv);
    }

    if ( this.stageNum > this.data.stage.length ) {
      // this is the end of the game
      return true;
    }

    for (let stage of this.data.stage) {
      if ( stage.stage_num == this.stageNum ) {
        for (let text of stage.texts) {
          let b: boolean = false;
          for (let c of text.condition) {
            if ( (b = this.checkNextStageCondition(c)) ) {
              this.text = text;
              // refresh page without using 'ngOnInit'
              return true;
            }
          }
          if ( !b ) {
            // in this part, there is no condition to be fit to param
            return false;
          }
        }
      }
    }
  }

}
