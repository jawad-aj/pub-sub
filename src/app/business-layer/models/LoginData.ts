import {Company} from './Company';
import {CompanyParameter} from './CompanyParam';
import {Lookup} from './Lookup';
import {ServiceProvider} from './ServiceProvider';
import {ConditionsChecklist} from './ConditionsChecklist';

export class LoginData {
  public userID: number = 0;
  public loginName: string = '';
  public password: string = '';
  public emailAddress: string = '';
  public accountDisableIndicator: string = '';
  public securityAnswer: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public logonCode: string = '';
  public securityQuestion: string = '';
  public relationshipManagerID: number;
  public businessManagerID: number;
  public saleAreaManagerID: number;
  public saleManagerID: number;
  public agentID: number;
  public groupAccessLevelID: number;
  public bpcClaimOfficerID: number;
  public company: Company;
  public companyParameters: CompanyParameter[] = [];
  public districts: Lookup[] = [];
  public provinces: Lookup[] = [];
  public makes: Lookup[] = [];
  public bodyTypes: Lookup[] = [];
  public logonCodes: Lookup[] = [];
  public assignees: Lookup[] = [];
  public reports: Lookup[] = [];
  public serviceProviders: ServiceProvider[] = [];
  public checklist: ConditionsChecklist[] = [];
  public approvalLimitAmount: number = 0;

}
