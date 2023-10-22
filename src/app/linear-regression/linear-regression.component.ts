import { Component, OnInit } from '@angular/core';
import { LinearRegressionTest1Service } from '../services/linear-regression-test1.service';
import { MediaComponent } from '../media/media.component';
import { sumaX, sumaXX, sumaXY, sumaY } from "../common/funcions";

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent implements OnInit {

  test1_x: number[] = []
  test1_y: number[] = []

  test2_x: number[] = []
  test2_y: number[] = []

  test3_x: number[] = []
  test3_y: number[] = []

  test4_x: number[] = []
  test4_y: number[] = []

  constructor(
    private serviceTest1: LinearRegressionTest1Service,
    private compoMedia: MediaComponent,

  ) { }
  ngOnInit(): void {
    this.serviceTest1.getData1().subscribe((data: any) => {

      this.test1_x = data.proxy_size;
      this.test1_y = data.actual_added;
    })

    this.serviceTest1.getData2().subscribe((data: any) => {
      this.test2_x = data.proxy_size;
      this.test2_y = data.actual_develop;
    })

    this.serviceTest1.getData3().subscribe((data: any) => {
      this.test3_x = data.plan_added;
      this.test3_y = data.actual_added;
    })

    this.serviceTest1.getData4().subscribe((data: any) => {
      this.test4_x = data.plan_added;
      this.test4_y = data.actual_develop;
    })
  }

  // Función para calcular la pendiente 'b1'
  calcularb1(xValues: number[], yValues: number[]): number {

    const sumXY = sumaXY(xValues, yValues);
    const sumXX = sumaXX(xValues);
    const meanX = this.compoMedia.calcularMedia(xValues);
    const meanY = this.compoMedia.calcularMedia(yValues);

    return (sumXY - xValues.length * meanX * meanY) / (sumXX - xValues.length * meanX * meanX);
  }

  // Función para calcular la ordenada al origen 'b0'
  calcularb0(x: number[], y: number[]): number {
    let xMean = this.compoMedia.calcularMedia(x);
    let yMean = this.compoMedia.calcularMedia(y)
    let b = this.calcularb1(x, y)
    return yMean - b * xMean;
  }

  calculoPrediction(data: number, x: number[], y: number[]): number {
    let b0 = this.calcularb0(x, y);
    let b1 = this.calcularb1(x, y)
    let yk = (b0 + b1 * data)
    return yk
  }
}
