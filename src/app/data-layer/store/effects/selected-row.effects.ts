import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as selectedRowActionsActions from '../actions/selected-row.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {SelectedRowService} from '../../api-services/selected-row.service';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';


@Injectable()
export class SelectedRowEffects {
  /**
   *  selectedRow
   */
  selectedRow$ = createEffect(() => this.actions$.pipe(
    ofType(selectedRowActionsActions.loadSelectedRow),
    switchMap((action) => this.selectedRowService.setSelectedRow(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'selectedRow');
          return this.notificationUtil.successCheck('selectedRow', obj, selectedRowActionsActions.loadSelectedRowSuccess, 'loadSelectedRowFailure', 'loadSelectedRowSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private selectedRowService: SelectedRowService, private notificationUtil: NotificationUtil) {
  }
}
