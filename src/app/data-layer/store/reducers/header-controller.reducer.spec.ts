import { headerComboDataReducer, headerComboDataInitialState } from './header-controller.reducer';

describe('HeaderController Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = headerComboDataReducer(headerComboDataInitialState, action);

      expect(result).toBe(headerComboDataInitialState);
    });
  });
});
