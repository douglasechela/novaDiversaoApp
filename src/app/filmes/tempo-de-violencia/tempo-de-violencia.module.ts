import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempoDeViolenciaPageRoutingModule } from './tempo-de-violencia-routing.module';

import { TempoDeViolenciaPage } from './tempo-de-violencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempoDeViolenciaPageRoutingModule
  ],
  declarations: [TempoDeViolenciaPage]
})
export class TempoDeViolenciaPageModule {}
