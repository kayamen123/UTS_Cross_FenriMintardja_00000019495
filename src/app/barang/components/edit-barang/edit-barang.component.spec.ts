import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditBarangComponent } from './edit-barang.component';

describe('EditBarangComponent', () => {
  let component: EditBarangComponent;
  let fixture: ComponentFixture<EditBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBarangComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
