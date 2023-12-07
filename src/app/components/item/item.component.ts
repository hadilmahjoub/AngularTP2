import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input({ required: true })
  cv!: Cv;

  //* NO LONGER IN NEED
  // @Output() selected = new EventEmitter<Cv>();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  returnSelectedCv() {
    //* NO LONGER IN NEED
    // this.selected.emit(this.cv);

    this.sharedService.selectCv(this.cv);
  }
}
