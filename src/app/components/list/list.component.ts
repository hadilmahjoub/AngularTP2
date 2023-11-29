import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input({ required: true }) cvs!: Cv[];

  @Output() selectedCv = new EventEmitter<Cv>();

  constructor() {}

  ngOnInit(): void {}

  selectCv(selected: Cv) {
    console.log(selected);
    this.selectedCv.emit(selected);
  }
}

// DONE
