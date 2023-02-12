import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SystemUserEffects } from './system-user.effects';

describe('SystemUserEffects', () => {
  let actions$: Observable<any>;
  let effects: SystemUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SystemUserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SystemUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
