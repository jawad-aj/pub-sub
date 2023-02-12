import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DiaryBrief} from '../../business-layer/models/brief/Diary.brief';
import {AccidentService} from '../../business-layer/services/accident.service';
import {Lookup} from '../../business-layer/models/Lookup';
import {CompanyParameterUtil} from "./util/CompanyParameterUtil";

@Injectable()
export class DiarySectionControllerService {
  vehicleIndex: number = 0;

  constructor(private loginData: LoginDataService, private accident: AccidentService) {
  }

  /**
   * setDiaryBrief
   */
  setDiaryBrief(): Observable<DiaryBrief> {
    let brief: DiaryBrief = new DiaryBrief();
    brief.applicationType = 'accident';
    brief.componentType = 'diary';
    brief.createdBy = this.loginData.getCompleteLoginName();
    brief.userID = this.loginData.getProperty('userID');
    brief.accidentID = this.accident.getAccident().accidentID;
    brief.claimID = this.accident.getAccident().accidentID;
    brief.claims = this.claimsHandler();
    brief.attachmentCodes = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ATTACHMENT TITLE', this.loginData.getLoginData().companyParameters);
    return of(brief);
  }

  /**
   * selected Row
   */
  setSelectedRow(row): Observable<any> {
    return of(row);
  }

  claimsHandler(): Lookup[] {
    let claims: Lookup[] = [];
    this.vehicleAtFaultIndex();
    if (this.accident.getAccident().vehicles.length !== 0) {
      for (let i = 0; i < this.accident.getAccident().vehicles[this.vehicleIndex].claims.length; i++) {
        let lookup: Lookup = new Lookup();
        lookup.data = String(this.accident.getAccident().vehicles[this.vehicleIndex].claims[i].claimID);
        lookup.label = this.accident.getAccident().vehicles[this.vehicleIndex].claims[i].claimNumber;
        lookup.label1 = this.getClaimantCompleteName(this.accident.getAccident().vehicles[this.vehicleIndex].claims[i].claimant.firstName, this.accident.getAccident().vehicles[this.vehicleIndex].claims[i].claimant.lastName);
        claims.push(lookup);
      }
    }
    return claims;
  }

  vehicleAtFaultIndex() {
    if (this.accident.getAccident().vehicles.length > 0) {
      this.vehicleIndex = this.accident.getAccident().vehicles.findIndex(value => value.vehicleAtFaultIndicator === 'T');
    }
  }

  getClaimantCompleteName(firstName, lastName): string {
    if (firstName && lastName) {
      return firstName + ' ' + lastName;
    } else {
      return '';
    }
  }
}
