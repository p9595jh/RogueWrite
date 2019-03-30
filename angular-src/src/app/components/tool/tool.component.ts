import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  options: any = {
    placeholderText: '',
    height: 500,
    imageDefaultAlign: 'left',
    imageDefaultWidth: 0,

    charCounterCount: true,
    imageUploadParam: 'image',
    imageUploadURL: '/games/images',
    imageUploadMethod: 'POST',
    imageMaxSize: 5 * 1024 * 1024,  // maximun size : 5MB
    imageAllowTypes: [ 'jpeg', 'jpg', 'png', 'gif', 'webp' ],
  };

  constructor(
    private funcService: FuncService,
    private snackBar: MatSnackBar
  ) {
    this.funcService.setTitle('게임 만들기');
  }

  ngOnInit() {
  }

  extractTag(area: HTMLInputElement, tags: HTMLInputElement) {
    if ( !area.value || area.value == '' ) {
      this.snackBar.open('비어있습니다.', '', {
        duration: 1000,
      });
      return false;
    }

    tags.value = area.value;
    tags.select();
    document.execCommand('copy');

    this.snackBar.open('복사되었습니다.', '', {
      duration: 1000,
    });
  }

}
