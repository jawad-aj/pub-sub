import { selectedRowReducer, selectedRowInitialState } from './selected-row.reducer';

describe('SelectedRow Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = selectedRowReducer(selectedRowInitialState, action);

      expect(result).toBe(selectedRowInitialState);
    });
  });
});
