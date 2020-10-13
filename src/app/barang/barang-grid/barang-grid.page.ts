import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';

@Component({
  selector: 'app-barang-grid',
  templateUrl: './barang-grid.page.html',
  styleUrls: ['./barang-grid.page.scss'],
})
export class BarangGridPage implements OnInit {

  barangs: Barang[];
  constructor(
    private barangsService: BarangService,
    private router: Router
     ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
      this.barangs = this.barangsService.getAllBarangs();
  }
  back(){
    this.router.navigate(['/barang']);
  }
}
