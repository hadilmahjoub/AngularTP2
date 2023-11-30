import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent {
  bgColorDefault = 'blue';
  bgColor = 'blue';

  result: any = 'N/A';

  updateColor(newColor: string) {
    this.bgColor = newColor;
  }

  resetColor() {
    this.bgColor = this.bgColorDefault;
  }

  showValue(value: any) {
    this.result = value;
  }

  updateParentBgColor(newBgColor: any) {
    this.bgColor = newBgColor;
  }
}
