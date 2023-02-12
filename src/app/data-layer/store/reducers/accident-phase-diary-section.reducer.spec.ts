import { reducer, initialState } from './accident-phase-diary-section.reducer';

describe('AccidentPhaseDiarySection Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
