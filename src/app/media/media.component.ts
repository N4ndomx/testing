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

  averageDev: number[] = []
  averageProxy: number[] = []

  ngOnInit(): void {
    this.serviceDev.getData().subscribe((data: any) => {
      this.averageDev = data.data;
    })
    this.serviceProxy.getData().subscribe((data: any) => {
      this.averageProxy = data.data;
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



