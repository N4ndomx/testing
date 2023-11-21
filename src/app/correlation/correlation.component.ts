import { Component, OnInit } from '@angular/core';
import { sumaX, sumaXY, sumSquared } from "../common/funcions";
import { LinearRegressionTest1Service } from '../services/linear-regression-test1.service';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent implements OnInit {
  constructor(
    private serviceTest1: LinearRegressionTest1Service,

  ) { }

  test1_x: number[] = []
  test1_y: number[] = []

  test2_x: number[] = []
  test2_y: number[] = []

  test3_x: number[] = []
  test3_y: number[] = []

  test4_x: number[] = []
  test4_y: number[] = []
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

  correlationCoefficient(x: number[], y: number[]): number {


    const n = x.length;
    const sumXValue = sumaX(x);
    const sumYValue = sumaX(y);
    const sumXYValue = sumaXY(x, y);
    const sumXSquared = sumSquared(x);
    const sumYSquared = sumSquared(y);

    const numerator = n * sumXYValue - sumXValue * sumYValue;
    const denominator = Math.sqrt((n * sumXSquared - sumXValue * sumXValue) * (n * sumYSquared - sumYValue * sumYValue));



    const r = numerator / denominator;
    return r;
  }
  rcuadrada(x: number[], y: number[]): number {

    return this.correlationCoefficient(x, y) ** 2
  }
}
