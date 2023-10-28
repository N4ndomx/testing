import { Component } from '@angular/core';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  simpson(x0: number, x1: number, num_seg: number, ERROR: number, f: (x: number) => number): number {
    const h = (x1 - x0) / num_seg;
    let sum1 = 0;
    let sum2 = 0;
    let integral = 0;
    let previousIntegral = 0;

    do {
      previousIntegral = integral;
      sum1 = 0;
      sum2 = 0;

      for (let i = 1; i < num_seg; i += 2) {
        sum1 += f(x0 + i * h);
      }
      for (let i = 2; i < num_seg - 1; i += 2) {
        sum2 += f(x0 + i * h);
      }

      integral = (h / 3) * (f(x0) + 4 * sum1 + 2 * sum2 + f(x1));
      num_seg *= 2; // Double the number of segments for the next iteration
    } while (Math.abs(integral - previousIntegral) > ERROR);

    console.log('print' + integral)
    return integral;
  }

}




