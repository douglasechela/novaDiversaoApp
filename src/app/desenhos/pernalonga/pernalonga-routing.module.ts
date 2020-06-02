import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PernalongaPage } from './pernalonga.page';

const routes: Routes = [
  {
    path: '',
    component: PernalongaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PernalongaPageRoutingModule {}
