import * as fromEvent from './eventHandler.actions';

describe('loadEvents', () => {
  it('should return an action', () => {
    expect(fromEvent.loadEventSuccess.type).toBe('[Event] Load Events Success');
  });
});
