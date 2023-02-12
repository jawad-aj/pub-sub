import * as fromSystemUser from './system-user.actions';

describe('loadSystemUsers', () => {
  it('should return an action', () => {
    expect(fromSystemUser.loadSystemUsers().type).toBe('[SystemUser] Load SystemUsers');
  });
});
