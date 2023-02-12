import * as fromIndependentReviewController from './independent-review-controller.actions';

describe('loadIndependentReviewControllers', () => {
  it('should return an action', () => {
    expect(fromIndependentReviewController.loadIndependentReviewControllers().type).toBe('[IndependentReviewController] Load IndependentReviewControllers');
  });
});
