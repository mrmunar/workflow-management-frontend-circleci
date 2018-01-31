import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { Unauthorized404Component } from './unauthorized404.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { SignoutComponent } from './signout/signout.component';
import { ServererrorComponent } from './servererror.component';

const routes: Routes =  [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'section',
    loadChildren: './sections/sections.module#SectionsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'unauthorized404',
    component: Unauthorized404Component
  },
  {
    path: 'servererror',
    component: ServererrorComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
