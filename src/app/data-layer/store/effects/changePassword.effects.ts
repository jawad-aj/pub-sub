import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as changePasswordActions from '../actions/changePassword.actions';
import {loadChangePasswordsSuccess} from '../actions/changePassword.actions';
import {ChangePasswordService} from '../../api-services/change-password.service';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';

@Injectable()
export class ChangePasswordEffects {


  changePassword$ = createEffect(() => this.actions$.pipe(
    ofType(changePasswordActions.loadChangePasswords),
    switchMap((action) => this.changePasswordService.changePassword(action.data)
      .pipe(
        map((response) => {
          return this.notificationUtil.stringStatusCheck(response,loadChangePasswordsSuccess, 'Old Password Incorrect','loadChangePasswordsSuccess',);
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private actions$: Actions, private changePasswordService: ChangePasswordService, private notificationUtil: NotificationUtil) {
  }

}
