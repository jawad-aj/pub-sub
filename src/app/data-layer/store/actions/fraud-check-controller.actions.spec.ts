import * as fromFraudCheckController from './fraud-check-controller.actions';

describe('loadFraudCheckControllers', () => {
  it('should return an action', () => {
    expect(fromFraudCheckController.loadFraudCheckControllers().type).toBe('[FraudCheckController] Load FraudCheckControllers');
  });
});
