import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FraudCheckControllerEffects } from './fraud-check-controller.effects';

describe('FraudCheckControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: FraudCheckControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FraudCheckControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FraudCheckControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
