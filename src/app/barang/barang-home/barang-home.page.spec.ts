import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarangHomePage } from './barang-home.page';

describe('BarangHomePage', () => {
  let component: BarangHomePage;
  let fixture: ComponentFixture<BarangHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarangHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
