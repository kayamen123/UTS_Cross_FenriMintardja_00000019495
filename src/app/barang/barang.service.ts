import { Injectable } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';
import { Barang } from './barang.model';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  private barangs: Barang[] = [
    {
      id: 'b1',
      title: 'AMD',
      jenis_barang: 'RAM',
      imageUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
      merek : 'test1',
      harga: 50000,
      stock: 20,
      base_clock: '',
      boost_clock: '',
      jumlah_core: 0,
      speed: '3600MHz',
      ukuran: 32,
      chipset: '',
      for_procesor: ''
    },
    {
      id: 'b2',
      jenis_barang: 'CPU',
      title: 'Intel',
      imageUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
      merek: 'test2',
      harga: 45000,
      stock: 15,
      base_clock: '3.8GHz',
      boost_clock: 'Up to 4.6GHz',
      jumlah_core: 12,
      speed: '',
      ukuran: 0,
      chipset: '',
      for_procesor: ''
    },
    {
      id: 'b3',
      jenis_barang: 'GPU',
      title: 'Nvidia',
      imageUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
      merek: 'test3',
      harga: 3000,
      stock: 25,
      base_clock: '',
      boost_clock: '',
      jumlah_core: 0,
      speed: '',
      ukuran: 0,
      chipset: '',
      for_procesor: ''
    }
  ];

  constructor() { }

  getAllBarangs() { 
    return [...this.barangs];
  }

  getBarang(barangId: string) {
    return{...this.barangs.find( barang => {
      return barang.id === barangId;
    })};
  }

  deleteBarang(barangId: string){
    this.barangs = this.barangs.filter(barang => {
      return barang.id !== barangId;
    });
  }

  addBarang(form: FormGroup, j_barang: string) {
    if(j_barang === 'CPU'){
        this.barangs.push({
        id: "b"+this.barangs.length + 1 + "",
        jenis_barang: j_barang,
        title: form.value.title,
        imageUrl: form.value.imageUrl,
        merek: form.value.merek,
        harga: form.value.harga,
        stock: form.value.stock,
        base_clock: form.value.bclock,
        boost_clock: form.value.boclock,
        jumlah_core: form.value.jcore,
        speed: '',
        ukuran: 0,
        chipset: '',
        for_procesor: ''
      });
    }else if(j_barang === 'RAM'){
      this.barangs.push({
        id: "b"+this.barangs.length + 1 + "",
        jenis_barang: j_barang,
        title: form.value.title,
        imageUrl: form.value.imageUrl,
        merek: form.value.merek,
        harga: form.value.harga,
        stock: form.value.stock,
        base_clock: '',
        boost_clock: '',
        jumlah_core: 0,
        speed: form.value.speed,
        ukuran: form.value.ukuran,
        chipset: '',
        for_procesor: ''
      });
    }else if (j_barang === 'Motherboard'){
      this.barangs.push({
        id: "b"+this.barangs.length + 1 + "",
        jenis_barang: j_barang,
        title: form.value.title,
        imageUrl: form.value.imageUrl,
        merek: form.value.merek,
        harga: form.value.harga,
        stock: form.value.stock,
        base_clock: '',
        boost_clock: '',
        jumlah_core: 0,
        speed: '',
        ukuran: 0,
        chipset: form.value.chipset,
        for_procesor: form.value.procesor
      });
    }else if (j_barang === 'GPU'){
      this.barangs.push({
        id: "b"+this.barangs.length + 1 + "",
        jenis_barang: j_barang,
        title: form.value.title,
        imageUrl: form.value.imageUrl,
        merek: form.value.merek,
        harga: form.value.harga,
        stock: form.value.stock,
        base_clock: '',
        boost_clock: '',
        jumlah_core: 0,
        speed: '',
        ukuran: 0,
        chipset: '',
        for_procesor: ''
      });
    }

  }

  editBarang(form: FormGroup, id: string) {
    let tempArr = this.barangs.map((barang) => {
      if (barang.id === id) {
        return {
          id: id,
          jenis_barang: barang.jenis_barang,
          title: form.value.title,
          imageUrl: form.value.imageUrl,
          merek: form.value.merek,
          harga: form.value.harga,
          stock: form.value.stock,
          base_clock: form.value.bclock,
          boost_clock: form.value.boclock,
          jumlah_core: form.value.jcore,
          speed: form.value.speed,
          ukuran: form.value.ukuran,
          chipset: form.value.chipset,
          for_procesor: form.value.procesor
        };
      }
      return barang;
    });
    this.barangs = [...tempArr];
  }

}
