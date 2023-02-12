export class ClaimOffer {
  public claimOfferID: number = null;
  public claimOfferDate: Date = new Date();
  public claimOfferAmount: number = 0;
  public claimOfferStatus: string = '';
  public claimOfferNumber: string = '';
  public claimOfferLetterGeneratedFlag: boolean;
  public lastLetterSentDate: string = '';
  public offerTypeIndicator: string = '';
  public generalDamageAmount: number = 0;
  public specialDamageAmount: number = 0;
  public futureMedicalExpenseAmount: number = 0;
  public economicLossAmount: number = 0;
  public interestAmount: number = 0;
  public contributoryNegligenceAmount: number = 0;
  public solatiumAmount: number = 0;
  public bridePrice: number = 0;
  public funeralExpense: number = 0;
  public stateAmount: number = 0;
  public legalCostAmount: number = 0;

}
