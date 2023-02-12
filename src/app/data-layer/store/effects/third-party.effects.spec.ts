import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ThirdPartyEffects } from './third-party.effects';

describe('ThirdPartyEffects', () => {
  let actions$: Observable<any>;
  let effects: ThirdPartyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThirdPartyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ThirdPartyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
