import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangHomePageRoutingModule } from './barang-home-routing.module';

import { BarangHomePage } from './barang-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarangHomePageRoutingModule
  ],
  declarations: [BarangHomePage]
})
export class BarangHomePageModule {}
