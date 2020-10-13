import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangDetailPageRoutingModule } from './barang-detail-routing.module';

import { BarangDetailPage } from './barang-detail.page';
import { EditBarangComponent } from '../components/edit-barang/edit-barang.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    BarangDetailPageRoutingModule,
  ],
  declarations: [BarangDetailPage,EditBarangComponent]
}) 
export class BarangDetailPageModule {}
