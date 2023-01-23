import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asincrona19Component } from './asincrona19/asincrona19.component';
import { Asincrona20Component } from './asincrona20/asincrona20.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    Asincrona19Component,
    Asincrona20Component,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    Asincrona19Component,
    Asincrona20Component,
    MenuComponent
  ],
 
})
export class PrincipalModule { }
