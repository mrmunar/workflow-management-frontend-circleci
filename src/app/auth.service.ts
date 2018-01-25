import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms';

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  signup(form: NgForm) {
    return this.http.post(environment.apiUrl + 'user/signup',
     {name: form.value.username, email: form.value.email, password: form.value.password},
     {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
  }
}
