import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ParametersEffects } from './parameters.effects';

describe('ParametersEffects', () => {
  let actions$: Observable<any>;
  let effects: ParametersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ParametersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ParametersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
