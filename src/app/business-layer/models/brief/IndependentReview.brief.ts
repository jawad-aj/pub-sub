import {IndependentReviewChecklist} from '../IndependentReviewChecklist';

export class IndependentReviewBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public claimID: number = null;
  public independentReviewCheckLists: IndependentReviewChecklist[] = [];
}
