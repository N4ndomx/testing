import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiA5Component } from './ui-a5.component';
import { By } from '@angular/platform-browser';
import { SimpsonComponent } from '../simpson/simpson.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('UiA5Component', () => {
  let component: UiA5Component;
  let fixture: ComponentFixture<UiA5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiA5Component],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(UiA5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Media
  it('Should call ui-sip method', () => {
    // Arrange
    let resultado = 0
    component.x0 = 0
    component.x1 = 4
    component.num_seg = 4
    component.error = 0.0001
    component.dof = 0
    component.funcionPlain = "f(x)=2*x"

    // Act
    component.calcularSimpson()
    resultado = component.resul
    // Assert
    expect(resultado).toBeCloseTo(16.0, 4);
  });

  it('should add operator1 when i click the ui-simp button ', () => {
    // Arrange 
    component.x0 = 0
    component.x1 = 4
    component.num_seg = 4
    component.error = 0.0001
    component.dof = 0
    component.funcionPlain = "f(x)=2*x"

    let additionButton = fixture.debugElement.query(By.css('.sip'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.resul).toBe(16);

  });

  it('Should render ui-simp in result div', () => {
    // Arrange
    component.x0 = 0
    component.x1 = 4
    component.num_seg = 4
    component.error = 0.0001
    component.dof = 0
    component.funcionPlain = "f(x)=2*x"
    // Act
    component.calcularSimpson();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('16');

  });
});
