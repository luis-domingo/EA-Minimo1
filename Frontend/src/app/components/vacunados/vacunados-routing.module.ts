import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacunadosComponent } from './vacunados.component';

const routes: Routes = [{ path: '', component: VacunadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacunadosRoutingModule { }
