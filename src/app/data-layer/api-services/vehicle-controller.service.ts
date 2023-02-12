import {CompanyParameterUtil} from './util/CompanyParameterUtil';
import {LoginDataService} from '../../business-layer/services/login-data.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {VehicleSmartComboData} from '../../business-layer/models/VehicleSmartComboData';
import {VehicleSmartBrief} from '../../business-layer/models/brief/VehicleSmart.brief';
import {SelectedRowDataService} from '../../business-layer/services/selected-row.service';
import {ClaimAccidentSummaryService} from '../../business-layer/services/claimAccidentSummary.service';
import {ClaimDisableUtil} from './util/ClaimDisableUtil';
import {Diary} from '../../business-layer/models/Diary';

@Injectable()
export class VehicleControllerService {
  constructor(private loginData: LoginDataService, private selectedRow: SelectedRowDataService,
              private claimAccidentSummary: ClaimAccidentSummaryService, private isDisabled: ClaimDisableUtil) {
  }

  /**
   * setVehicleBrief
   */
  setVehicleBrief(accidentClassification): Observable<VehicleSmartBrief> {
    let brief: VehicleSmartBrief = new VehicleSmartBrief();
    brief.vehicleBrief.accidentID = this.selectedRow.getProperty('accidentID');
    brief.vehicleBrief.vehicleID = this.selectedRow.getProperty('vehicleID');
    brief.vehicleBrief.claimID = this.selectedRow.getProperty('claimID');
    brief.vehicleBrief.ctpVirmDatabase = '1';
    brief.vehicleBrief.loginUserID = this.loginData.getProperty('userID');
    brief.vehicleBrief.loginUserName = this.loginData.getCompleteLoginName();
    brief.vehicleBrief.accidentDate = this.claimAccidentSummary.getAccident().accidentDate;
    brief.vehicleBrief.readOnlyIndicator = this.isDisabled.disableForms();
    brief.driverBrief.readOnlyIndicator = this.isDisabled.disableForms();
    brief.ownerBrief.readOnlyIndicator = this.isDisabled.disableForms();
    brief.driverBrief.address.readOnlyIndicator = this.isDisabled.disableForms();
    brief.ownerBrief.address.readOnlyIndicator = this.isDisabled.disableForms();
    brief.driverBrief.accidentID = this.selectedRow.getProperty('accidentID');
    brief.driverBrief.claimID = this.selectedRow.getProperty('claimID');
    brief.driverBrief.vehicleID = this.selectedRow.getProperty('vehicleID');
    brief.driverBrief.loginUserID = this.loginData.getProperty('userID');
    brief.driverBrief.loginUserName = this.loginData.getCompleteLoginName();
    brief.driverBrief.accidentClassification = accidentClassification;
    brief.driverBrief.noResponseAfter28Days = this.checkDiaryEntry('notice of accident', 28);
    brief.driverBrief.noResponseAfterFurther14Days = this.checkDiaryEntry('no response after 28 days', 14);
    return of(brief);
  }

  /**
   * setVehicleComboData
   */
  setVehicleComboData(): Observable<VehicleSmartComboData> {
    return of(CompanyParameterUtil.vehicleComboDataHandler(this.loginData.getLoginData()));
  }

  /**
   * show/Hide PDF's
   */
  checkDiaryEntry(title: string, days: number): boolean {
    let diary: Diary;
    this.claimAccidentSummary.getAccident().diaries.forEach(value => {
      if (value.diaryTitle && value.diaryTitle.toLowerCase() === title) {
        diary = value;
      }
    });
    if (diary) {
      return this.daysCalculator(diary.diaryDate) >= days;
    } else {
      return false;
    }
  }

  daysCalculator(date): number {
    if (date) {
      return (new Date(new Date().toDateString()).getTime() - new Date(new Date(date).toDateString()).getTime()) / (1000 * 3600 * 24);
    } else {
      return 0;
    }
  }

}
