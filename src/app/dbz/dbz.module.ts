import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule//is necesary to use the ngs, etc
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
