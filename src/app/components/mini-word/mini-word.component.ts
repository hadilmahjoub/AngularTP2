import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  text: string = 'Hello World!';
  textColor: string = '';
  fontSize: number = 14;
  selectedFont: string = 'Arial';
  isBold: boolean = false;
  isUnderlined: boolean = false;
  isItalic: boolean = false;

  fontList: string[] = [
    'Arial',
    'Verdana',
    'Times New Roman',
    'Courier New',
    'Georgia',
  ];

  getStyle() {
    return {
      'padding-top': '20px',
      color: this.textColor,
      'font-size.px': this.fontSize,
      'font-family': this.selectedFont,
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'text-decoration': this.isUnderlined ? 'underline' : 'none',
    };
  }
}
