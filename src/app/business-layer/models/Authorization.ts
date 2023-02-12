import {ClaimAuthorization} from './ClaimAuthorization';

export class Authorization {

  public authorizationID: number = null;
  public revisedAssessment: ClaimAuthorization = new ClaimAuthorization();
  public independentReview: ClaimAuthorization = new ClaimAuthorization();
  public independentReviewApproved: ClaimAuthorization = new ClaimAuthorization();
  public claimOffer: ClaimAuthorization = new ClaimAuthorization();
  public claimOfferApproved: ClaimAuthorization = new ClaimAuthorization();
  public fraudCheckApproved: ClaimAuthorization = new ClaimAuthorization();
  public reviewApproved: ClaimAuthorization = new ClaimAuthorization();
  public fraudCheckInvestigation: ClaimAuthorization = new ClaimAuthorization();
}
