import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaddysGirlPageRoutingModule } from './daddys-girl-routing.module';

import { DaddysGirlPage } from './daddys-girl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaddysGirlPageRoutingModule
  ],
  declarations: [DaddysGirlPage]
})
export class DaddysGirlPageModule {}
