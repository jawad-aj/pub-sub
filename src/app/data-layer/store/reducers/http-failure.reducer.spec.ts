import { httpFailureStateReducer, httpFailureInitialState } from './http-failure.reducer';

describe('HttpFailure Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = httpFailureStateReducer(httpFailureInitialState, action);

      expect(result).toBe(httpFailureInitialState);
    });
  });
});
