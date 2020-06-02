import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaddysGirlPage } from './daddys-girl.page';

const routes: Routes = [
  {
    path: '',
    component: DaddysGirlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaddysGirlPageRoutingModule {}
