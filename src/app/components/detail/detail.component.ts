import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input({ required: true }) cv!: Cv;

  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {}

  embaucher() {
    this.embaucheService.embaucher(this.cv);
  }
}
