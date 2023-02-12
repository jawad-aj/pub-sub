import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClaimControllerEffects } from './claim-controller.effects';

describe('ClaimControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: ClaimControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClaimControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ClaimControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
