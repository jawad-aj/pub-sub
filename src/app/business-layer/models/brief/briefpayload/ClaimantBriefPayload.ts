export class ClaimantBriefPayload{
  public claimID:number=null;
  public accidentID:number=null;
  public claimStatus: string = '';
  public claimType: string = '';
  public claimHandler: string = '';
  public roleCode: string = '';
  public newAccident: boolean = false;
}
