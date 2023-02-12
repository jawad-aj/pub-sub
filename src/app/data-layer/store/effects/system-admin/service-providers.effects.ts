import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as serviceProviderActions from "../../actions/system-admin/service-providers.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {loadServiceFailure} from "../../actions/service-failure.actions";
import {NotificationUtil} from "../../../api-services/util/NotificationUtil";
import {ServiceProvidersService} from "../../../api-services/system-admin/service-providers.service";


@Injectable()
export class ServiceProvidersEffects {

  /**
   *  Get Service Provider Types
   */
  getServiceProviderTypes$ = createEffect(() => this.actions$.pipe(
    ofType(serviceProviderActions.loadServiceProviderTypes),
    switchMap((action) => this.serviceProviderService.getServiceProviderTypes(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'serviceProviderTypes');
          return this.notificationUtil.successCheck('serviceProviderTypes', obj, serviceProviderActions.loadServiceProviderTypesSuccess, 'Service Providers types can not be retrieved.', 'loadServiceProviderTypesSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   *  Get Service Providers
   */
  getServiceProviders$ = createEffect(() => this.actions$.pipe(
    ofType(serviceProviderActions.loadServiceProviders),
    switchMap((action) => this.serviceProviderService.getServiceProviders(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'serviceProviders');
          return this.notificationUtil.successCheck('serviceProviders', obj, serviceProviderActions.loadServiceProvidersSuccess, 'Service Providers  can not be retrieved.', 'loadServiceProvidersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   *  Persist Service Providers
   */
  persistServiceProviders$ = createEffect(() => this.actions$.pipe(
    ofType(serviceProviderActions.loadPersistServiceProviders),
    switchMap((action) => this.serviceProviderService.persistServiceProviders(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'serviceProviders');
          return this.notificationUtil.successCheck('serviceProviders', obj, serviceProviderActions.loadPersistServiceProvidersSuccess, 'Service Providers  can not be updated.', 'loadPersistServiceProvidersSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private actions$: Actions, private serviceProviderService: ServiceProvidersService, private notificationUtil: NotificationUtil) {
  }
}
