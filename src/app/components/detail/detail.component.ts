import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Cv } from 'src/app/models/cv';
import { EmbaucheService } from 'src/app/services/embauche.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input({ required: true }) cv!: Cv;

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // S'abonner au Subject pour recevoir les événements de sélection
    this.sharedService.selectedCv$.subscribe((selectedCv) => {
      this.cv = selectedCv;
    });
  }

  embaucher() {
    this.embaucheService.embaucher(this.cv);
  }

  showDetails() {
    const link = ['cv', this.cv.id];
    this.router.navigate(link);
  }
}
