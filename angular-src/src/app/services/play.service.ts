import { Injectable } from '@angular/core';
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

  paramMap: Map<string, Variable>;  // Map
  stageNum: number;
  phaseNum: number;
  phase: Phase;
  paramArr: Array<any[]>;

  end: boolean;
  score: number;

  logs: Array<Log>;
  private Colors = {
    WARN: 'debug-warn',
    HIGHLIGHT: 'debug-highlight',
    SUCCESS: 'debug-success',
    NORMAL: 'debug-normal'
  }

  constructor(
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
    this.logs = [];
    this.addLog('game has been started', this.Colors.HIGHLIGHT);

    this.data = gameData;
    for (let obj of this.data.param) {
      // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
      this.paramMap.set(obj.param_name, {value: obj.default, visible: obj.visible, type: obj.type});
    }
    this.printAllVariablesToLog();
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
    this.addLog('(restart)', this.Colors.HIGHLIGHT);
    let temp: string = undefined;
    if ( this.num ) temp = this.num;
    this.gameSet(this.data);
    if ( temp ) this.num = temp;
  }

  /**
   * text 내의 'key'를 'map.get(key)' 형식으로 바꿈
   * @param {string} key 변수명
   * @param {string} text 변수명이 들어있는 문자열
   * @returns {string} key -> map.get(key) 형식으로 바뀐 문자열
  */
  private formatWithMap(key: string, text: string): string {
    return text.split(key).join('this.paramMap.get("' + key + '").value');
  }

  /**
   * 입력받은 문자열들을 key에 맞춰서 치환해줌
   * @param {string[]} texts 치환할 문자열들의 배열
   * @returns {string} 치환된 문자열들의 배열
  */
  private substituteParams(texts: string[]): string[] {
    this.paramMap.forEach((value, key) => {
      for (let i=0; i<texts.length; i++) {
        texts[i] = this.formatWithMap(key, texts[i]);
      }
    });
    return texts;
  }

  /**
   * 스테이지 이동 시 페이즈의 조건이 맞는지 확인하는 함수
   * @param {string} condition 해당 페이즈의 조건
   * @returns {boolean} 조건에 부합하면 true, 아니면 false
  */
  private checkNextStageCondition(condition: string): boolean {
    condition = this.substituteParams([condition])[0];
    let b: boolean = eval(condition);
    return b;
  }

  /**
   * 변수 재설정을 위한 팝업을 띄우는 함수
   * @param {string} key 변수명 (여기서는 paramMap의 키값)
  */
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

    this.addLog('variable \'' + key + '\' value changed (' + this.paramMap.get(key).value + ' → ' + changeValue + ')');
    this.paramMap.get(key).value = changeValue;
  }

  /**
   * choice 선택 시 실행되는 if-else문에 대한 확인, 
   * do 영역이 변수명으로 되어 있으면 changeParamValueWithPrompt 함수 실행
   * @param {IfElseState} state if_slot, do_slot으로 이루어진 if-else문 객체
   * @returns {boolean} if문이 해당이 되는지에 대한 여부
  */
  private choiceIfState(state: IfElseState): boolean {
    let change: boolean = false;
    let if_slot: string, do_slot: string = state.do_slot;
    this.paramMap.forEach((value, key) => {
      if_slot = this.formatWithMap(key, state.if_slot);
      if ( key == do_slot ) change = true;
      else do_slot = this.formatWithMap(key, do_slot);
    });
    const b: boolean = eval(if_slot);
    if ( b ) {
      if ( change ) this.changeParmaValueWithPrompt(do_slot);
      else {
        let map = new Map<string, {value: any, visible: boolean}>();
        this.paramMap.forEach((value, key) => {map.set(key, {value: value.value, visible: this.visible(value.visible)})});
        eval(do_slot);
        this.paramMap.forEach((value, key) => {
          if ( value.value != map.get(key).value ) {
            this.addLog('variable ' + this.surroundText(key) + ' value changed (' + map.get(key).value + ' → ' + value.value + ')');
            if ( isNaN(value.value) || (value.type != typeof value.value) ) {
              this.paramMap.get(key).value = map.get(key).value;
              this.addLog('you did wrong operation to ' + this.surroundText(key) + ', so its value has been restored (→ ' + map.get(key).value + ')', this.Colors.WARN);
            }
          }
          const nowV: boolean = this.visible(value.visible);
          if ( map.get(key).visible != nowV ) {
            this.addLog('variable ' + this.surroundText(key) + ' visibility changed (' + map.get(key).visible + ' → ' + nowV + ')');
          }
        });
      }
    }
    return b;
  }

  /**
   * 종료 시 발생 이벤트, 
   * end 변수 활성화 및 점수 계산
  */
  private getDone() {
    this.end = true;
    this.score = eval(this.substituteParams([this.data.score])[0]);
    this.addLog('game ended', this.Colors.SUCCESS);
    if ( isNaN(this.score) ) this.addLog('you\'ve got the wrong score', this.Colors.WARN);
    else this.addLog('score: ' + this.score, this.Colors.SUCCESS);
    if ( this.score == Infinity || this.score == -Infinity ) {
      console.log('infinity');
    }
    if ( this.authService.loggedIn() && this.num ) {
      this.gameService.setTopPlayer(this.num, this.score).subscribe(result => {console.log(result)});
    }
  }

  /**
   * 정상적인 종료 시 실행
  */
  private ending() {
    this.getDone();
    console.log('[[END]]');
    if ( this.previousStageNum < 0 ) {
      console.log('[[SELECTED ENDING: ' + this.previousStageNum + '-' + this.phaseNum + ']]');
      this.addLog('selected ending: stage ' + this.previousStageNum + ' - phase ' + this.phaseNum, this.Colors.SUCCESS);
    } else {
      console.log('[[SELECTED ENDING: ' + (this.stageNum - 1) + '-' + this.phaseNum + ']]');
      this.addLog('selected ending: stage ' + (this.stageNum - 1) + ' - phase ' + this.phaseNum, this.Colors.SUCCESS);
    }
  }

  /**
   * 맞는 조건이 없거나 맞는 스테이지가 없을 경우 실행
  */
  private noCondition() {
    this.getDone();
    console.log('[[NO MATCHED CONDITION]]');
    this.addLog('game ended with no matched stage or phase', this.Colors.WARN);
  }

  /**
   * (html에서 사용) 선택지 선택 이벤트
  */
  select(changeSet: any, stage_to: number) {
    // stage_num에 맞춰서 다음 스테이지 지정
    if ( stage_to == 0 ) this.stageNum++;
    else this.stageNum = stage_to;
    this.addLog('move to stage ' + this.stageNum);

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
            this.addLog('selected phase: ' + this.phaseNum);
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

  /**
   * 변수 가시성 변화 확인
  */
  visible(text: string): boolean {
    return eval(this.substituteParams([text])[0]);
  }

  /**
   * 변수출력용 배열 설정
  */
  private formatAsDoubleDimension(): Array<any[]> {
    let arr = new Array();
    arr.push([]);
    this.paramMap.forEach((value, key) => {
      if ( value.visible != 'false' ) {
        if ( arr[arr.length-1].length < 3 ) {
          arr[arr.length-1].push({key: key, value: value});
        } else {
          arr.push([{key: key, value: value}]);
        }
      }
    });
    return arr;
  }

  /**
   * phase의 content의 '{{변수명}}' 형식으로 설정된 구문을 '변수값'으로 바꿈
   * @param {Phase} phase 변경할 phase 객체
   * @returns {Phase} 변경된 phase 객체 (파라미터로 받은 phase가 아닌, 새로 생성한 객체)
  */
  private encodePhase(phase: Phase): Phase {
    let clone: Phase = {
      phase_num: phase.phase_num,
      content: phase.content,
      condition: phase.condition,
      choice: phase.choice
    };
    this.paramMap.forEach((value, key) => {
      let regex = new RegExp('\\{\\{' + key + '\\}\\}', 'g');
      clone.content = clone.content.replace(regex, value.value);
    });
    return clone;
  }

  private surroundText(text: string): string {
    return '[<u>' + text + '</u>]';
  }

  /**
   * X → 0X
  */
  private set2LetterFormat(num) {
    num = num >= 10 ? num : '0' + num;
    return num;
  }

  /**
   * get now time
   * @returns {string} [HH:mm:ss]
  */
  private getNowTime(): string {
    let date = new Date();
    return '['
      + this.set2LetterFormat(date.getHours()) + ":"
      + this.set2LetterFormat(date.getMinutes()) + ":"
      + this.set2LetterFormat(date.getSeconds()) + ']';
  }

  /**
   * get now stage, phase
   * @returns {string} [ stage - phase ]
  */
  private location(): string {
    return '[ ' + this.stageNum + ' - ' + this.phaseNum + ' ]';
  }

  /**
   * add log
  */
  private addLog(log: string, color?: string) {
    if ( color ) this.logs.push({time: this.getNowTime(), location: this.location(), log: log, color: color});
    else this.logs.push({time: this.getNowTime(), location: this.location(), log: log, color: this.Colors.NORMAL});
    eval('$("#debug").scrollTop($("#debug")[0].scrollHeight)'); // move scroll to bottom; not working well
  }

  printAllVariablesToLog() {
    this.paramMap.forEach((value, key) => {
      this.addLog('variable) ' + this.surroundText(key) + ': ' + value.value + ', type: ' + value.type + ', visibility: ' + this.visible(value.visible), this.Colors.HIGHLIGHT);
    });
  }

}

interface Variable {
  // value: string | number,
  value: any,
  visible: string,
  type: string
}

interface IfElseState {
  if_slot: string,
  do_slot: string
}

interface Phase {
  phase_num: number,
  content: string,
  condition: any[],
  choice: any[]
}

interface Log {
  time: string,
  location: string,
  log: string,
  color: string
}
