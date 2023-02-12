import {SummaryFilter} from './SummaryFilter';
import {Accident} from './Accident';
import {SupportingDocument} from "./SupportingDocument";
import {DownloadProcessorParams} from "./DownloadProcessorParams";
import {ClaimAccidentSummary} from "./ClaimAccidentSummary";
import {PrintBrief} from "./PrintBrief";
import {SummaryParam} from "./SummaryParam";
import {ClaimPayment} from './ClaimPayment';
import {SystemUser} from './SystemUser';


export class JsonData {
  public paramStr: string = '';
  public paramStr1: string = '';
  public paramStr2: string = '';
  public paramInt1: number = null;
  public paramInt2: number = null;
  public paramInt3: number = null;
  public IDs: number[] = [];
  public accidentIDs: number[] = [];
  public accident: Accident;
  public payments: ClaimPayment[]=[];
  public supportingDocuments: SupportingDocument[] = [];
  public claimAccidentSummary: ClaimAccidentSummary;
  public downloadProcessorParams: DownloadProcessorParams = new DownloadProcessorParams();
  public printBrief: PrintBrief = new PrintBrief();
  public summaryParam: SummaryParam = new SummaryParam();
  public summaryFilter: SummaryFilter = new SummaryFilter();
  public systemUser: SystemUser = new SystemUser();
}
