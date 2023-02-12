import * as fromWebsocketMessages from './websocket-messages.actions';

describe('loadWebsocketMessagess', () => {
  it('should return an action', () => {
    expect(fromWebsocketMessages.loadWebsocketMessagess().type).toBe('[WebsocketMessages] Load WebsocketMessagess');
  });
});
