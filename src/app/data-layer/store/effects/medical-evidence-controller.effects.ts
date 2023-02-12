import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as medicalEvidenceControllerActions from "../actions/medical-evidence-controller.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";
import {MedicalEvidenceControllerService} from "../../api-services/medical-evidence-controller.service";


@Injectable()
export class MedicalEvidenceControllerEffects {

  /**
   *  MedicalEvidence Brief
   */
  medicalEvidenceBrief$ = createEffect(() => this.actions$.pipe(
    ofType(medicalEvidenceControllerActions.loadMedicalEvidenceBrief),
    switchMap((action) => this.medicalEvidenceControllerService.setMedicalEvidenceBrief()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'medicalEvidenceBrief');
          return this.notificationUtil.successCheck('medicalEvidenceBrief', obj, medicalEvidenceControllerActions.loadMedicalEvidenceBriefSuccess, 'loadMedicalEvidenceBriefFailure', 'loadMedicalEvidenceBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  MedicalEvidence ComboData
   */
  medicalEvidenceComboData$ = createEffect(() => this.actions$.pipe(
    ofType(medicalEvidenceControllerActions.loadMedicalEvidenceComboData),
    switchMap((action) => this.medicalEvidenceControllerService.setMedicalEvidenceComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'medicalEvidenceComboData');
          return this.notificationUtil.successCheck('medicalEvidenceComboData', obj, medicalEvidenceControllerActions.loadMedicalEvidenceComboDataSuccess, 'loadMedicalEvidenceComboDataFailure', 'loadMedicalEvidenceComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private medicalEvidenceControllerService: MedicalEvidenceControllerService, private notificationUtil: NotificationUtil) {
  }

}
