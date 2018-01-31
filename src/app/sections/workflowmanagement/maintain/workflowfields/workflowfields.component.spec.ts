import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowfieldsComponent } from './workflowfields.component';

describe('WorkflowfieldsComponent', () => {
  let component: WorkflowfieldsComponent;
  let fixture: ComponentFixture<WorkflowfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
