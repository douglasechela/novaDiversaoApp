import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PernalongaPageRoutingModule } from './pernalonga-routing.module';

import { PernalongaPage } from './pernalonga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PernalongaPageRoutingModule
  ],
  declarations: [PernalongaPage]
})
export class PernalongaPageModule {}
