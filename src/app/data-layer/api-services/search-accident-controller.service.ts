import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AccidentBrief} from '../../business-layer/models/brief/Accident.brief';
import {AccidentComboData} from '../../business-layer/models/AccidentComboData';
import {SearchAccidentComboData} from '../../business-layer/models/SearchAccidentComboData';

@Injectable()
export class SearchAccidentControllerService {
  constructor(private loginData: LoginDataService) {
  }


  /**
   * setSearchAccidentComboData
   */
  setSearchAccidentComboData(): Observable<SearchAccidentComboData> {
    return of(CompanyParameterUtil.searchAccidentComboDataHandler(this.loginData.getLoginData()));
  }
}
