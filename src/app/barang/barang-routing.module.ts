import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangPage } from './barang.page';

const routes: Routes = [
  {
    path: '',
    component: BarangPage
  },
  {
    path: 'barang-grid',
    loadChildren: () => import('./barang-grid/barang-grid.module').then( m => m.BarangGridPageModule)
  }, 
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },  
  {
    path: 'add-barang-jenis',
    loadChildren: () => import('./add-barang-jenis/add-barang-jenis.module').then( m => m.AddBarangJenisPageModule)
  },  
  {
    path: 'barang-home',
    loadChildren: () => import('./barang-home/barang-home.module').then( m => m.BarangHomePageModule)
  },
  {
    path: ':barangId',
    loadChildren: () => import('./barang-detail/barang-detail.module').then( m => m.BarangDetailPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangPageRoutingModule {}
