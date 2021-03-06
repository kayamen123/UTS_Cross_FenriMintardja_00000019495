import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangGridPage } from './barang-grid.page';

const routes: Routes = [
  {
    path: '',
    component: BarangGridPage
  },  
  {
    path: 'add-barang-jenis',
    loadChildren: () => import('../add-barang-jenis/add-barang-jenis.module').then( m => m.AddBarangJenisPageModule)
  }, 
  {
    path: ':barangId',
    loadChildren: () => import('../barang-detail/barang-detail.module').then( m => m.BarangDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangGridPageRoutingModule {}
