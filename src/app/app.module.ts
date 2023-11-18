import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { UiA1Component } from './ui-a1/ui-a1.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FormsModule } from '@angular/forms';
import { MediaComponent } from './media/media.component';
import { UiA3Component } from './ui-a3/ui-a3.component';

@NgModule({
  declarations: [
    AppComponent,
    LinearRegressionComponent,
    CorrelationComponent,
    SimpsonComponent,
    UiA1Component,
    MainMenuComponent,
    UiA3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [MediaComponent,
    StddevComponent,
    LinearRegressionComponent,
    CorrelationComponent,
    SimpsonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
