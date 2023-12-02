import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from 'src/app/models/cv';
import { CvService } from 'src/app/services/cv.service';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit{
  // cv: Cv = new Cv(10, 'Name', 'Firstname', '', 'CEO', 12345656, 30);
  cv!: Cv;

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string);
    this.cv = this.cvService.getCvById(id);
  }

  deleteCv(cv: Cv) {
    this.cvService.deleteCv(this.cv);
    this.embaucheService.debaucher(this.cv);
    this.router.navigate(['cv']);
  }
}
