import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkflowHeader } from '../../workflowmanagement';
import { WorkflowmanagementService } from '../../workflowmanagement.service';
import { AuthService } from '../../../../auth.service';

@Component({
  selector: 'app-workflowheader',
  templateUrl: './workflowheader.component.html',
  styleUrls: ['./workflowheader.component.css']
})
export class WorkflowheaderComponent implements OnInit {
  workflowHeaderForm: FormGroup;
  workflowHeaderModel: WorkflowHeader;
  id: number;
  statusMessage: string;
  errors: string;

  constructor(private wmService: WorkflowmanagementService, private fb: FormBuilder, private authService: AuthService) {
    this.workflowHeaderForm = fb.group({
      'workflow_header_desc': [null, Validators.required],
      'workflow_process_id': [null],
    });
  }

  ngOnInit() {
  }

  prepareSave(): WorkflowHeader {
    const workflowHeaderModel = this.workflowHeaderForm.value;
    const saveWorkflowHeader: WorkflowHeader = {
      id: workflowHeaderModel.id,
      workflow_header_desc: workflowHeaderModel.workflow_header_desc,
      workflow_process_id: workflowHeaderModel.workflow_process_id
    };
    return saveWorkflowHeader;
  }

  saveWorkflowHeader() {
    this.workflowHeaderModel = this.prepareSave();
    this.statusMessage = '';
    this.errors = '';
    this.wmService.saveWorkflowHeader(this.workflowHeaderModel).subscribe(
      (response: Response) => {
        this.statusMessage = response['message'];
        console.log(this.statusMessage);
      },
      (error: Response) => {
        this.errors = this.authService.checkIfServerIsUp(error);
        console.log(error);
      }
    );
  }

}
