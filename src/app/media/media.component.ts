import { Component, OnInit } from '@angular/core';
import { MediaDevService } from '../services/media-dev.service';
import { MediaProxyService } from '../services/media-proxy.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(
    private serviceDev: MediaDevService,
    private serviceProxy: MediaProxyService
  ) { }

  averageDev = 0
  averageProxy = 0

  ngOnInit(): void {
    this.serviceDev.getData().subscribe((data: any) => {
      this.averageDev = this.calcularMedia(data.data);
    })
    this.serviceProxy.getData().subscribe((data: any) => {
      this.averageProxy = this.calcularMedia(data.data);
    })

  }

  calcularMedia(datos: number[]) {
    console.log(datos)
    if (datos.length === 0) {
      throw new Error("El array de datos no puede estar vacío");
    }

    const suma = datos.reduce((total, valor) => total + valor, 0);
    const media = suma / datos.length;

    return Number(media.toFixed(2));
  }

}

export function Media(datos: number[]) {

  if (datos.length === 0) {
    throw new Error("El array de datos no puede estar vacío");
  }

  const suma = datos.reduce((total, valor) => total + valor, 0);
  const media = suma / datos.length;

  return Number(media.toFixed(2));
}
