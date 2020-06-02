import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempoDeViolenciaPage } from './tempo-de-violencia.page';

const routes: Routes = [
  {
    path: '',
    component: TempoDeViolenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempoDeViolenciaPageRoutingModule {}
