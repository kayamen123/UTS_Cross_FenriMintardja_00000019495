import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarangGridPage } from './barang-grid.page';

describe('BarangGridPage', () => {
  let component: BarangGridPage;
  let fixture: ComponentFixture<BarangGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangGridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarangGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
