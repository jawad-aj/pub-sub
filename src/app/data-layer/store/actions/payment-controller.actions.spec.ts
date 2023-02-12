import * as fromPaymentController from './payment-controller.actions';

describe('loadPaymentControllers', () => {
  it('should return an action', () => {
    expect(fromPaymentController.loadPaymentControllers().type).toBe('[PaymentController] Load PaymentControllers');
  });
});
