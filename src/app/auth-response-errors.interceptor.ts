import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/do';

export class AuthResponseErrorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(event);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
        if (err.status < 200 || err.status >= 500 || err['error']['error']) {
          // window.location.href = '/servererror';
        }
      }
    });
  }
}
