import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SelectedRowEffects } from './selected-row.effects';

describe('SelectedRowEffects', () => {
  let actions$: Observable<any>;
  let effects: SelectedRowEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SelectedRowEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SelectedRowEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
