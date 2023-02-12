import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BulkAssignmentEffects } from './bulk-assignment.effects';

describe('BulkAssignmentEffects', () => {
  let actions$: Observable<any>;
  let effects: BulkAssignmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BulkAssignmentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BulkAssignmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
