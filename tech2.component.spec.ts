import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tech2Component } from './tech2.component';

describe('Tech2Component', () => {
  let component: Tech2Component;
  let fixture: ComponentFixture<Tech2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tech2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tech2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
