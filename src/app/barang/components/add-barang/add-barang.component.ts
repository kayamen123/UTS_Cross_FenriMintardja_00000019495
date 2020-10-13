import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Barang } from '../../barang.model';
import { BarangService } from '../../barang.service';

@Component({
  selector: 'app-add-barang',
  templateUrl: './add-barang.component.html',
  styleUrls: ['./add-barang.component.scss'],
})
export class AddBarangComponent implements OnInit {

  @Input() pilih_barang: string;
  form: FormGroup;
  id: string;
  

  constructor(
    private modalCtrl: ModalController,
    private barangsService: BarangService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
        this.form = new FormGroup({
        title: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        merek: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        bclock: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        boclock: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        jcore: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        harga: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        ukuran: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        speed: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        stock: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        chipset: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        procesor: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        imageUrl: new FormControl(null, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
  }

  onCancel(){
    this.modalCtrl.dismiss(null,'cancel');
  }

  onCreate(){
    this.presentLoading().then(() => {
      this.presentToast();
      this.modalCtrl.dismiss(1, 'confirm');
    });

  }


  onSubmit(form: FormGroup) {
    this.barangsService.addBarang(form , this.pilih_barang);
  }

  async presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Barang baru ditambahkan',
      color: 'green',
      duration: 3000,
      position: 'bottom',
    });

    (await toast).present();
  }

  
  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Tambah Barang...',
      duration: 5000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}

