import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  template: `<div class="alert alert-success">Successfully signed out!</div>`
})
export class SignoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.signout();
    this.authService.isSignedIn.next(false);
    setTimeout(() => {
      this.router.navigate(['']);
  }, 3000);
  }

}
