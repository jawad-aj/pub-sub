import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WebsocketMessagesEffects } from './websocket-messages.effects';

describe('WebsocketMessagesEffects', () => {
  let actions$: Observable<any>;
  let effects: WebsocketMessagesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WebsocketMessagesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WebsocketMessagesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
