import { eventHandlerReducer, eventHandlerInitialState } from './event-handler.reducer';

describe('LoadApplication Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = eventHandlerReducer(eventHandlerInitialState, action);

      expect(result).toBe(eventHandlerInitialState);
    });
  });
});
