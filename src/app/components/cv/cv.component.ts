import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Cv } from 'src/app/models/cv';
import { CvService } from 'src/app/services/cv.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs!: Cv[];
  selectedCv!: Cv;

  constructor(
    private cvService: CvService,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.cvService.getCvsAPI().subscribe(
      (cvs) => (this.cvs = cvs),
      (error) => {
        console.log(error.message);
        this.toastr.error('Could not load api data');
        this.cvs = this.cvService.getCvs();
      }
    );
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
    this.sharedService.selectCv(cv); // Utiliser le Subject pour émettre l'événement
  }
}
