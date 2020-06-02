import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrisonBreakPage } from './prison-break.page';

const routes: Routes = [
  {
    path: '',
    component: PrisonBreakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrisonBreakPageRoutingModule {}
