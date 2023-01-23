import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona19Component } from './principal/asincrona19/asincrona19.component';
import { Asincrona20Component } from './principal/asincrona20/asincrona20.component';


const routes: Routes = [
  {path:"asin19",component:Asincrona19Component},
  {path:"asin20",component:Asincrona20Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
