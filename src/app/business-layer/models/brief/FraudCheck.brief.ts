import {FraudCheck} from '../FraudCheck';

export class FraudCheckBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public claimID: number = null;
  public fraudCheckLists: FraudCheck[] = [];
}
