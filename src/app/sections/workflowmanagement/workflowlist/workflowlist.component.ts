import { Component, OnInit } from '@angular/core';
import { WorkflowmanagementService } from '../workflowmanagement.service';

@Component({
  selector: 'app-workflowlist',
  templateUrl: './workflowlist.component.html',
  styleUrls: ['./workflowlist.component.css']
})
export class WorkflowlistComponent implements OnInit {
  results = [];

  constructor(private wmService: WorkflowmanagementService) { }

  ngOnInit() {
    this.getWorkflows();
  }

  getWorkflows() {
    this.wmService.getWorkflows().subscribe(
      (response: Response)  => {
        this.results = response['result'];
      }
    );
  }
}
