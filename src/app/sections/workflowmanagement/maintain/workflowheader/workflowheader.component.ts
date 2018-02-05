import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkflowHeader } from '../../workflowmanagement';
import { WorkflowmanagementService } from '../../workflowmanagement.service';
import { AuthService } from '../../../../auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-workflowheader',
  templateUrl: './workflowheader.component.html',
  styleUrls: ['./workflowheader.component.css']
})
export class WorkflowheaderComponent implements OnInit {
  @Input('router_id') router_id: number;
  id: number;
  workflowHeaderForm: FormGroup;
  workflowHeaderModel: WorkflowHeader;
  wpdropdown = [];
  modalRef: BsModalRef;
  statusMessage: string;
  errors: string;

  constructor(
    private wmService: WorkflowmanagementService,
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: BsModalService
  ) {
    this.workflowHeaderForm = fb.group({
      'workflow_header_desc': [null, Validators.required],
      'workflow_process_id': [null],
    });
    this.getWorkflowProcessDrpDwn();
  }

  ngOnInit() {
    this.wmService.reloadWpdropdown.subscribe(
      (res) => {
        if (res) {
          console.log('reload sub: ' + res);
          this.getWorkflowProcessDrpDwn();
        }
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    this.wmService.saveWorkflowHeader(this.id, this.workflowHeaderModel).subscribe(
      (response: Response) => {
        this.statusMessage = response['message'];
        this.id = response['id'];
        this.wmService.header_id.next(this.id);
      }
    );
  }

  getWorkflowProcessDrpDwn() {
    this.wmService.getWorkflowProcessDrpDwn().subscribe(
      (response: Response) => {
        this.wpdropdown = response['result'];
      }
    );
  }

}
