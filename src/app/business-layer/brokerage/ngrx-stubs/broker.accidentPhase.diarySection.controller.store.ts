/**
 * Created by Jawad  on 10/12/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import * as accidentPhaseDiarySectionActionTypes from '../../shared-types/actions/accidentPhaseDiarySectionController.action.types';
import * as accidentPhaseDiarySectionActions from '../../../data-layer/store/actions/accident-phase-diary-section.actions';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {
  accidentPhaseDiaryBriefSelector,
  accidentPhaseDiarySelectedRecordSelector
} from '../../../data-layer/store/selectors/accident-phase-diary-section.selectors';

@Injectable()
export class BrokerAccidentPhaseDiarySectionControllerStore {
  brokerLabel: string = BrokerList.BROKER_ACCIDENT_PHASE_DIARY_SECTION_CONTROLLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        accident$: this.store.select(accidentSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseDiaryBrief$: this.store.select(accidentPhaseDiaryBriefSelector).pipe(filter(value => value !== undefined)),
        accidentPhaseDiarySelectedRecord$: this.store.select(accidentPhaseDiarySelectedRecordSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case accidentPhaseDiarySectionActionTypes.GET_ACCIDENT_APP_DIARY_BRIEF:
        this.store.dispatch(accidentPhaseDiarySectionActions.loadAccidentPhaseDiaryBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseDiarySectionActionTypes.GET_ACCIDENT_APP_DIARY_COMMENTS_BRIEF:
        this.store.dispatch(accidentPhaseDiarySectionActions.loadAccidentPhaseDiaryCommentsBrief({data: brokerAction.payLoad}));
        break;
      case accidentPhaseDiarySectionActionTypes.GET_ACCIDENT_APP_DIARY_RECORD:
        this.store.dispatch(accidentPhaseDiarySectionActions.loadAccidentPhaseDiarySelectedRecord({data: brokerAction.payLoad}));
        break;
    }
  }
}
