import * as fromThirdParty from './third-party.actions';

describe('loadThirdPartys', () => {
  it('should return an action', () => {
    expect(fromThirdParty.loadThirdPartys().type).toBe('[ThirdParty] Load ThirdPartys');
  });
});
