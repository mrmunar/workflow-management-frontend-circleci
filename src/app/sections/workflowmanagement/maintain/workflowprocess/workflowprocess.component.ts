import { WorkflowmanagementService } from './../../workflowmanagement.service';
import { WorkflowProcess } from './../../workflowmanagement';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workflowprocess',
  templateUrl: './workflowprocess.component.html',
  styleUrls: ['./workflowprocess.component.css']
})
export class WorkflowprocessComponent implements OnInit {
  @Input('id') id: number;
  workflowProcessForm: FormGroup;
  workflowProcessModel: WorkflowProcess;
  statusMessage: string;
  errors: string;

  constructor(private wmService: WorkflowmanagementService, private fb: FormBuilder) {
    this.workflowProcessForm = fb.group({
      'workflow_process_desc': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  prepareSave(): WorkflowProcess {
    const workflowProcessModel = this.workflowProcessForm.value;
    const saveWorkflowProcess: WorkflowProcess = {
      id: workflowProcessModel.id,
      workflow_process_desc: workflowProcessModel.workflow_process_desc
    };
    return saveWorkflowProcess;
  }

  saveWorkflowProcess() {
    this.workflowProcessModel = this.prepareSave();
    this.statusMessage = '';
    this.errors = '';
    this.wmService.saveWorkflowProcess(this.id, this.workflowProcessModel).subscribe(
      (response: Response) => {
        this.statusMessage = response['message'];
        this.id = response['id'];
        this.wmService.reloadWpdropdown.next(true);
      }
    );
  }

}
