import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiA3Component } from './ui-a3.component';
import { By } from '@angular/platform-browser';
import { LinearRegressionComponent } from '../linear-regression/linear-regression.component';
import { CorrelationComponent } from '../correlation/correlation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MediaComponent } from '../media/media.component';

describe('UiA3Component', () => {
  let component: UiA3Component;
  let fixture: ComponentFixture<UiA3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiA3Component],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [LinearRegressionComponent, MediaComponent, CorrelationComponent]
    });
    fixture = TestBed.createComponent(UiA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: regresion Lineal
  it('Should call ui-linearReg method', () => {
    // Arrange
    let resultado = 0
    component.dataplainNum = 386
    component.dataplanX = `130,
        650,
        99,
        150,
        128,
        302,
        95,
        945,
        368,
        961`
    component.dataplanY = ` 186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601`
    // Act
    component.linearRegre()
    resultado = +component.result
    // Assert
    expect(resultado).toBe(644.43)
  });

  it('should add operator1 when i click the ui-media button ', () => {
    // Arrange 
    component.dataplainNum = 386
    component.dataplanX = `130,
        650,
        99,
        150,
        128,
        302,
        95,
        945,
        368,
        961`
    component.dataplanY = ` 186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601`

    let additionButton = fixture.debugElement.query(By.css('.regresion'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(+component.result).toBe(644.43);
    expect(+component.b0).toBe(-22.55)
    expect(+component.b1).toBe(1.73)
    expect(+component.correlacio).toBe(0.9545)



  });
  it('Should render ui-media in result div', () => {
    // Arrange
    component.dataplainNum = 386
    component.dataplanX = `130,
        650,
        99,
        150,
        128,
        302,
        95,
        945,
        368,
        961`
    component.dataplanY = ` 186,
        699,
        132,
        272,
        291,
        331,
        199,
        1890,
        788,
        1601`
    // Act
    component.linearRegre();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;
    let de2 = fixture.debugElement.query(By.css('.b0'));
    let el2: HTMLElement = de2.nativeElement;
    let de3 = fixture.debugElement.query(By.css('.b1'));
    let el3: HTMLElement = de3.nativeElement;
    let de4 = fixture.debugElement.query(By.css('.correlacion'));
    let el4: HTMLElement = de4.nativeElement;

    // Assert
    expect(el.innerText).toContain('644.43');
    expect(el2.innerText).toBe('-22.55')
    expect(el3.innerText).toBe('1.73')
    expect(el4.innerText).toBe('0.9545')

  });

});
