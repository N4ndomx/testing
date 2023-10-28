import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return p=16.0 if x0=0, x1=4, numSeg=4, error=0.0001, and f(x)=2x', () => {
    const result = component.simpson(0, 4, 4, 0.0001, (x) => 2 * x);
    expect(result).toBeCloseTo(16.0, 4); // Utiliza toBeCloseTo para comparar números con tolerancia
  });

  it('should return p=0.3333 if x0=0, x1=1, numSeg=4, error=0.0001, and f(x)=x^2', () => {
    const result = component.simpson(0, 1, 4, 0.0001, (x) => x * x);
    expect(result).toBeCloseTo(0.3333, 4);
  });

  it('should return p=1.38 if x0=1, x1=4, numSeg=6, error=0.001, and f(x)=1/x', () => {
    const result = component.simpson(1, 4, 6, 0.001, (x) => 1 / x);
    expect(result).toBeCloseTo(1.38, 2);
  });
});
