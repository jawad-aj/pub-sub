import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HeaderControllerEffects } from './header-controller.effects';

describe('HeaderControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: HeaderControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeaderControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HeaderControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
