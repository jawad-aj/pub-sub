import * as fromFooter from './footer.actions';

describe('loadFooters', () => {
  it('should return an action', () => {
    expect(fromFooter.loadFooter.type).toBe('[Footer] Load Footers');
  });
});
