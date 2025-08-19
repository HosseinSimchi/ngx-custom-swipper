import { TestBed } from '@angular/core/testing';

import { NgxCustomSwiperService } from './ngx-custom-swiper.service';

describe('NgxCustomSwiperService', () => {
  let service: NgxCustomSwiperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCustomSwiperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
