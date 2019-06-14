import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tech3Component } from './tech3.component';

describe('Tech3Component', () => {
  let component: Tech3Component;
  let fixture: ComponentFixture<Tech3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tech3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tech3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
