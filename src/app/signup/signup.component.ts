import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  status = [];
  errors = [];
  username = '';
  email = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.status = [];
    this.errors = [];
    this.authService.signup(form).subscribe(
      (response) => {
        this.status = response.json();
        console.log(this.status);
        this.username = form.value.username;
        this.email = form.value.email;
        form.reset();
      },
      (error) => {
        this.errors = error.json().errors;
        console.log(this.errors);
      }
    );
  }
}
