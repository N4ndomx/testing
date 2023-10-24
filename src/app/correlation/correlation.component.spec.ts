import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { HttpClientModule } from '@angular/common/http';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: TEST 1
  it('should return r=0.9545 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.correlationCoefficient(component.test1_x, component.test1_y)).toBeCloseTo(0.9545, 2)
    });
  }));

  it('should return rr=0.9111 with the dataset Data_Test1', waitForAsync(() => {
    fixture.whenStable().then(() => {

      expect(component.rcuadrada(component.test1_x, component.test1_y)).toBeCloseTo(0.9111, 2);
    }) // Igual que antes, permitiendo pequeñas diferencias de redondeo
  }));


  //TODO:  Test 2

  it('should return r=0.9333 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.test2_x, component.test2_y);
      expect(result).toBeCloseTo(0.9333, 2); // Permitiendo pequeñas diferencias de redondeo
    });
  }));

  it('should return rr=0.8711 with the dataset Data_Test2', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.rcuadrada(component.test2_x, component.test2_y);
      expect(result).toBeCloseTo(0.8711, 2); // Permitiendo pequeñas diferencias de redondeo
    });
  }));

  //TODO:  TEST 3
  it('should return r=0.9631 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.test3_x, component.test3_y);
      expect(result).toBeCloseTo(0.9631, 4); // Permitiendo pequeñas diferencias de redondeo
    });
  }));

  it('should return rr=0.9276 with the dataset Data_Test3', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.rcuadrada(component.test3_x, component.test3_y);
      expect(result).toBeCloseTo(0.9276, 4); // Permitiendo pequeñas diferencias de redondeo
    });
  }));

  // TODO:  test 4

  it('should return r=0.9480 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.correlationCoefficient(component.test4_x, component.test4_y);
      expect(result).toBeCloseTo(0.9480, 4); // Permitiendo pequeñas diferencias de redondeo
    });
  }));

  it('should return rr=0.8988 with the dataset Data_Test4', waitForAsync(() => {
    fixture.whenStable().then(() => {
      const result = component.rcuadrada(component.test4_x, component.test4_y);
      expect(result).toBeCloseTo(0.8988, 4); // Permitiendo pequeñas diferencias de redondeo
    });
  }));

});
