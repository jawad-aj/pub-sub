import * as fromWebsocketConnect from './websocket-connect.actions';

describe('loadWebsocketConnect', () => {
  it('should return an action', () => {
    expect(fromWebsocketConnect.loadWebsocketConnect.type).toBe('[WebsocketConnect] Load WebsocketConnect');
  });
});
