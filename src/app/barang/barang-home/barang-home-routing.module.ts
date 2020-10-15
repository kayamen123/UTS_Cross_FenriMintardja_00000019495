import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangHomePage } from './barang-home.page';

const routes: Routes = [
  {
    path: '',
    component: BarangHomePage
  },
  {
    path: ':barangId',
    loadChildren: () => import('../barang-detail/barang-detail.module').then( m => m.BarangDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangHomePageRoutingModule {}
