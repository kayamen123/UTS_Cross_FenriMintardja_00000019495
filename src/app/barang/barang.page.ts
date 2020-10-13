import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Barang } from './barang.model';
import { BarangService } from './barang.service';
import { EditBarangComponent } from './components/edit-barang/edit-barang.component';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.page.html',
  styleUrls: ['./barang.page.scss'],
})
export class BarangPage implements OnInit {

  barangs: Barang[];
  loadedBarang: Barang;
  constructor(
    private barangsService: BarangService,
    private activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController 
    ) { }

  ngOnInit() {
    
  }
  
  ionViewWillEnter(){
    this.barangs = this.barangsService.getAllBarangs();
 }
 
 deleteBarang(id: string){
  this.presentLoading().then(() => {
    this.barangsService.deleteBarang(id);
    this.presentToast();
    this.barangs = this.barangsService.getAllBarangs();
  });

}

async presentAlert(id: string){
  const alert = await this.alertCtrl.create({
    header: 'Apakah kamu yakin?',
    message: 'Barang yang dihapus tidak dapat dikembalikan kembali',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => this.deleteBarang(id)
      }
    ]
  });
  await alert.present();
}
async presentToast(){
  let toast = this.toastCtrl.create({
    message: 'Barang Dihapus',
    color: 'primary',
    duration: 3000,
    position: 'bottom',
  });

  (await toast).present();
}

async presentLoading() {
  const loading = await this.loadingCtrl.create({
    message: "Hapus Barang....",
    duration: 5000,
  });
  await loading.present();

  await loading.onDidDismiss();
}



 async presentModal(id: string){

  this.loadedBarang = this.barangsService.getBarang(id);
  const modal = await this.modalCtrl.create({
    component: EditBarangComponent,
    componentProps: { barang: this.loadedBarang}
  });

  modal.onDidDismiss().then(resultData => {
    if (resultData.data.id)
    this.loadedBarang = this.barangsService.getBarang(resultData.data.id);
    this.barangs = this.barangsService.getAllBarangs();
  });
  return await modal.present();
}

}
