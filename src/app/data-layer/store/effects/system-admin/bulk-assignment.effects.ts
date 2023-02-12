import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as bulkAssignmentActions from '../../actions/system-admin/bulk-assignment.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../../actions/service-failure.actions';
import {NotificationUtil} from '../../../api-services/util/NotificationUtil';
import {BulkAssignmentService} from '../../../api-services/system-admin/bulk-assignment.service';
import {DialogService} from '../../../../business-layer/services/Dialog.service';

@Injectable()
export class BulkAssignmentEffects {

  /**
   *  Get User Lookup
   */
  getUserLookup$ = createEffect(() => this.actions$.pipe(
    ofType(bulkAssignmentActions.loadGetUserLookup),
    switchMap((action) => this.bulkAssignmentService.getUserLookups(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'userLookups');
          return this.notificationUtil.successCheck('userLookups', obj, bulkAssignmentActions.loadGetUserLookupSuccess, 'Users can not be retrieved.', 'loadGetUserLookupSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Get Accidents
   */
  getAccidents$ = createEffect(() => this.actions$.pipe(
    ofType(bulkAssignmentActions.loadGetAccidents),
    switchMap((action) => this.bulkAssignmentService.getAccidents(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'bulkAssignmentAccidents');
          return this.notificationUtil.successCheck('bulkAssignmentAccidents', obj, bulkAssignmentActions.loadGetAccidentsSuccess, 'Accidents can not be retrieved.', 'loadGetAccidentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  AssignBulk Accidents
   */
  assignBulkAccidents$ = createEffect(() => this.actions$.pipe(
    ofType(bulkAssignmentActions.loadAssignBulkAccidents),
    switchMap((action) => this.bulkAssignmentService.assignBulkAccidents(action.data)
      .pipe(
        map((response) => {
          this.dialogService.dispatchDynamicMessage('loadAlertWithDynamicMessage', 'Assigned Successfully');
          return this.notificationUtil.voidStringServices(bulkAssignmentActions.loadAssignBulkAccidentsSuccess, 'loadAssignBulkAccidentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  RetrieveBulk Accidents
   */
  retrieveBulkAccidents$ = createEffect(() => this.actions$.pipe(
    ofType(bulkAssignmentActions.loadRetrieveAccidents),
    switchMap((action) => this.bulkAssignmentService.retrieveBulkAccidents(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'bulkAssignmentAccidents');
          return this.notificationUtil.successCheck('bulkAssignmentAccidents', obj, bulkAssignmentActions.loadRetrieveAccidentsSuccess, 'Accidents can not be retrieved.', 'loadRetrieveAccidentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private actions$: Actions, private bulkAssignmentService: BulkAssignmentService, private dialogService: DialogService, private notificationUtil: NotificationUtil) {
  }
}
