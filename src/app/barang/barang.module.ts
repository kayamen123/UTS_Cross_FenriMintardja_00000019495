import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangPageRoutingModule } from './barang-routing.module';

import { BarangPage } from './barang.page';
import { EditBarangComponent } from './components/edit-barang/edit-barang.component';
import { AddBarangComponent } from './components/add-barang/add-barang.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BarangPageRoutingModule,
    
  ],
  declarations: [BarangPage, EditBarangComponent, AddBarangComponent]
})
export class BarangPageModule {}
