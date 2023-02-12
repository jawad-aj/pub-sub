import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {catchError, map, switchMap} from 'rxjs/operators';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {SearchAccidentControllerService} from '../../api-services/search-accident-controller.service';
import * as searchAccidentControllerActions from '../actions/search-accident-controller.actions';

@Injectable()
export class SearchAccidentControllerEffects {

  /**
   *  SearchAccident ComboData
   */
  searchAccidentComboData$ = createEffect(() => this.actions$.pipe(
    ofType(searchAccidentControllerActions.loadSearchAccidentComboData),
    switchMap((action) => this.searchAccidentControllerService.setSearchAccidentComboData()
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'searchAccidentComboData');
          return this.notificationUtil.successCheck('searchAccidentComboData', obj, searchAccidentControllerActions.loadSearchAccidentComboDataSuccess, 'loadSearchAccidentComboDataFailure', 'loadSearchAccidentComboDataSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );


  constructor(private  actions$: Actions, private searchAccidentControllerService: SearchAccidentControllerService, private notificationUtil: NotificationUtil) {
  }

}
