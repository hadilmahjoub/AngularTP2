import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedCvSubject = new Subject<Cv>();

  selectedCv$ = this.selectedCvSubject.asObservable();

  selectCv(cv: Cv) {
    this.selectedCvSubject.next(cv);
  }
}
