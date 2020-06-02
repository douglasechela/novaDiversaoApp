import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeControTePage } from './me-contro-te.page';

describe('MeControTePage', () => {
  let component: MeControTePage;
  let fixture: ComponentFixture<MeControTePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeControTePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeControTePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
