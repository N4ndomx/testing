import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  componenteVisible: string = ''; // Variable que indica qué componente mostrar

  mostrarComponente(componente: string) {
    console.log(componente)
    this.componenteVisible = componente;
  }
}
