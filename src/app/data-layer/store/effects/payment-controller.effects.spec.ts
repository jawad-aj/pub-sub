import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PaymentControllerEffects } from './payment-controller.effects';

describe('PaymentControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: PaymentControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaymentControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PaymentControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
