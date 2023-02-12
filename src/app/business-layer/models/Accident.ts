import {Address} from './Address';
import {ReinsuranceProgram} from './ReinsuranceProgram';
import {ClaimPaymentRecovery} from './ClaimPaymentRecovery';
import {Diary} from './Diary';
import {Vehicle} from './Vehicle';

export class Accident {

  public serialVersionUID: string = null;
  public accidentID: number = null;
  public reinsuranceProgram: ReinsuranceProgram = null;
  public accidentDate: string  = '' ;
  public address: Address = new Address();
  public intersection: string = '';
  public policeStation: string = '';
  public accidentTime: Date = new Date();
  public policeReportNumber: string = '';
  public policeOfficerName: string = '';
  public policeReportDate: string = '' ;
  public creationDate: string  = '' ;
  public roadConditionStatus: string = '';
  public weatherStatus: string = '';
  public accidentNumber: string = '';
  public accidentCauseCode: string = '';
  public fileStatus: string = '';
  public fileCloseDate: string = '' ;
  public fileCloseApprovalBy: number = 0;
  public RUMCode: string = '';
  public version: number = 0;
  public claimPaymentRecoveries: ClaimPaymentRecovery[] = [];
  public diaries: Diary[] = [];
  public vehicles: Vehicle[] = [];
  public stageIndicator: string = '';

}
