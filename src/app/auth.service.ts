import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class AuthService {
  isSignedIn = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) {}

  signup(form) {
    return this.http.post(environment.apiUrl + 'user/signup',
     {username: form.username, email: form.email, password: form.password});
  }

  signin(form) {
    return this.http.post(environment.apiUrl + 'user/signin',
     {username: form.value.username, password: form.value.password})
     .map(
        (response: Response) => {
          const token = response['token'];
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          return { token: token, decoded: JSON.parse(window.atob(base64)) };
        }
      ).do(
        tokenData => {
          localStorage.setItem('token', tokenData.token);
        }
      );
  }

  signout() {
    try {
      localStorage.removeItem('token');
    } catch {
      console.log('Signout Error: Token not found!');
    }
  }

  checkIfLoggedIn() {
    // Refresh authenticate and refresh token
    this.http.get(environment.apiUrl + 'user/isLoggedIn').subscribe(
      (response) => {
        localStorage.setItem('token', response['token']);
        console.log('Athenticated and refreshed token!');
      },
      (error) => {
        console.log('Token failed authentication!');
      }
    );
    // Check if token was updated (not expired at least)
    const jwtHelper: JwtHelperService = new JwtHelperService('');
    const token = localStorage.getItem('token');
    let isLoggedIn: boolean;
    try {
      isLoggedIn = !jwtHelper.isTokenExpired(token);
    } catch {
      isLoggedIn = false;
    }
    this.isSignedIn.next(isLoggedIn);
    return isLoggedIn;
  }
}
