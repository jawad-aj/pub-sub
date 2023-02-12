/**
 * Created by Jawad on 06/08/2020.
 */
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as eventsMappingAction from '../actions/events-mapping.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {loadServiceFailure} from "../actions/service-failure.actions";
import {HttpErrorResponse} from "@angular/common/http";
import {EventsMappingEffectService} from "../../api-services/events-mapping-effect.service";


@Injectable()
export class EventsMappingEffects {

  eventsMapping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventsMappingAction.loadEventsMapping),
      switchMap((action) => this.eventsMappingService.getEventMapping(action.data)
        .pipe(
          map((response) =>
            ({
              type: eventsMappingAction.loadEventsMappingSuccess.type,
              data: response,
            })),
          catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
      ))
  );

  constructor(private actions$: Actions, private eventsMappingService: EventsMappingEffectService) {
  }

}
