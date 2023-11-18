import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiA1Component } from './ui-a1/ui-a1.component';
import { UiA3Component } from './ui-a3/ui-a3.component';

const routes: Routes = [
  { path: 'a1', component: UiA1Component },
  { path: 'a3', component: UiA3Component },


  // { path: 'componente2', component: Componente2Component },
  // Agrega más rutas según sea necesario
]; @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
