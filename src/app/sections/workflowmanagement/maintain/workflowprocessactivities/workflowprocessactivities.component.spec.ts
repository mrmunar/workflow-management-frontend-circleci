import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowprocessactivitiesComponent } from './workflowprocessactivities.component';

describe('WorkflowprocessactivitiesComponent', () => {
  let component: WorkflowprocessactivitiesComponent;
  let fixture: ComponentFixture<WorkflowprocessactivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowprocessactivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowprocessactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
