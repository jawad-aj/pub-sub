import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as claimComponentActions from '../actions/claim.action';
import {ClaimService} from '../../api-services/claim.service';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import * as vehicleComponentActions from '../actions/vehicle.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';

@Injectable()
export class ClaimEffects {

  getClaims$ = createEffect(() => this.actions$.pipe(
    ofType(claimComponentActions.loadShowClaim),
    switchMap((action) => this.claimService.getClaims(action.data)
      .pipe(map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'claimSummary');
          return this.notificationUtil.successCheck('claimSummary', obj, claimComponentActions.loadShowClaimSuccess, 'Claim summary can not be retrieved.', 'loadShowClaimSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private claimService: ClaimService, private notificationUtil: NotificationUtil) {
  }

}
