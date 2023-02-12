import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as parameterActions from '../../actions/system-admin/parameters.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {loadServiceFailure} from '../../actions/service-failure.actions';
import {NotificationUtil} from '../../../api-services/util/NotificationUtil';
import {ParametersService} from '../../../api-services/system-admin/parameters.service';


@Injectable()
export class ParametersEffects {

  /**
   *  Get Parameter Categories
   */
  getParameterCategories$ = createEffect(() => this.actions$.pipe(
    ofType(parameterActions.loadGetParameterCategories),
    switchMap((action) => this.parametersService.getParameterCategories(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'parameterCategories');
          return this.notificationUtil.successCheck('parameterCategories', obj, parameterActions.loadGetParameterCategoriesSuccess, 'Parameter Categories can not be retrieved.', 'loadGetParameterCategoriesSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Get Company Parameter
   */
  getCompanyParameters$ = createEffect(() => this.actions$.pipe(
    ofType(parameterActions.loadGetCompanyParameters),
    switchMap((action) => this.parametersService.getCompanyParameters(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'companyParameters');
          return this.notificationUtil.successCheck('companyParameters', obj, parameterActions.loadGetCompanyParametersSuccess, 'Company Parameters can not be retrieved.', 'loadGetCompanyParametersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Retrieve Company Parameter
   */
  retrieveCompanyParameters$ = createEffect(() => this.actions$.pipe(
    ofType(parameterActions.loadRetrieveCompanyParameters),
    switchMap((action) => this.parametersService.retrieveCompanyParameters(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'companyParameters');
          return this.notificationUtil.successCheck('companyParameters', obj, parameterActions.loadRetrieveCompanyParametersSuccess, 'Company Parameters can not be retrieved.', 'loadRetrieveCompanyParametersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Update Company Parameter
   */
  updateCompanyParameters$ = createEffect(() => this.actions$.pipe(
    ofType(parameterActions.loadUpdateCompanyParameters),
    switchMap((action) => this.parametersService.updateCompanyParameters(action.data)
      .pipe(
        map((response) => {
          return this.notificationUtil.voidStringServices(parameterActions.loadUpdateCompanyParametersSuccess, 'loadUpdateCompanyParametersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private actions$: Actions, private parametersService: ParametersService, private notificationUtil: NotificationUtil) {
  }
}
