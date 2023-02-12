import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpWebService} from '../../api-services/HttpServices';
import {
  loadAccident,
  loadAccidentSuccess,
  loadImplicitAccident,
  loadImplicitAccidentSuccess,
  loadSearchAccidents,
  loadSearchAccidentsSuccess
} from '../actions/searchAccident.actions';
import {SearchAccidentService} from '../../api-services/search-accident.service';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';

@Injectable()
export class SearchAccidentEffects {


  getAccidentListSummary$ = createEffect(() => this.actions$.pipe(
    ofType(loadSearchAccidents),
    switchMap((action) => this.searchAccidentService.getAccidentListSummary(action.data)
      .pipe(
        map((response) => {

          let obj = this.notificationUtil.notificationHandler(response, 'accidentSummary');
          return this.notificationUtil.successCheck('accidentSummary', obj, loadSearchAccidentsSuccess, 'Accident List Summary can not be retrieved.', 'loadSearchAccidentsSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  retrieveAccident$ = createEffect(() => this.actions$.pipe(
    ofType(loadAccident),
    switchMap((action) => this.searchAccidentService.retrieveAccident(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, loadAccidentSuccess, 'Accident can not be retrieved.', 'loadAccidentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  retrieveImplicitAccident$ = createEffect(() => this.actions$.pipe(
    ofType(loadImplicitAccident),
    switchMap((action) => this.searchAccidentService.retrieveAccident(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, loadImplicitAccidentSuccess, 'Accident can not be retrieved.', 'loadImplicitAccidentSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private httpWebService: HttpWebService, private searchAccidentService: SearchAccidentService, private notificationUtil: NotificationUtil) {
  }
}
