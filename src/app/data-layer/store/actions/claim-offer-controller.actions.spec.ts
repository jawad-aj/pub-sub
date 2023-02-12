import * as fromClaimOfferController from './claim-offer-controller.actions';

describe('loadClaimOfferControllers', () => {
  it('should return an action', () => {
    expect(fromClaimOfferController.loadClaimOfferControllers().type).toBe('[ClaimOfferController] Load ClaimOfferControllers');
  });
});
