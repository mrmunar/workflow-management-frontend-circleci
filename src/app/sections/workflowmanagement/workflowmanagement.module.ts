import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MaintainComponent } from './maintain/maintain.component';
import { WorkflowmanagementRoutingModule } from './/workflowmanagement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkflowmanagementRoutingModule
  ],
  declarations: [ListComponent, MaintainComponent]
})
export class WorkflowmanagementModule { }
