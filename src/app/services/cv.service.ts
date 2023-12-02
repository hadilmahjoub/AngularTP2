import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

const API_LINK = 'https://apilb.tridevs.net/api/personnes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [
    new Cv(0, 'Mahjoub', 'Hadil', 'cv_profile_2.png', 'Student', 12345678, 22),
    new Cv(1, 'Omri', 'Wejden', 'cv_profile_1.png', 'Student', 11223344, 22),
    new Cv(2, 'Unknown', 'Test', ' ', 'None', 666666666, 99),
  ];

  constructor() {}

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv {
    const cv = this.cvs.find((cv) => cv.id == id);
    return cv!;
  }

  deleteCv(cv: Cv) {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
    }
    console.log(this.cvs);
  }
}
