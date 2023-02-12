import * as fromBulkAssignment from './bulk-assignment.actions';

describe('loadBulkAssignments', () => {
  it('should return an action', () => {
    expect(fromBulkAssignment.loadBulkAssignments().type).toBe('[BulkAssignment] Load BulkAssignments');
  });
});
