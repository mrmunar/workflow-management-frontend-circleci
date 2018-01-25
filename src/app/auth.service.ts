import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  signup(form: NgForm) {
    return this.http.post(environment.apiUrl + 'user/signup',
     {username: form.value.username, email: form.value.email, password: form.value.password},
     {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
  }

  signin(form: NgForm) {
    return this.http.post(environment.apiUrl + 'user/signin',
     {username: form.value.username, password: form.value.password},
     {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
     .map(
        (response) => {
          const token = response.json().token;
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
}
