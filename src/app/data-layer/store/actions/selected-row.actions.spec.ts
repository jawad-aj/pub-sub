import * as fromSelectedRow from './selected-row.actions';

describe('loadSelectedRows', () => {
  it('should return an action', () => {
    expect(fromSelectedRow.loadSelectedRow.type).toBe('[SelectedRow] Load SelectedRows');
  });
});
