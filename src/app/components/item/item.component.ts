import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input({ required: true })
  cv!: Cv;

  @Output() selected = new EventEmitter<Cv>();

  constructor() {}

  ngOnInit(): void {}

  returnSelectedCv() {
    this.selected.emit(this.cv);
  }
}
