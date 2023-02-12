import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EventsMappingEffects } from './events-mapping.effects';

describe('EventsMappingEffects', () => {
  let actions$: Observable<any>;
  let effects: EventsMappingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsMappingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EventsMappingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
