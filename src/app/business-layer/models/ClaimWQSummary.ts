export class ClaimWQSummary {
  public accidentID: number = null;
  public vehicleID: number = null;
  public claimID: number = null;
  public accidentNumber: string = '';
  public accidentDate: string = '';
  public claimCreationDate: Date;
  public registrationNumber: string = '';
  public vehicleDescription: string = '';
  public claimNumber: string = '';
  public receivedDate: string='';
  public claimantName: string = '';
  public claimTypeCode: string = '';
  public claimTypeDescription: string = '';
  public roleType: string = '';
  public estimatedAmount: number = 0;
  public reservedAmount: number = 0;
  public claimantPaidAmount: number = 0;
  public totalPaidAmount: number = 0;
  public status: string = '';
  public updateDate: Date;
  public independantReviewerID: number = null;
  public independantReviewer: string = '';/*complete name of reviewer e.g. FraudCheck officer/IR*/
  public CMSAssigneeID: number = 0;
  public CMSAssignee: string = '';
  public archiveIndicator: boolean;
  public notifyCode: string = '';
  public CMSAssigneeLoginName: string = '';
  public independantReviewerLoginName: string = '';
  public independantReviewerType: string = '';
  public fraudCheckAssignable: boolean;
  public classCode: string = '';
}
