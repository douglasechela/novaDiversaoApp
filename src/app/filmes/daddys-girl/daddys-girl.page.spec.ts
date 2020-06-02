import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaddysGirlPage } from './daddys-girl.page';

describe('DaddysGirlPage', () => {
  let component: DaddysGirlPage;
  let fixture: ComponentFixture<DaddysGirlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaddysGirlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaddysGirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
