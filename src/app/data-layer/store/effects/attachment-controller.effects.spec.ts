import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AttachmentControllerEffects } from './attachment-controller.effects';

describe('AttachmentControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: AttachmentControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AttachmentControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AttachmentControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
