export class SystemUser {
  public userID: number = null;
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
  public approvalLimitAmount: number = 0;

}
