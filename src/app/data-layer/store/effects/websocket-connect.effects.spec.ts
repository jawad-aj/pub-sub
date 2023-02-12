import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WebsocketConnectEffects } from './websocket-connect.effects';

describe('WebsocketConnectEffects', () => {
  let actions$: Observable<any>;
  let effects: WebsocketConnectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WebsocketConnectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WebsocketConnectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
