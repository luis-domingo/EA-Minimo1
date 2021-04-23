import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacunadosRoutingModule } from './vacunados-routing.module';
import { VacunadosComponent } from './vacunados.component';


@NgModule({
  declarations: [
    VacunadosComponent
  ],
  imports: [
    CommonModule,
    VacunadosRoutingModule
  ]
})
export class VacunadosModule { }
