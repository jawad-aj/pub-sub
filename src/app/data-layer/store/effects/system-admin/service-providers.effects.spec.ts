import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ServiceProvidersEffects } from './service-providers.effects';

describe('ServiceProvidersEffects', () => {
  let actions$: Observable<any>;
  let effects: ServiceProvidersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiceProvidersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ServiceProvidersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
