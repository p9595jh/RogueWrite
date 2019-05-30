import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  svg: number = 0;

  one = this.getIframe(['stage', 'phase', 'choice'], 'alpha');
  two = this.getIframe(['text', 'math_number'], 'bravo');
  three = this.getIframe(['logic_boolean', 'logic_negate', 'logic_compare', 'logic_operation'], 'charlie');
  four = this.getIframe(['if_block', 'else_block', 'rand_block'], 'delta');
  five = this.getIframe(['text', 'math_number', 'logic_boolean', 'variable'], 'echo');
  six = this.getIframe(['if_block', 'else_block', 'text', 'math_number', 'logic_boolean', 'is_block', 'variable'], 'foxtrot');
  seven = this.getIframe(['math_number', 'rand_block', 'math_arithmetic', 'is_block', 'variable'], 'golf');
  eight = this.getIframe(['math_arithmetic', 'variable'], 'hotel');

  constructor(
    private funcService: FuncService
  ) {
    this.svg = this.funcService.getRandomSVGBackground();
    this.funcService.setTitle('튜토리얼');
  }

  ngOnInit() {
  }

  private getIframe(categories: string[], block: string, height?: number): string {
    const h = height ? height : 350;
    return `<iframe src="${this.funcService.ServerAddress}/modals/tutorial/${categories.join('-')}/${block}/${h}" style="width: 100%; height: ${h}px;"></iframe>`;
  }

}
