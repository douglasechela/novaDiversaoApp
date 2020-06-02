import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PernalongaPage } from './pernalonga.page';

describe('PernalongaPage', () => {
  let component: PernalongaPage;
  let fixture: ComponentFixture<PernalongaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PernalongaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PernalongaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
