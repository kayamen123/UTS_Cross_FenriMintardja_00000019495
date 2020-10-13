import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Barang } from '../../barang.model';
import { BarangService } from '../../barang.service';

@Component({
  selector: 'app-edit-barang',
  templateUrl: './edit-barang.component.html',
  styleUrls: ['./edit-barang.component.scss'],
})
export class EditBarangComponent implements OnInit {

  @Input() barang: Barang;
  form: FormGroup;
  id: string;
  constructor(
    private barangsService: BarangService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.barang.title, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      merek: new FormControl(this.barang.merek, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      bclock: new FormControl(this.barang.base_clock, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      boclock: new FormControl(this.barang.boost_clock, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      jcore: new FormControl(this.barang.jumlah_core, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      harga: new FormControl(this.barang.harga, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      ukuran: new FormControl(this.barang.ukuran, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      speed: new FormControl(this.barang.speed, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      stock: new FormControl(this.barang.stock, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      chipset: new FormControl(this.barang.chipset, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      procesor: new FormControl(this.barang.for_procesor, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      imageUrl: new FormControl(this.barang.imageUrl, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
    });
  }

  onCancel(){
    this.modalCtrl.dismiss(null,'cancel');
  }

  onSubmit(form: FormGroup) {
    this.id = this.barang.id;
    this.barangsService.editBarang(this.form, this.id);
  }

  onSave() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss(
        { message: "Barang telah di edit", id: this.barang.id },
        "confirm"
      );
      this.presentToast();
    });
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Edit Barang...",
      duration: 5000,
    });
    await loading.present();

    await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Barang Telah di edit",
      position: "bottom",
      color: "success",
      duration: 2000,
    });

    toast.present();
  }

}
