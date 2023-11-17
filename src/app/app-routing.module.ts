import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiA1Component } from './ui-a1/ui-a1.component';

const routes: Routes = [
  { path: 'a1', component: UiA1Component },

  // { path: 'componente2', component: Componente2Component },
  // Agrega más rutas según sea necesario
]; @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
