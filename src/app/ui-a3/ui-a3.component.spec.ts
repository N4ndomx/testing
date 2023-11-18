import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiA3Component } from './ui-a3.component';

describe('UiA3Component', () => {
  let component: UiA3Component;
  let fixture: ComponentFixture<UiA3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiA3Component]
    });
    fixture = TestBed.createComponent(UiA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
