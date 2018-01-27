import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate() {
    if (!this.auth.checkIfLoggedIn()) {
      this.auth.isSignedIn.next(false);
      this.router.navigate(['unauthorized404']);
      return false;
    } else {
      this.auth.isSignedIn.next(true);
      return true;
    }
  }
  canActivateChild() {
    if (!this.auth.checkIfLoggedIn()) {
      this.auth.isSignedIn.next(false);
      this.router.navigate(['unauthorized404']);
      return false;
    } else {
      this.auth.isSignedIn.next(true);
      return true;
    }
  }
}
