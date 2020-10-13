import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBarangJenisPageRoutingModule } from './add-barang-jenis-routing.module';

import { AddBarangJenisPage } from './add-barang-jenis.page';
import { AddBarangComponent } from '../components/add-barang/add-barang.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddBarangJenisPageRoutingModule,
  ],
  declarations: [AddBarangJenisPage, AddBarangComponent]
})
export class AddBarangJenisPageModule {}
