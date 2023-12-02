import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit{
  private email!: string;
  private pass!: string;
  
  ngOnInit(): void {
  }

  onLogin(login: NgForm) {
    console.log(login.form.value);
  }
}
