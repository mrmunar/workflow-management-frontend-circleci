import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardService } from './auth-guard.service';
import { AppBootstrapModule } from './app-bootstrap.module';
import { SectionsModule } from './sections/sections.module';
import { Unauthorized404Component } from './unauthorized404.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { SignoutComponent } from './signout/signout.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { ServererrorComponent } from './servererror.component';
import { AuthResponseErrorsInterceptor } from './auth-response-errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    Unauthorized404Component,
    PagenotfoundComponent,
    SignoutComponent,
    ServererrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SectionsModule,
    AppBootstrapModule,
    SectionsModule,
    SharedComponentsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
