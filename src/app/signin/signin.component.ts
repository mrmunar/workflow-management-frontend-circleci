import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  status = [];
  loginError = [];
  errors = '';
  signinForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.signinForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  onSignin() {
    this.authService.signin(this.signinForm).subscribe(
      (response) => {
        this.status = [];
        this.errors = '';
        this.status = response['token'];
        this.authService.isSignedIn.next(true);
        console.log(response);
        setTimeout(() => {
            this.router.navigate(['section']);
        }, 3000);
      },
      (error: Response) => {
        this.status = [];
        this.errors = '';
        if (!this.errors) {
          if (error['error']['errors']['login']) {
            this.errors = error['error']['errors']['login'];
          }
        }
        this.authService.isSignedIn.next(false);
        // console.log(error['error']);
      }
    );
  }
}
