import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrisonBreakPage } from './prison-break.page';

describe('PrisonBreakPage', () => {
  let component: PrisonBreakPage;
  let fixture: ComponentFixture<PrisonBreakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonBreakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrisonBreakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
