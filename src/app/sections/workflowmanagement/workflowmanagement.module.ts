import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaintainComponent } from './maintain/maintain.component';
import { WorkflowmanagementRoutingModule } from './workflowmanagement-routing.module';
import { WorkflowheaderComponent } from './maintain/workflowheader/workflowheader.component';
import { WorkflowprocessComponent } from './maintain/workflowprocess/workflowprocess.component';
import { WorkflowfieldsComponent } from './maintain/workflowfields/workflowfields.component';
import { WorkflowmanagementService } from './workflowmanagement.service';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { AppBootstrapModule } from '../../app-bootstrap.module';
import { WorkflowprocessactivitiesComponent } from './maintain/workflowprocessactivities/workflowprocessactivities.component';
import { WorkflowactivitiesparamsComponent } from './maintain/workflowactivitiesparams/workflowactivitiesparams.component';
import { WorkflowlistComponent } from './workflowlist/workflowlist.component';

@NgModule({
  imports: [
    CommonModule,
    WorkflowmanagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    AppBootstrapModule,
  ],
  declarations: [
    MaintainComponent,
    WorkflowheaderComponent,
    WorkflowprocessComponent,
    WorkflowfieldsComponent,
    WorkflowprocessactivitiesComponent,
    WorkflowactivitiesparamsComponent,
    WorkflowlistComponent,
  ],
  bootstrap: [WorkflowlistComponent],
  providers: [WorkflowmanagementService]
})
export class WorkflowmanagementModule { }
