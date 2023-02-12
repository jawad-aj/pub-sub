import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InitialAssessmentControllerEffects } from './initial-assessment-controller.effects';

describe('InitialAssessmentControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: InitialAssessmentControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InitialAssessmentControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InitialAssessmentControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
