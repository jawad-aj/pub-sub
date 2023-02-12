import * as fromApplication from './application.actions';

describe('loadApplications', () => {
  it('should return an action', () => {
    expect(fromApplication.loadNonStructuralApplicationChange.type).toBe('[Application] Load Application');
  });
});
