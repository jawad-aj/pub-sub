import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as dynamicFormAction from '../../actions/system-admin/dynamic-form.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../../actions/service-failure.actions';
import {NotificationUtil} from '../../../api-services/util/NotificationUtil';
import {DynamicFormService} from '../../../api-services/system-admin/dynamic-form.service';


@Injectable()
export class DynamicFormEffects {

  dynamicForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dynamicFormAction.loadDynamicForms),
      switchMap((action) => this.dynamicFormService.getDynamicFormData(action.data)
        .pipe(
          map((response) => {
            let obj = this.notificationUtil.notificationHandler(response, 'dynamicForms');
            return this.notificationUtil.successCheck('dynamicForms', obj, dynamicFormAction.loadDynamicFormsSuccess, 'loadDynamicFormsFailure', 'loadDynamicFormsSuccess');
          }),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  constructor(private actions$: Actions, private dynamicFormService: DynamicFormService, private notificationUtil: NotificationUtil) {
  }
}
