import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AccidentPhaseAttachmentSectionEffects } from './accident-phase-attachment-section.effects';

describe('AccidentPhaseAttachmentSectionEffects', () => {
  let actions$: Observable<any>;
  let effects: AccidentPhaseAttachmentSectionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccidentPhaseAttachmentSectionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AccidentPhaseAttachmentSectionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
