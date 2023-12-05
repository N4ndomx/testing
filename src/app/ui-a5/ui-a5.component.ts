import { Component, } from '@angular/core';
import { SimpsonComponent } from '../simpson/simpson.component';

@Component({
  selector: 'app-ui-a5',
  templateUrl: './ui-a5.component.html',
  styleUrls: ['./ui-a5.component.css']
})
export class UiA5Component {
  x0 = 0
  x1 = 1
  num_seg = 0
  error = 0.0001
  dof = 0
  resul = 0
  funcionPlain = "f(x)="
  datausuario = false


  opciones = [
    { label: 'f(x)=x', value: 'f(x)=x' },
    { label: 'f(x)=x*x', value: 'f(x)=x*x' },
    { label: 'f(x)=1 / x', value: 'f(x)=1 / x' },
    { label: 'f(x)=x*2', value: 'f(x)=x*2' }
  ];

  opcionSeleccionada: string = '';
  constructor(
    private componetSimp: SimpsonComponent
  ) { }

  calcularSimpson() {
    console.log(this.opcionSeleccionada)
    this.resul = this.componetSimp.simpson(this.x0, this.x1, this.num_seg, this.error, this.traducirTextoAFuncion(this.opcionSeleccionada), this.dof)
  }

  traducirTextoAFuncion(texto: string): ((x: number) => number) | any {
    const matches = texto.match(/f\(x\)\s*=\s*([\s\S]+)/);

    if (matches && matches.length === 2) {
      const expresionMatematica = matches[1];

      // Reemplaza "^" con "**" para representar la potenciación en JavaScript
      const expresionMatematicaJS = expresionMatematica.replace(/\^/g, '**');

      // Crea la función en base a la expresión matemática en JavaScript
      const funcion: (x: number) => number = Function('x', `return ${expresionMatematicaJS}`) as any;

      return funcion;
    }

  }




}
