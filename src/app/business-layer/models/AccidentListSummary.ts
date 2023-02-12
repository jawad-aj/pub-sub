export class AccidentListSummary {
  public accidentID: number = null;
  public accidentNumber: string = '';
  public accidentDate: Date = new Date();
  public accidentTime: Date = new Date();
  public policeReportNumber: string = '';
  public policeStation: string = '';
  public province: string = '';
  public registrationNumber: string = '';
  public role: string = '';
  public status: string = '';
  public claimOfficer: string = '';
  public claimEstimateAmount: number = 0;
  public claimPaidAmount: number = 0;
  public claimReserveAmount: number = 0;
  public claimantName: string = '';
  public claimNumber: string = '';
  public claimsCount: number = 0;
  public claimType: string = '';
}
