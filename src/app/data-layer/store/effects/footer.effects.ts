import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as footerActions from "../actions/footer.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {loadServiceFailure} from "../actions/service-failure.actions";
import {NotificationUtil} from "../../api-services/util/NotificationUtil";
import {FooterService} from "../../api-services/footer.service";


@Injectable()
export class FooterEffects {

  /**
   *  footer Brief
   */
  footer$ = createEffect(() => this.actions$.pipe(
    ofType(footerActions.loadFooter),
    switchMap((action) => this.footerService.setFooterBrief(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'footerBrief');
          return this.notificationUtil.successCheck('footerBrief', obj, footerActions.loadFooterSuccess, 'loadFooterBriefFailure', 'loadFooterBriefSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private footerService: FooterService, private notificationUtil: NotificationUtil) {
  }
}
