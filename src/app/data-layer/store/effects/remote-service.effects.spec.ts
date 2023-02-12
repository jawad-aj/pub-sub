import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RemoteServiceEffects } from './remote-service.effects';

describe('RemoteServiceEffects', () => {
  let actions$: Observable<any>;
  let effects: RemoteServiceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RemoteServiceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RemoteServiceEffects>(RemoteServiceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
