import { Component } from '@angular/core';
import { LinearRegressionComponent } from '../linear-regression/linear-regression.component';
import { CorrelationComponent } from '../correlation/correlation.component';
import { desactivarDataUser, formatArryNum } from '../common/funcions';

@Component({
  selector: 'app-ui-a3',
  templateUrl: './ui-a3.component.html',
  styleUrls: ['./ui-a3.component.css']
})
export class UiA3Component {
  arraydataX: number[] = []
  arraydataY: number[] = []
  datausuario = false
  result = "0"
  dataplanX = ""
  dataplanY = ""
  b0 = "0"
  b1 = "0"
  correlacio = "0"
  dataplainNum = 0
  constructor(
    private componentLinear: LinearRegressionComponent,
    private componentCorre: CorrelationComponent
  ) { }
  ngOnInit(): void {
    this.componentLinear.ngOnInit()
    this.componentCorre.ngOnInit()

  }

  linearRegre() {
    let myresult = 0;

    if (!this.datausuario) {
      this.arraydataX = formatArryNum(this.dataplanX);
      this.arraydataY = formatArryNum(this.dataplanY);

      myresult = this.componentLinear.calculoPrediction(this.dataplainNum, this.arraydataX, this.arraydataY);
      this.setLinearValues(this.arraydataX, this.arraydataY);
      this.correlacion(this.arraydataX, this.arraydataY)
    } else {
      myresult = this.componentLinear.calculoPrediction(this.dataplainNum, this.componentLinear.test1_x, this.componentLinear.test1_y);
      this.setLinearValues(this.componentLinear.test1_x, this.componentLinear.test1_y);
      this.correlacion(this.componentLinear.test1_x, this.componentLinear.test1_y)
    }

    this.result = myresult.toFixed(2);
  }

  private correlacion(x: number[], y: number[]) {
    this.correlacio = this.componentCorre.correlationCoefficient(x, y).toFixed(4);
  }

  dataUser() {
    this.datausuario = desactivarDataUser(this.datausuario);
  }

  private setLinearValues(x: number[], y: number[]) {
    this.b0 = this.componentLinear.calcularb0(x, y).toFixed(2);
    this.b1 = this.componentLinear.calcularb1(x, y).toFixed(2);
  }

}
