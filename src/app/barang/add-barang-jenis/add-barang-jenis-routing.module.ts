import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBarangJenisPage } from './add-barang-jenis.page';

const routes: Routes = [
  {
    path: '',
    component: AddBarangJenisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBarangJenisPageRoutingModule {}
