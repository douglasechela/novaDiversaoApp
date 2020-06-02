import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThinkLikeADogPage } from './think-like-adog.page';

const routes: Routes = [
  {
    path: '',
    component: ThinkLikeADogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThinkLikeADogPageRoutingModule {}
