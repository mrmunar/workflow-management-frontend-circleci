import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkflowProcessActivities } from '../../workflowmanagement';
import { WorkflowmanagementService } from '../../workflowmanagement.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-workflowprocessactivities',
  templateUrl: './workflowprocessactivities.component.html',
  styleUrls: ['./workflowprocessactivities.component.css']
})
export class WorkflowprocessactivitiesComponent implements OnInit {
  @Input('headerid') headerid: number;
  id: number;
  workflowProcessActivitiesForm: FormGroup;
  workflowProcessActivitiesModel: WorkflowProcessActivities;
  statusMessage: string;
  errors: string;
  wpadropdown = [];
  addProcessActivitymodalRef: BsModalRef;
  addParamsActivitymodalRef: BsModalRef;

  constructor(private wmService: WorkflowmanagementService, private fb: FormBuilder, private modalService: BsModalService) {
    this.workflowProcessActivitiesForm = fb.group({
      'activity_id': [null, Validators.required],
      'processor': [null, Validators.required]
    });
    this.getParamsActivitiesDrpDwn();
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, layer: string) {
    if (layer === 'processActivity') { this.addProcessActivitymodalRef = this.modalService.show(template); }
    if (layer === 'paramsActivity') { this.addParamsActivitymodalRef = this.modalService.show(template); }
  }

  prepareSave(): WorkflowProcessActivities {
    const workflowProcessActivitiesModel = this.workflowProcessActivitiesForm.value;
    const saveworkflowProcessActivities: WorkflowProcessActivities = {
      id: workflowProcessActivitiesModel.id,
      activity_id: workflowProcessActivitiesModel.activity_id,
      processor: workflowProcessActivitiesModel.processor
    };
    return saveworkflowProcessActivities;
  }

  saveWorkflowProcessActivities() {
    this.workflowProcessActivitiesModel = this.prepareSave();
    this.statusMessage = '';
    this.errors = '';
    this.wmService.saveworkflowProcessActivities(this.id, this.workflowProcessActivitiesModel).subscribe(
      (response: Response) => {
        this.statusMessage = response['message'];
        this.id = response['id'];
      }
    );
  }

  getParamsActivitiesDrpDwn() {
    this.wmService.getParamsActivitiesDrpDwn().subscribe(
      (response: Response) => {
        this.wpadropdown = response['result'];
      }
    );
  }
}
