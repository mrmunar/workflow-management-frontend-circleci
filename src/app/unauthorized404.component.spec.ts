import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unauthorized404Component } from './unauthorized404.component';

describe('Unauthorized404Component', () => {
  let component: Unauthorized404Component;
  let fixture: ComponentFixture<Unauthorized404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unauthorized404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unauthorized404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
