import { fileURLReducer, initialState } from './file-url.reducer';

describe('FileUrl Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = fileURLReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
