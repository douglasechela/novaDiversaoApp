import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TempoDeViolenciaPage } from './tempo-de-violencia.page';

describe('TempoDeViolenciaPage', () => {
  let component: TempoDeViolenciaPage;
  let fixture: ComponentFixture<TempoDeViolenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempoDeViolenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TempoDeViolenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
