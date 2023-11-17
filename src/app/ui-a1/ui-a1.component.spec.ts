import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiA1Component } from './ui-a1.component';

describe('UiA1Component', () => {
  let component: UiA1Component;
  let fixture: ComponentFixture<UiA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiA1Component]
    });
    fixture = TestBed.createComponent(UiA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
