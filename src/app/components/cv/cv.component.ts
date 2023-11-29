import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs!: Cv[];
  selectedCv!: Cv;

  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }

  selectCv(cv: any) {
    this.selectedCv = cv;
  }
}
