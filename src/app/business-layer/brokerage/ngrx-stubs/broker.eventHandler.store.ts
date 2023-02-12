/**
 * Created by Jawad  on 08/08/2020.
 */

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import {filter} from 'rxjs/operators';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import * as eventHandlerActionTypes from '../../shared-types/actions/eventHandler.action.types';
import * as eventHandlerActions from '../../../data-layer/store/actions/eventHandler.actions';
import {eventHandlerSelector} from '../../../data-layer/store/selectors/event-handler.selectors';
import {notificationSuccessSelector} from '../../../data-layer/store/selectors/notification-success.selectors';
import {actionLogsSelector} from '../../../data-layer/store/selectors/action-logs.selectors';
import {routerSelector} from '../../../data-layer/store/selectors/router.selectors';
import {notificationFailureSelector} from '../../../data-layer/store/selectors/notification-failure.selectors';
import {selectedRowSelector} from '../../../data-layer/store/selectors/selected-row.selectors';
import {claimAccidentSummarySelector} from '../../../data-layer/store/selectors/workBasket.selector';
import {claimSummarySelector} from '../../../data-layer/store/selectors/claim.selector';
import {vehicleSummarySelector} from '../../../data-layer/store/selectors/vehicle.selector';
import {accidentSelector} from '../../../data-layer/store/selectors/searchAccident.selector';
import {httpFailureSelector} from '../../../data-layer/store/selectors/http-failure.selectors';
import {
  accidentCoverSheetPDFCodeSelector,
  accidentPDFCodeSelector,
  claimCoverSheetPDFCodeSelector,
  pdfCodeSelector, pdfLINVCodeSelector
} from '../../../data-layer/store/selectors/pdf-code.selectors';
import {footerSelector} from '../../../data-layer/store/selectors/footer.selectors';
import {dynamicFormSelector} from '../../../data-layer/store/selectors/system-admin/dynamic-form.selectors';
import {isActiveSelector} from "../../../data-layer/store/selectors/login.selector";

@Injectable()
export class BrokerEventHandlerStore {
  brokerLabel: string = BrokerList.BROKER_EVENT_HANDLER_STORE;

  constructor(private store: Store<GlobalState>) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {
        eventHandler$: this.store.select(eventHandlerSelector).pipe(filter(value => value !== undefined)),
        notificationSuccess$: this.store.select(notificationSuccessSelector).pipe(filter(value => value !== undefined)),
        notificationFailure$: this.store.select(notificationFailureSelector).pipe(filter(value => value !== undefined)),
        httpFailure$: this.store.select(httpFailureSelector).pipe(filter(value => value !== undefined)),
        actionLog$: this.store.select(actionLogsSelector).pipe(filter(value => value !== undefined)),
        router$: this.store.select(routerSelector).pipe(filter(value => value !== undefined)),
        selectedRow$: this.store.select(selectedRowSelector),
        claimAccidentSummary$: this.store.select(claimAccidentSummarySelector),
        accident$: this.store.select(accidentSelector),
        claimSummary$: this.store.select(claimSummarySelector),
        vehicleSummary$: this.store.select(vehicleSummarySelector),
        pdfCode$: this.store.select(pdfCodeSelector),
        pdfLINVCode$: this.store.select(pdfLINVCodeSelector),
        accidentPDFCode$: this.store.select(accidentPDFCodeSelector),
        claimCoverSheetPDFCode$: this.store.select(claimCoverSheetPDFCodeSelector),
        accidentCoverSheetPDFCode$: this.store.select(accidentCoverSheetPDFCodeSelector),
        isActive$: this.store.select(isActiveSelector),
        footerBrief$: this.store.select(footerSelector).pipe(filter(value => value !== undefined)),
      }
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case eventHandlerActionTypes.LOAD_EVENT:
        this.store.dispatch(eventHandlerActions.loadEventSuccess({data: brokerAction.payLoad}));
        break;
    }
  }
}
