import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DiaryControllerEffects } from './diary-controller.effects';

describe('DiaryControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: DiaryControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DiaryControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DiaryControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
