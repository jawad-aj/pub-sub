import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VehicleControllerEffects } from './vehicle-controller.effects';

describe('VehicleControllerEffects', () => {
  let actions$: Observable<any>;
  let effects: VehicleControllerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehicleControllerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VehicleControllerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
