import {workBasketBriefReducer, workBasketBriefInitialState} from './workbasket-controller.reducer';

describe('WorkbasketController Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = workBasketBriefReducer(workBasketBriefInitialState, action);

      expect(result).toBe(workBasketBriefInitialState);
    });
  });
});
