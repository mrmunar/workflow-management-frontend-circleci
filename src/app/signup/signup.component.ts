import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  status = { message: '' };
  errors = { errors: {} };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    status = null;
    this.authService.signup(form).subscribe(
      (response) => {
        this.status = response.json();
      },
      (error) => {
        this.errors = error.json();
      }
    );
  }
}
