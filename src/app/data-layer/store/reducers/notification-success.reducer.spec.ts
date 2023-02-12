import { notificationSuccessReducer, notificationSuccessInitialState } from './notification-success.reducer';

describe('Notification Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = notificationSuccessReducer(notificationSuccessInitialState, action);

      expect(result).toBe(notificationSuccessInitialState);
    });
  });
});
