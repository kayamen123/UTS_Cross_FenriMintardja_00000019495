import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangGridPage } from './barang-grid.page';

const routes: Routes = [
  {
    path: '',
    component: BarangGridPage
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
