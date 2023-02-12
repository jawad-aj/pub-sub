import * as fromGetPayments from './payments.actions';

describe('loadGetPaymentss', () => {
  it('should return an action', () => {
    expect(fromGetPayments.loadGetPaymentss().type).toBe('[GetPayments] Load GetPaymentss');
  });
});
