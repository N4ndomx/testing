import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiA1Component } from './ui-a1.component';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MediaComponent } from '../media/media.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StddevComponent } from '../stddev/stddev.component';
import { FormsModule } from '@angular/forms';

describe('UiA1Component', () => {
  let component: UiA1Component;
  let fixture: ComponentFixture<UiA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiA1Component],

      imports: [HttpClientTestingModule, FormsModule],
      providers: [MediaComponent, StddevComponent]
    });
    fixture = TestBed.createComponent(UiA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Media
  it('Should call ui-media method', () => {
    // Arrange
    let resultado = 0
    component.dataplan = `
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2`
    // Act
    component.media()
    resultado = +component.result
    // Assert
    expect(resultado).toBe(60.32)
  });

  it('should add operator1 when i click the ui-media button ', () => {
    // Arrange 
    component.dataplan = `
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2`

    let additionButton = fixture.debugElement.query(By.css('.media'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(+component.result).toBe(60.32);

  });

  it('Should render ui-media in result div', () => {
    // Arrange
    component.dataplan = `
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2`

    // Act
    component.media();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('60.32');

  });


  //TODO: stddev
  it('Should call ui-stddev method', () => {
    // Arrange
    let resultado = 0
    component.dataplan = `
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2`
    // Act
    component.desviacion()
    resultado = +component.result
    // Assert
    expect(resultado).toBe(59.06)
  });

  it('should add operator1 when i click the ui-stddev button ', () => {
    // Arrange 
    component.dataplan = `
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2`

    let additionButton = fixture.debugElement.query(By.css('.desviacion'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(+component.result).toBe(59.06);

  });

  it('Should render ui-stddev in result div', () => {
    // Arrange
    component.dataplan = `
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2`

    // Act
    component.desviacion();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('59.06');

  });



});
