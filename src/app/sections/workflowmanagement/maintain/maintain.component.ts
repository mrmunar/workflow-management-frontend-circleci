import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkflowmanagementService } from '../workflowmanagement.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.css']
})
export class MaintainComponent implements OnInit {
  header_id: number;
  process_id: number;
  processFieldTabEnabled = true;

  constructor(private route: ActivatedRoute, private wmService: WorkflowmanagementService) {

    this.route.params.subscribe(params => {
      this.header_id = params['id'];
      if (this.header_id) {
        this.checkIfProcessAndActivitiesExists(this.header_id);
      }
    });

    this.wmService.process_id.subscribe(
      res => {
        console.log('this.wmService.process_id: ' + res);
        if (res) { this.processFieldTabEnabled = false; }
      }
    );
  }

  ngOnInit() {
  }

  checkIfProcessAndActivitiesExists(header_id) {
    this.wmService.checkIfProcessAndActivitiesExists(header_id).subscribe(
      res => {
        console.log(res);
        if (res['result']['workflow_process_id']) {
          this.wmService.process_id.next(res['result']['workflow_process_id']);
        }
      }
    );
  }
}
