import { Component } from '@angular/core';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {

  simpson(x0: number, x1: number, num_seg: number, ERROR: number, f: (x: number) => number): number {
    let integral = 0;
    let prevIntegral = Number.POSITIVE_INFINITY;
    let iteration = 0;

    while (Math.abs(integral - prevIntegral) > ERROR) {
      prevIntegral = integral;

      const w = (x1 - x0) / num_seg;
      let sum1 = 0;
      let sum2 = 0;

      for (let i = 1; i < num_seg; i += 2) {
        sum1 += f(x0 + i * w);
      }

      for (let i = 2; i < num_seg - 1; i += 2) {
        sum2 += f(x0 + i * w);
      }

      integral = (w / 3) * (f(x0) + 4 * sum1 + 2 * sum2 + f(x1));
      num_seg *= 2;
      iteration++;
    }

    return integral;
  }


}




