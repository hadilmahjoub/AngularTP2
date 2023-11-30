import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private cvs!: Cv[];

  constructor(private toastr: ToastrService) {
    this.cvs = [];
  }

  getEmbauches(): Cv[] {
    return this.cvs;
  }

  embaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index < 0) {
      this.cvs.push(cv);
      this.toastr.success(`${cv.name} est embauché avec succès`);
    } else {
      this.toastr.error(`${cv.name} est deja embauché`);
    }
  }

  debaucher(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
    }
  }
}
