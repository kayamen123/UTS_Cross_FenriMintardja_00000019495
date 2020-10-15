import { Component, OnInit } from '@angular/core';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';

@Component({
  selector: 'app-barang-home',
  templateUrl: './barang-home.page.html',
  styleUrls: ['./barang-home.page.scss'],
})
export class BarangHomePage implements OnInit {

  barangs: Barang[];
  constructor(
    private barangsService: BarangService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.barangs = this.barangsService.getAllBarangs();
 }

}
