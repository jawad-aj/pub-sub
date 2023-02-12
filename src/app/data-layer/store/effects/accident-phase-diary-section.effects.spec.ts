import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AccidentPhaseDiarySectionEffects } from './accident-phase-diary-section.effects';

describe('AccidentPhaseDiarySectionEffects', () => {
  let actions$: Observable<any>;
  let effects: AccidentPhaseDiarySectionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccidentPhaseDiarySectionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AccidentPhaseDiarySectionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
