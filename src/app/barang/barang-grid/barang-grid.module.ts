import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangGridPageRoutingModule } from './barang-grid-routing.module';

import { BarangGridPage } from './barang-grid.page';
import { EditBarangComponent } from '../components/edit-barang/edit-barang.component';
import { AddBarangComponent } from '../components/add-barang/add-barang.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BarangGridPageRoutingModule,
    
  ],
  declarations: [BarangGridPage,  EditBarangComponent , AddBarangComponent]
})
export class BarangGridPageModule {}
