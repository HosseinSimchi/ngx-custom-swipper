import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCustomSwiperComponent } from './ngx-custom-swiper.component';

describe('NgxCustomSwiperComponent', () => {
  let component: NgxCustomSwiperComponent;
  let fixture: ComponentFixture<NgxCustomSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCustomSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCustomSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
