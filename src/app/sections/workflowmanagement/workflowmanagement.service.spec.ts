import { TestBed, inject } from '@angular/core/testing';

import { WorkflowmanagementService } from './workflowmanagement.service';

describe('WorkflowmanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowmanagementService]
    });
  });

  it('should be created', inject([WorkflowmanagementService], (service: WorkflowmanagementService) => {
    expect(service).toBeTruthy();
  }));
});
