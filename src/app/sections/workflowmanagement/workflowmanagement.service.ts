import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class WorkflowmanagementService {
  reloadWpdropdown = new BehaviorSubject<boolean>(null);
  reloadWpadropdown = new BehaviorSubject<boolean>(null);

  header_id = new BehaviorSubject<number>(null);
  process_id = new BehaviorSubject<number>(null);

  constructor(private http: HttpClient) {}

  checkIfProcessAndActivitiesExists(id) {
    return this.http.get(environment.apiUrl + 'workflowmanagement/checkifprocessandactivityexists?id=' + id);
  }

  saveWorkflowHeader(id, form) {
    if (form.workflow_process_id) { this.process_id.next(form.workflow_process_id); }
    return this.http.post(environment.apiUrl + 'workflowmanagement/createUpdateWorkflowHeader',
     {
       id: id,
       workflow_header_desc: form.workflow_header_desc,
       workflow_process_id: form.workflow_process_id
      });
  }

  getWorkflowProcessDrpDwn() {
    this.reloadWpdropdown.next(false);
    return this.http.get(environment.apiUrl + 'workflowmanagement/getWorkflowProcessForDropdown');
  }

  saveWorkflowProcess(id, form) {
    return this.http.post(environment.apiUrl + 'workflowmanagement/createUpdateWorkflowProcess',
     {
       id: id,
       workflow_process_desc: form.workflow_process_desc,
      });
  }

  saveworkflowProcessActivities(id, form) {
    return this.http.post(environment.apiUrl + 'workflowmanagement/createUpdateWorkflowProcessActivities',
     {
       id: id,
       process_id: form.process_id,
       activity_id: form.activity_id,
       processor: form.processor,
      });
  }

  getParamsActivitiesDrpDwn() {
    this.reloadWpadropdown.next(false);
    return this.http.get(environment.apiUrl + 'workflowmanagement/getParamsActivitiesForDropdown');
  }

  getWorkflows() {
    return this.http.get(environment.apiUrl + 'workflowmanagement/getWorkflows');
  }

}
