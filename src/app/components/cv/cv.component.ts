import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
      (cvs) => {
        this.toastr.success('API Data Loaded Succesfully');
        this.cvs = cvs;
      },
      (error) => {
        console.log('FETCH ERROR IN CvComponent : ', error.message);
        this.toastr.error('Could not Load API Data');
        this.cvs = this.cvService.getCvs();
      }
    );

    this.sharedService.selectedCv$.subscribe((cv) => this.selectCv(cv));
  }

  selectCv(cv: Cv) {
    this.selectedCv = cv;
    console.log('SELECTED CV in CvComponent: ', cv);
  }
}
