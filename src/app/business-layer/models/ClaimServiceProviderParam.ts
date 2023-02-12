import {Address} from "./Address";

export class ClaimServiceProviderParam {
  public claimServiceProviderID: number = null;
  public claimID: number = null;
  public serviceProviderID: number = 0;
  public serviceProviderType: string = '';
  public referenceNumber: string = '';
  public contactName: string = '';
  public courtLevel: string = '';
  public serviceProviderName: string = '';
  public serviceProviderContactName: string = '';
  public serviceProviderContactNumber: string = '';
  public customField1: string = '';
  public customField2: string = '';
  public serviceProviderStatus: string = '';
  public trialCourtAddress: string = '';
  public courtReferenceNumber: string = '';
  public address: Address = new Address();
}
