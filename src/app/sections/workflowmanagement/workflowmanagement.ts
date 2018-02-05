export class WorkflowHeader {
  id: number;
  workflow_header_desc: string;
  workflow_process_id: number;
}

export class WorkflowProcess {
  id: number;
  workflow_process_desc: string;
}

export class WorkflowProcessActivities {
  id: number;
  activity_id: number;
  processor: number;
}
