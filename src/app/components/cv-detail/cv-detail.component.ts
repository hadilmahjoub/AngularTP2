import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/models/cv';
import { CvService } from 'src/app/services/cv.service';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent implements OnInit {
  // cv: Cv = new Cv(10, 'Name', 'Firstname', '', 'CEO', 12345656, 30);
  cv!: Cv;

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string);
    // console.log(id);

    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvByIdAPI(params['id']).subscribe(
        (cv: Cv) => (this.cv = cv),
        (error) => {
          console.log(error);

          if (error.statusText == 'Not Found') {
            this.router.navigate(['cv']);
            this.toastr.error(`Aucun Cv trouvé avec l'ID ${params['id']}`);
          }

          if (error.statusText == 'Unknown Error') {
            this.cv = this.cvService.getCvById(params['id']);

            if (this.cv != undefined) {
              this.router.navigate(['cv', params['id']]);
            } else {
              this.router.navigate(['cv']);
              this.toastr.error(`Aucun Cv trouvé avec l'ID ${params['id']}`);
            }
          }
        }
      );
    });
  }

  deleteCv() {
    this.cvService.deleteCv(this.cv);
    this.embaucheService.debaucher(this.cv);
    this.router.navigate(['cv']);
  }
}
