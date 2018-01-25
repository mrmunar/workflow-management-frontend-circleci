import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';

const routes: Routes =  [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    component: SigninComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
