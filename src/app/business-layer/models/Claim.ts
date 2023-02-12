import {Claimant} from './Claimant';
import {InitialAssessment} from './InitialAssessment';
import {ClaimAssessment} from './ClaimAssessment';
import {ClaimantClaim} from './ClaimantClaim';
import {ClaimOffer} from './ClaimOffer';
import {ClaimPayment} from './ClaimPayment';
import {ClaimServiceProvider} from './ClaimServiceProvider';
import {Dependant} from './Dependant';
import {InsuranceConsultant} from './InsuranceConsultant';
import {AcknowledgementLetterAttachment} from './AcknowledgementLetterAttachment';

export class Claim {

  public claimID: number = null;
  public claimNumber: string = '';
  public claimStatus: string = '';
  public claimType: string = '';
  public claimantRelationshipCode: string = '';
  public originalEstimateAmount: number = 0;
  public previousEstimateAmount: number = 0;
  public claimEstimateAmount: number = 0;
  public claimPaidAmount: number = 0;
  public claimReserveAmount: number = 0;
  public letterDate: string = '';
  public claimReceiveDate: string = '';
  public claimAcceptanceDate: string = '';
  public claimSettleDate: string = '';
  public claimHandlerCode: string = '';
  public claimUnderTrialStatus: string = '';
  public trialCourtCode: string = '';
  public trialCourtAddress: string = '';
  public trialCourtOfficerName: string = '';
  public courtReferenceNumber: string = '';
  public claimant: Claimant = new Claimant();
  public initialAssessment: InitialAssessment = new InitialAssessment();
  public quantamAssessment: ClaimAssessment = new ClaimAssessment();
  public claimantClaim: ClaimantClaim = new ClaimantClaim();
  public lastUpdated: string = '';
  public creationDate:  string = '';
  public companyOffer: ClaimOffer = new ClaimOffer();
  public claimantDemand: ClaimOffer = new ClaimOffer();
  public offerType: string = '';
  public offerAmount: number = 0;
  public subsequentCount: number = 0;
  public claimPayments: ClaimPayment[] = [];
  public claimServiceProviders: ClaimServiceProvider[] = [];
  public dependants: Dependant[] = [];
  public archiveIndicator: boolean;
  public notifyCode: string = '';
  public userID: number = null;
  public assigneeType: string = '';
  public claimOfficerID: string = '';
  public insuranceConsultant: InsuranceConsultant = new InsuranceConsultant();
  public closeReason: string = '';
  public isBPCClaim: boolean = false;
  public attachment: AcknowledgementLetterAttachment = new AcknowledgementLetterAttachment();


}
