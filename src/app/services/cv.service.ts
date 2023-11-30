import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs!: Cv[];

  constructor() {}

  getCvs(): Cv[] {
    this.cvs = [
      new Cv(
        0,
        'Mahjoub',
        'Hadil',
        'cv_profile_2.png',
        'Student',
        12345678,
        22
      ),
      new Cv(1, 'Omri', 'Wejden', 'cv_profile_1.png', 'Student', 11223344, 22),
      new Cv(2, 'Unknown', 'Test', ' ', 'None', 666666666, 99),
    ];
    return this.cvs;
  }

  getCvById(id: number): Cv {
    const cv = this.cvs.find((cv) => cv.id == id);
    return cv!;
  }
}
