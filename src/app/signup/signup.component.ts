import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: Signup;
  signupForm: FormGroup;

  statusMessage: string;
  errors: string;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.signupForm = fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.required],
    });
  }

  ngOnInit() {}

  prepareSave(): Signup {
    const signupModel = this.signupForm.value;
    const saveSignup: Signup = {
      username: signupModel.username,
      email: signupModel.email,
      password: signupModel.password
    };
    return saveSignup;
  }

  onSignup() {
    this.signup = this.prepareSave();
    this.statusMessage = '';
    this.errors = '';
    this.authService.signup(this.signup).subscribe(
      (response: Response) => {
        this.statusMessage = response['message'];
        console.log(this.statusMessage);
        this.signupForm.reset();
      },
      (error: Response) => {
        this.errors = this.authService.checkIfServerIsUp(error);
        if (!this.errors) {
          if (error['error']['errors']['email']) {
            this.errors = error['error']['errors']['email'];
          }
        }
        console.log(this.errors);
      }
    );
  }
}
