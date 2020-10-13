import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBarangComponent } from './add-barang.component';

describe('AddBarangComponent', () => {
  let component: AddBarangComponent;
  let fixture: ComponentFixture<AddBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarangComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
