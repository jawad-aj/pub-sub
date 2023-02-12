import * as fromServiceFailure from './service-failure.actions';

describe('loadServiceFailures', () => {
  it('should return an action', () => {
    expect(fromServiceFailure.loadServiceFailure.type).toBe('[ServiceFailure] Load ServiceFailures');
  });
});
