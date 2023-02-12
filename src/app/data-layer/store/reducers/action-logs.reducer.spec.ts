import { actionLogsReducer, actionLogsInitialState } from './action-logs.reducer';

describe('ActionLogs Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = actionLogsReducer(actionLogsInitialState, action);

      expect(result).toBe(actionLogsInitialState);
    });
  });
});
