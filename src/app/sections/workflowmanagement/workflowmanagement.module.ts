import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { MaintainComponent } from './maintain/maintain.component';
import { WorkflowmanagementRoutingModule } from './workflowmanagement-routing.module';
import { TabComponent } from './maintain/tab.component';
import { TabsComponent } from './maintain/tabs.component';
import { WorkflowheaderComponent } from './maintain/workflowheader/workflowheader.component';
import { WorkflowprocessComponent } from './maintain/workflowprocess/workflowprocess.component';
import { WorkflowfieldsComponent } from './maintain/workflowfields/workflowfields.component';
import { WorkflowmanagementService } from './workflowmanagement.service';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    WorkflowmanagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule
  ],
  declarations: [
    ListComponent,
    MaintainComponent,
    TabComponent,
    TabsComponent,
    WorkflowheaderComponent,
    WorkflowprocessComponent,
    WorkflowfieldsComponent,
  ],
  bootstrap: [ListComponent],
  providers: [WorkflowmanagementService]
})
export class WorkflowmanagementModule { }
