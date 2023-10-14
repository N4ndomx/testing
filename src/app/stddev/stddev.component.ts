import { Component } from '@angular/core';
import { MediaComponent } from "../media/media.component";
import { MediaDevService } from '../services/media-dev.service';
import { MediaProxyService } from '../services/media-proxy.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {

  constructor(
    private compMedia: MediaComponent,
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
  calcularDesviacionEstandar(data: number[]): number {
    if (!data || data.length === 0) return 0;

    const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
    const squaredDifferences = data.map((val) => Math.pow(val - mean, 2));
    const variance =
      squaredDifferences.reduce((acc, val) => acc + val, 0) / data.length;
    return Math.sqrt(variance);
  }

}
