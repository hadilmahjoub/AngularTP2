import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  value: number = 0;
  myFavoriteColor = 'purple';

  @Output()
  valueChange = new EventEmitter();

  @Output()
  bgColorChange = new EventEmitter();

  @Input()
  color = '';

  incrementer() {
    this.value++;
    this.valueChange.emit(this.value);
  }

  updateParentBgColor() {
    this.bgColorChange.emit(this.myFavoriteColor);
  }
}
