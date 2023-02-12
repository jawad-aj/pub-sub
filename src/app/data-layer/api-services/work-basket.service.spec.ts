import { TestBed } from '@angular/core/testing';

import { WorkBasketService } from './work-basket.service';

describe('WorkBasketService', () => {
  let service: WorkBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
