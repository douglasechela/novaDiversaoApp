import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThinkLikeADogPageRoutingModule } from './think-like-adog-routing.module';

import { ThinkLikeADogPage } from './think-like-adog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThinkLikeADogPageRoutingModule
  ],
  declarations: [ThinkLikeADogPage]
})
export class ThinkLikeADogPageModule {}
