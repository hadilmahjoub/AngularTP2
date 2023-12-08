import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/models/cv';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input({ required: true }) cvs!: Cv[];

  //* NO LONGER IN NEED
  // @Output() selectedCv = new EventEmitter<Cv>();

  constructor(
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  selectCv(selectedCv: Cv) {
    console.log(selectedCv);

    //* NO LONGER IN NEED
    // this.selectedCv.emit(selectedCv);
    
    this.sharedService.sendCv(selectedCv); // Utiliser le Subject pour émettre l'événement
  }
}