import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBarangJenisPage } from './add-barang-jenis.page';

describe('AddBarangJenisPage', () => {
  let component: AddBarangJenisPage;
  let fixture: ComponentFixture<AddBarangJenisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarangJenisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBarangJenisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
