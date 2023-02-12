import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SearchAccidentControllerEffects } from './search-accident-controller.effects';

describe('SearchAccidentControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchAccidentControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchAccidentControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SearchAccidentControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
