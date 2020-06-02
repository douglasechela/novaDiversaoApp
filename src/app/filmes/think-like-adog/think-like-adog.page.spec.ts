import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThinkLikeADogPage } from './think-like-adog.page';

describe('ThinkLikeADogPage', () => {
  let component: ThinkLikeADogPage;
  let fixture: ComponentFixture<ThinkLikeADogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkLikeADogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThinkLikeADogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
