import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FooterEffects } from './footer.effects';

describe('FooterEffects', () => {
  let actions$: Observable<any>;
  let effects: FooterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FooterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FooterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
