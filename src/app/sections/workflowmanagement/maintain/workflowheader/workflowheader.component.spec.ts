import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowheaderComponent } from './workflowheader.component';

describe('WorkflowheaderComponent', () => {
  let component: WorkflowheaderComponent;
  let fixture: ComponentFixture<WorkflowheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
