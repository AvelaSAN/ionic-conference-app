import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoListPage } from './producto-list.page';

describe('ProductoListPage', () => {
  let component: ProductoListPage;
  let fixture: ComponentFixture<ProductoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
