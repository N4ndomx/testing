import { Component, OnInit } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { StddevComponent } from '../stddev/stddev.component';
import { desactivarDataUser, formatArryNum } from '../common/funcions';

@Component({
  selector: 'app-ui-a1',
  templateUrl: './ui-a1.component.html',
  styleUrls: ['./ui-a1.component.css']
})

export class UiA1Component implements OnInit {
  arraydata: number[] = []
  datausuario = false
  result = "0"
  dataplan = ""

  constructor(
    private componentMedia: MediaComponent,
    private componentSttde: StddevComponent
  ) { }
  ngOnInit(): void {
    this.componentMedia.ngOnInit()
    this.componentSttde.ngOnInit()

  }

  media() {
    let myresult = 0;
    if (!this.datausuario) {

      this.arraydata = formatArryNum(this.dataplan)
      myresult = this.componentMedia.calcularMedia(this.arraydata)
    } else {
      myresult = this.componentMedia.calcularMedia(this.componentMedia.averageDev)
    }
    this.result = myresult.toFixed(2)
  }
  desviacion() {
    let myresult: number = 0;
    if (!this.datausuario) {
      this.arraydata = formatArryNum(this.dataplan)
      myresult = this.componentSttde.calcularDesviacionEstandar(this.arraydata)

    } else {
      myresult = this.componentSttde.calcularDesviacionEstandar(this.componentSttde.averageDev)
    }
    this.result = myresult.toFixed(2)
  }
  dataUser() {
    this.datausuario = desactivarDataUser(this.datausuario)

  }


}
