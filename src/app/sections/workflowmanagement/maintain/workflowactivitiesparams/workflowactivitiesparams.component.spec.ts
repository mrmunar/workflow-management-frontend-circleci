import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowactivitiesparamsComponent } from './workflowactivitiesparams.component';

describe('WorkflowactivitiesparamsComponent', () => {
  let component: WorkflowactivitiesparamsComponent;
  let fixture: ComponentFixture<WorkflowactivitiesparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowactivitiesparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowactivitiesparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
