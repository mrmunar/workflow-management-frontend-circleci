import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../auth-guard.service';
import { ListComponent } from './list/list.component';
import { MaintainComponent } from './maintain/maintain.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: MaintainComponent
  },
  {
    path: 'edit/:id',
    component: MaintainComponent
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class WorkflowmanagementRoutingModule { }
