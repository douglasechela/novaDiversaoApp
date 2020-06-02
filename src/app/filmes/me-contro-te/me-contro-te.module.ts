import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeControTePageRoutingModule } from './me-contro-te-routing.module';

import { MeControTePage } from './me-contro-te.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeControTePageRoutingModule
  ],
  declarations: [MeControTePage]
})
export class MeControTePageModule {}
