import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MediaComponent } from './media.component';
import { MediaDevService } from '../services/media-dev.service';
import { of } from 'rxjs';
import { MediaProxyService } from '../services/media-proxy.service';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaDevService

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule], // Añade HttpClientTestingModule aquí
      providers: [MediaDevService],
    }).compileComponents();
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Should return mean=60.32 with the data:', fakeAsync(() => {
    const testData = [
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2
    ];

    const mediaService = TestBed.inject(MediaDevService); // Obtiene la instancia del servicio
    spyOn(mediaService, 'getData').and.returnValue(of({ data: testData }));
    // Espera a que se complete la llamada asincrónica
    component.ngOnInit()
    tick();

    expect(component.averageDev).toBe(60.32);
  }));


  it('Should return mean=550.6 with the data ', fakeAsync(() => {
    const testData = [
      160,
      591,
      114,
      229,
      230,
      270,
      128,
      1657,
      624,
      1503
    ];

    const mediaService = TestBed.inject(MediaProxyService); // Obtiene la instancia del servicio
    spyOn(mediaService, 'getData').and.returnValue(of({ data: testData }));
    // Espera a que se complete la llamada asincrónica
    component.ngOnInit()
    tick();

    expect(component.averageProxy).toBe(550.6);
  }));

  // Prueba real Revisar 
  xit('Should return mean=550.6 with the data 2', waitForAsync(() => {
    // Realiza la solicitud HTTP en tu componente.

    component.ngOnInit();
    // Deja que Angular maneje la solicitud HTTP.
    fixture.whenStable().then(() => {
      expect(component.averageDev).toBe(550.6);
    });
  }));

});
