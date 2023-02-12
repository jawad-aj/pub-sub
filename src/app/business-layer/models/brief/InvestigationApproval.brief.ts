import {ServiceProvider} from '../ServiceProvider';

export class InvestigationApprovalBrief {
  public applicationTypeIndicator: string = '';
  public readOnlyIndicator: string = 'E';
  public indicator: string = '';
  public fraudCheckStatus: string = '';
  public firstFollowUp: boolean = false;
  public secondFollowUp: boolean = false;
  public serviceProviders: ServiceProvider[] = [];
}
