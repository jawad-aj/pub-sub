import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DynamicFormEffects } from './dynamic-form.effects';

describe('DynamicFormEffects', () => {
  let actions$: Observable<any>;
  let effects: DynamicFormEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DynamicFormEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DynamicFormEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
