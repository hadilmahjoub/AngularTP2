import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cv } from 'src/app/models/cv';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  cv!: Cv;

  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.form.value);
    const res = form.form.value;
    this.cv = new Cv(
      3,
      res.name,
      res.firstname,
      res.path,
      res.job,
      res.cin,
      res.age
    );
    console.log(this.cv);
    this.cvService.addCv(this.cv);
    this.cv = new Cv();
    this.router.navigate(['cv']);
  }
}
