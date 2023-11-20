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
    expect(component.simpson(0, 4, 4, 0.0001, (x) => 2 * x, 0)).toBeCloseTo(16.0, 4); // Utiliza toBeCloseTo para comparar números con tolerancia
  });

  it('should return p=0.3333 if x0=0, x1=1, numSeg=4, error=0.0001, and f(x)=x^2', () => {
    const result = component.simpson(0, 1, 4, 0.0001, (x) => x * x, 0);
    expect(result).toBeCloseTo(0.3333, 4);
  });

  it('should return p=1.38 if x0=1, x1=4, numSeg=6, error=0.001, and f(x)=1/x', () => {
    const result = component.simpson(1, 4, 6, 0.001, (x) => 1 / x, 0);
    expect(result).toBeCloseTo(1.38, 1);
  });

  it('Distribution T', () => {
    const result = component.simpson(0, 1.1, 10, 0.00001, (x) => x, 9);
    expect(result).toBeCloseTo(0.35005, 1);
  });

  it('Distribution T', () => {
    const result = component.simpson(0, 1.1812, 10, 0.00001, (x) => x, 10);
    expect(result).toBeCloseTo(0.36757, 1);
  });

  it('Distribution T', () => {
    const result = component.simpson(0, 2.75, 10, 0.00001, (x) => x, 30);
    expect(result).toBeCloseTo(0.49500, 1);
  });
});
