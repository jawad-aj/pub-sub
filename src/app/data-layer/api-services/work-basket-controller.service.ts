import {CompanyParameterUtil} from "./util/CompanyParameterUtil";
import {LoginDataService} from "../../business-layer/services/login-data.service";
import {Injectable} from "@angular/core";
import {WorkBasketComboData} from "../../business-layer/models/WorkBasketComboData";
import {AssignComboData} from "../../business-layer/models/assignComboData";
import {WorkBasketBrief} from "../../business-layer/models/brief/WorkBasket.brief";
import {Observable, of} from "rxjs";
import {CMSEvents} from "../../business-layer/models/CMSEvents";

@Injectable()
export class WorkBasketControllerService {
  constructor(private loginData: LoginDataService) {
  }
  /**
   * setWorkBasketComboData
   */
  setWorkBasketComboData(): Observable<WorkBasketComboData> {
    return of(CompanyParameterUtil.workBasketDataHandler(this.loginData.getLoginData()));
  }
  /**
   * setWorkBasketBrief
   */
  setWorkBasketBrief(): Observable<WorkBasketBrief> {
    let brief: WorkBasketBrief = new WorkBasketBrief();
    brief.userID = this.loginData.getProperty('userID');
    brief.logonCode = this.loginData.getProperty('logonCode');
    brief.loginCompleteName = this.loginData.getCompleteLoginName();
    return of(brief);
  }
  /**
   * setAssignComboData
   */
  setAssignComboData(): Observable<AssignComboData> {
    return of(CompanyParameterUtil.assignDataHandler(this.loginData.getLoginData()));
  }
  /**
   * setAssignBrief
   */
  setAssignBrief(brief): Observable<CMSEvents> {
    return of(brief);
  }
}
