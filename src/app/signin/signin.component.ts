import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  status = [];
  errors = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.status = [];
    this.errors = [];
    this.authService.signin(form).subscribe(
      (response) => {
        this.status = response.token;
        console.log(response);
      },
      (error) => {
        this.errors = error.json().errors;
        console.log(error.json());
      }
    );
  }
}
