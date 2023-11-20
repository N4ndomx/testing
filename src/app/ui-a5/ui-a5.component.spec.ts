import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiA5Component } from './ui-a5.component';

describe('UiA5Component', () => {
  let component: UiA5Component;
  let fixture: ComponentFixture<UiA5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiA5Component]
    });
    fixture = TestBed.createComponent(UiA5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
