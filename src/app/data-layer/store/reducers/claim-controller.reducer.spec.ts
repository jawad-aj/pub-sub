import { claimBriefReducer, claimBriefInitialState } from './claim-controller.reducer';

describe('ClaimController Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = claimBriefReducer(claimBriefInitialState, action);

      expect(result).toBe(claimBriefInitialState);
    });
  });
});
