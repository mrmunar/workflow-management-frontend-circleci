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
  // isSignedIn = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) {}

  saveWorkflowHeader(form) {
    return this.http.post(environment.apiUrl + 'workflowmanagement/createworkflowheader',
     {
       id: form.id,
       workflow_header_desc: form.workflow_header_desc,
       workflow_process_id: form.workflow_process_id
      });
  }


}
