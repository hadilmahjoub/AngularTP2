import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

const API_LINK = 'https://apil.tridevs.net/api/personnes';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs!: Cv[];

  constructor(private http: HttpClient, private toastr : ToastrService) {
    this.cvs = [
      new Cv(
        1,
        'Mahjoub',
        'Hadil',
        'cv_profile_2.png',
        'Student',
        12345678,
        22
      ),
      new Cv(2, 'Omri', 'Wejden', 'cv_profile_1.png', 'Student', 11223344, 23),
      new Cv(3, 'Ahmed', 'Hadil', 'as.jpg', 'Student', 11122233, 24),
      new Cv(4, 'Unknown', 'Test', ' ', 'None', 666666666, 99),
    ];
  }

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvsAPI(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API_LINK).pipe(
      tap((apiData) => {
        this.cvs = apiData;
      }),

      catchError((error) => {
        console.log(error.message);
        this.toastr.error('Could not Load API Data');

        return of(this.getCvs());
      })
    );
  }

  getCvById(id: number): Cv {
    const cv = this.cvs.find((cv) => cv.id == id);
    return cv!;
  }

  getCvByIdAPI(id: number): Observable<Cv> {
    return this.http.get<Cv>(API_LINK + `/${id}`);
  }

  addCv(cv: Cv) {
    this.cvs.push(cv);
  }

  deleteCv(cv: Cv) {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
    }
    console.log(this.cvs);
  }
}
