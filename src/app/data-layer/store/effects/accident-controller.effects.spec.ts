import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AccidentControllerEffects } from './accident-controller.effects';

describe('AccidentControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: AccidentControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccidentControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AccidentControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
