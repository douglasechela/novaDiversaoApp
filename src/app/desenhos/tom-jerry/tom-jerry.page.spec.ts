import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomJerryPage } from './tom-jerry.page';

describe('TomJerryPage', () => {
  let component: TomJerryPage;
  let fixture: ComponentFixture<TomJerryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomJerryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomJerryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
