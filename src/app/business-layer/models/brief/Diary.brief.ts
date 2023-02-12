import {Lookup} from '../Lookup';
import {CompanyParameter} from "../CompanyParam";

export class DiaryBrief {
  public createdBy: string = '';
  public applicationType: string = '';
  public componentType: string = '';
  public claimID: number = null;
  public accidentID: number = null;
  public userID: number = null;
  public readOnlyIndicator: string = 'E';
  public claims: Lookup[] = [];
  public loginName:string='';
  public loginCompleteName:string='';
  public attachmentCodes:CompanyParameter[]=[];
}
