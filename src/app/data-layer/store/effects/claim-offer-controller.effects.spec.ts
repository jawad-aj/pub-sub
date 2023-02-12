import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClaimOfferControllerEffects } from './claim-offer-controller.effects';

describe('ClaimOfferControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: ClaimOfferControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClaimOfferControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ClaimOfferControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
