import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';
import { AddBarangComponent } from '../components/add-barang/add-barang.component';

@Component({
  selector: 'app-add-barang-jenis',
  templateUrl: './add-barang-jenis.page.html',
  styleUrls: ['./add-barang-jenis.page.scss'],
})
export class AddBarangJenisPage implements OnInit {

  pilih_barang: string;
  barangs: Barang[];
  constructor(
    private modalCtrl: ModalController,
    private barangService: BarangService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  checkBarang($event){
    this.pilih_barang = $event.target.value;
    console.log(this.pilih_barang);
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: AddBarangComponent,
      componentProps: { pilih_barang: this.pilih_barang}
    });

    modal.onDidDismiss().then(resultData => {
      if(resultData.data == null){
        console.log("Cancel");
      }else if(resultData.data == 1){
        console.log(resultData.data);
        this.barangs = this.barangService.getAllBarangs();
        this.router.navigate(['/barang']);
      }
    });

    return await modal.present();
  }


}
