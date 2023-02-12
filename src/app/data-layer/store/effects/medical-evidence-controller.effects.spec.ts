import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MedicalEvidenceControllerEffects } from './medical-evidence-controller.effects';

describe('MedicalEvidenceControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: MedicalEvidenceControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MedicalEvidenceControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MedicalEvidenceControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
