import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent implements OnInit {
  embauches!: Cv[];

  constructor(
    private embaucheService: EmbaucheService
  ) {}

  ngOnInit(): void {
    this.embauches = this.embaucheService.getEmbauches();

    // this.embauches = [];

    // this.embauches = [
    //   new Cv(5, 'Test', 'Test', '', 'CEO', 12345000, 55),
    //   new Cv(6, 'Test2', 'Test2', '', 'Manager', 11100000, 55),
    // ]
  }
}
