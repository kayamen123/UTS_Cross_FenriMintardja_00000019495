import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';
import { AddBarangComponent } from '../components/add-barang/add-barang.component';
import { EditBarangComponent } from '../components/edit-barang/edit-barang.component';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.page.html',
  styleUrls: ['./barang-detail.page.scss'],
})
export class BarangDetailPage implements OnInit {

  loadedBarang: Barang;
  constructor(
    private activatedRoute: ActivatedRoute,
    private barangService: BarangService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('barangId')) { return; }
      const barangId = paramMap.get('barangId');
      this.loadedBarang = this.barangService.getBarang(barangId);
    });
  }


  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: EditBarangComponent,
      componentProps: { barang: this.loadedBarang}
    });

    modal.onDidDismiss().then(resultData => {
      if (resultData.data.id)
      this.loadedBarang = this.barangService.getBarang(
        resultData.data.id
      );
    });
    return await modal.present();
  }
  

  deleteBarang(){
    this.presentLoading().then(() => {
      this.barangService.deleteBarang(this.loadedBarang.id);
      this.presentToast();
      this.router.navigate(['/barang']);
    });

  }

  async presentAlert(){
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
          handler: () => this.deleteBarang()
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


}
