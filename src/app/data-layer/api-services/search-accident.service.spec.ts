import { TestBed } from '@angular/core/testing';

import { SearchAccidentService } from './search-accident.service';

describe('SearchAccidentService', () => {
  let service: SearchAccidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAccidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
