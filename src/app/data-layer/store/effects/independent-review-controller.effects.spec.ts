import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IndependentReviewControllerEffects } from './independent-review-controller.effects';

describe('IndependentReviewControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: IndependentReviewControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IndependentReviewControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(IndependentReviewControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
