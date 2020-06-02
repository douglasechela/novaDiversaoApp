import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeControTePage } from './me-contro-te.page';

const routes: Routes = [
  {
    path: '',
    component: MeControTePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeControTePageRoutingModule {}
