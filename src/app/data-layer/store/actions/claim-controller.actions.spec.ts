import * as fromClaimController from './claim-controller.actions';

describe('loadClaimControllers', () => {
  it('should return an action', () => {
    expect(fromClaimController.loadClaimControllers().type).toBe('[ClaimController] Load ClaimControllers');
  });
});
