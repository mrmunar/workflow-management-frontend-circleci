import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  status = [];
  loginError = [];
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.checkIfLoggedIn()) {
      this.router.navigate(['section']);
    }
  }

  onSignin(form: NgForm) {
    this.status = [];
    this.error = '';
    this.authService.signin(form).subscribe(
      (response) => {
        this.status = response.token;
        this.authService.isSignedIn.next(true);
        console.log(response);
        setTimeout(() => {
            this.router.navigate(['section']);
        }, 3000);
      },
      (error) => {
        if (error.json().error) {
          this.error = error.json().error;
          console.log('generic error');
        } else if (error.json().errors) {
          console.log('login error');
          this.loginError = error.json().errors;
        }
        this.authService.isSignedIn.next(false);
        console.log(error.json());
      }
    );
  }
}
