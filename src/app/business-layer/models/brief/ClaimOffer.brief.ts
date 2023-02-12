export class ClaimOfferBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public claimID: number = null;
  public fraudCheckApproval: string = '';
  public claimEstimateAmount: number = 0; // Initial Assessment Current Amount
  public claimCost: number = 0; // Initial Assessment Cost Amount
  public claimOfficerLimitAmount: number = 0; // Login Data Claim Officer Amount
}
