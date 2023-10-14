import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StddevComponent } from './stddev.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaComponent } from '../media/media.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      imports: [HttpClientModule],
      providers: [MediaComponent]
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return mean=62.26 with the data: DEV', waitForAsync(() => {

    // Realiza la solicitud HTTP en tu componente.

    component.ngOnInit();
    // Deja que Angular maneje la solicitud HTTP.
    fixture.whenStable().then(() => {

      expect(component.calcularDesviacionEstandar(component.averageDev)).toBeCloseTo(59.06, 2);
    });
  }));

  it('Should return mean=572.03 with the data Proxy', waitForAsync(() => {
    // Realiza la solicitud HTTP en tu componente.

    component.ngOnInit();
    // Deja que Angular maneje la solicitud HTTP.
    fixture.whenStable().then(() => {
      expect(component.calcularDesviacionEstandar(component.averageProxy)).toBeCloseTo(542.67, 2);

    });
  }));

});
