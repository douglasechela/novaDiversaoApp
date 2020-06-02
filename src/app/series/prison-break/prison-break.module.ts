import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrisonBreakPageRoutingModule } from './prison-break-routing.module';

import { PrisonBreakPage } from './prison-break.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrisonBreakPageRoutingModule
  ],
  declarations: [PrisonBreakPage]
})
export class PrisonBreakPageModule {}
