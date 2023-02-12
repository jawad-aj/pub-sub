import { notificationFailureReducer, notificationFailureInitialState } from './notification-failure.reducer';

describe('NotificationFailure Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = notificationFailureReducer(notificationFailureInitialState, action);

      expect(result).toBe(notificationFailureInitialState);
    });
  });
});
