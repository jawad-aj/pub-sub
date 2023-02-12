import * as fromNotificationFailure from './notification-failure.actions';

describe('loadNotificationFailures', () => {
  it('should return an action', () => {
    expect(fromNotificationFailure.loadNotificationFailures().type).toBe('[NotificationFailure] Load NotificationFailures');
  });
});
