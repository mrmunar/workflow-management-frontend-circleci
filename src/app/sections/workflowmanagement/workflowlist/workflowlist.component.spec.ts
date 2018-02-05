import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowlistComponent } from './workflowlist.component';

describe('WorkflowlistComponent', () => {
  let component: WorkflowlistComponent;
  let fixture: ComponentFixture<WorkflowlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
