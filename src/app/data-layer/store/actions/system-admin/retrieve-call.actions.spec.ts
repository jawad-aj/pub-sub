import * as fromRetrieveCall from './retrieve-call.actions';

describe('loadRetrieveCalls', () => {
  it('should return an action', () => {
    expect(fromRetrieveCall.loadRetrieveCalls().type).toBe('[RetrieveCall] Load RetrieveCalls');
  });
});
