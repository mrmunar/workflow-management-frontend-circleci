import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Signup } from './auth';

// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { letProto } from 'rxjs/operator/let';


@Injectable()
export class AuthService {
  headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
  isSignedIn = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) {

  }

  signup(form: Signup) {
    return this.http.post(environment.apiUrl + 'user/signup',
     {username: form.username, email: form.email, password: form.password},
     {headers: this.headers});
  }

  signin(form: NgForm) {
    return this.http.post(environment.apiUrl + 'user/signin',
     {username: form.value.username, password: form.value.password},
     {headers: this.headers})
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

  checkIfLoggedIn(): boolean {
    const jwtHelper: JwtHelperService = new JwtHelperService('');
    const token = localStorage.getItem('token');
    let isLoggedIn: boolean;
    try {
      isLoggedIn = !jwtHelper.isTokenExpired(token);
    } catch {
      isLoggedIn = false;
    }
    return isLoggedIn;
  }

  checkIfServerIsUp(error: Response): string {
    let errorMsg: string;
    if (error['error']['error']) {
      // SQL or Token related errors
      errorMsg = error['error']['error'];
    } else if (error.status < 200) {
      // If backend server is down
      errorMsg = 'Server connection error';
    }
    return errorMsg;
  }
}
