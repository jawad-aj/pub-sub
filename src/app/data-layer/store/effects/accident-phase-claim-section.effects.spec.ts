import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AccidentPhaseClaimSectionEffects } from './accident-phase-claim-section.effects';

describe('AccidentPhaseClaimSectionEffects', () => {
  let actions$: Observable<any>;
  let effects: AccidentPhaseClaimSectionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccidentPhaseClaimSectionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AccidentPhaseClaimSectionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
