import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AccidentPhaseVehicleSectionEffects } from './accident-phase-vehicle-section.effects';

describe('AccidentPhaseVehicleSectionEffects', () => {
  let actions$: Observable<any>;
  let effects: AccidentPhaseVehicleSectionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccidentPhaseVehicleSectionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AccidentPhaseVehicleSectionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
