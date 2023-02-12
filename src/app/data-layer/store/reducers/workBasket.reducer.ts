import {Action, createReducer, on} from '@ngrx/store';
import {ClaimAccidentSummary} from '../../../business-layer/models/ClaimAccidentSummary';
import * as workBasketActions from '../actions/workBasket.actions';
import {
  loadBPCClaimWQSummarySuccess,
  loadCLClaimWQSummarySuccess,
  loadSearchClaimWQSummarySuccess
} from '../actions/workBasket.actions';
import * as _ from 'lodash-es';
import {ApplicationUtil} from '../../api-services/util/ApplicationUtil';
import {ClaimWQSummary} from '../../../business-layer/models/ClaimWQSummary';
import * as pdfActions from '../actions/pdf.actions';
import {loadLogout} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {
  loadImplicitSaveClaimApplicationSuccess,
  loadNonStructuralApplicationChangeSuccess,
  loadSaveClaimApplicationSuccess
} from '../actions/application.actions';
import {
  loadWebsocketAssignSuccess,
  loadWebsocketReAssignSuccess,
  loadWebsocketSaveClaimSuccess,
  loadWebsocketTakeControlSuccess
} from '../actions/websocket-messages.actions';


/*
*  ClaimAccidentSummary Reducer
*/
export const claimAccidentSummaryFeatureKey = 'claimAccidentSummary';

export interface ClaimAccidentSummaryState {
  readonly claimAccidentSummary: ClaimAccidentSummary;
}

export const claimAccidentSummaryInitialState: ClaimAccidentSummaryState = {
  claimAccidentSummary: undefined,
};


const claimRetrievalReducer = createReducer(
  claimAccidentSummaryInitialState,
  on(workBasketActions.loadClaimAccidentSummarySuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.claimAccidentSummary})),
  on(workBasketActions.loadImplicitClaimAccidentSummarySuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.claimAccidentSummary})),
  on(loadNonStructuralApplicationChangeSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(loadSaveClaimApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(loadImplicitSaveClaimApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitSaveClaimLetterPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitSaveClaimGridPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitRetrieveClaimLetterPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitRetrieveClaimGridPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitSaveClaimRevisionPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitRetrieveClaimRevisionPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitRetrieveClaimCoverSheetPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitSaveClaimCoverSheetPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitSaveClaimLINVPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitRetrieveClaimLINVPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitSaveClaimOfferLetterPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(pdfActions.loadImplicitRetrieveClaimOfferLetterPDFApplicationSuccess, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data.application})),
  on(loadExitApplication, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data})),
  on(loadLogout, (claimAccidentSummaryState, {data}) => ({claimAccidentSummary: data})),
);

export function claimAccidentSummaryReducer(claimAccidentSummaryState: ClaimAccidentSummaryState | undefined, action: Action) {
  return claimRetrievalReducer(claimAccidentSummaryState, action);
}

/*
*  ClaimWQSummary Reducer
*/
export const getClaimWQSummaryFeatureKey = 'getClaimWQSummary';

export interface ClaimWQSummaryState {
  readonly getClaimWQSummary: ClaimWQSummary [];
}


export const getClaimWQSummaryInitialState: ClaimWQSummaryState = {
  getClaimWQSummary: undefined,
};


const getClaimWQSummaryStateReducer = createReducer(
  getClaimWQSummaryInitialState,
  on(loadBPCClaimWQSummarySuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.claimWQSummary})),
  on(loadCLClaimWQSummarySuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.claimWQSummary})),
  on(loadSearchClaimWQSummarySuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.claimWQSummary})),
  on(loadWebsocketAssignSuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.websocketAssign})),
  on(loadWebsocketReAssignSuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.websocketReAssign})),
  on(loadWebsocketTakeControlSuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.websocketTakeControl})),
  on(loadWebsocketSaveClaimSuccess, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data.websocketSaveClaim})),
  on(loadLogout, (getClaimWQSummaryState, {data}) => ({getClaimWQSummary: data}))
);


export function getClaimWQSummaryReducer(getClaimWQSummaryState: ClaimWQSummaryState | undefined, action: Action) {
  return getClaimWQSummaryStateReducer(getClaimWQSummaryState, action);
}

/*
*  ClaimTypeWQSummary Reducer
*/
export const claimTypeWQSummaryFeatureKey = 'claimTypeWQSummary';

export interface ClaimTypeWQSummaryState {
  readonly claimTypeWQSummary: string;
}


export const claimTypeWQSummaryInitialState: ClaimTypeWQSummaryState = {
  claimTypeWQSummary: undefined,
};


const claimTypeWQSummaryStateReducer = createReducer(
  claimTypeWQSummaryInitialState,
  on(loadCLClaimWQSummarySuccess, (getClaimWQSummaryState, {data}) => ({claimTypeWQSummary: 'CL'})),
  on(loadBPCClaimWQSummarySuccess, (getClaimWQSummaryState, {data}) => ({claimTypeWQSummary: 'BPC'})),
  on(loadLogout, (getClaimWQSummaryState, {data}) => ({claimTypeWQSummary: data}))
);


export function claimTypeWQSummaryReducer(getClaimWQSummaryState: ClaimTypeWQSummaryState | undefined, action: Action) {
  return claimTypeWQSummaryStateReducer(getClaimWQSummaryState, action);
}

/*
*  WorkBasket Meta Reducers
*/

export function claimAccidentSummaryMetaReducer(reducer) {
  return function(state: ClaimAccidentSummaryState, action) {
    if (action.type === workBasketActions.loadClaimAccidentSummarySuccess.type) {
      let applicationUtil: ApplicationUtil = new ApplicationUtil();
      let app = _.cloneDeep(action);
      app.data.claimAccidentSummary = applicationUtil.retrieveApplicationResponseHandler(app.data.claimAccidentSummary);
      return reducer(state, app);
    } else {
      return reducer(state, action);
    }
  };
}


export function claimWQSummaryMetaReducer(reducer) {
  return function(state, action) {
    if (action.type === loadBPCClaimWQSummarySuccess.type || action.type === loadCLClaimWQSummarySuccess.type|| action.type === loadSearchClaimWQSummarySuccess.type) {
      let app = _.cloneDeep(action);
      if (app.data) {
        app.data = ApplicationUtil.workBasketTypeCasting(app.data);
      }
      return reducer(state, app);
    }
    if (action.type === loadWebsocketAssignSuccess.type) {
      let app = _.cloneDeep(action);
      if (app.data) {
        app.data = ApplicationUtil.workBasketWebSocketTypeCasting(app.data, 'websocketAssign');
      }
      return reducer(state, app);
    } else if (action.type === loadWebsocketReAssignSuccess.type) {
      let app = _.cloneDeep(action);
      if (app.data) {
        app.data = ApplicationUtil.workBasketWebSocketTypeCasting(app.data, 'websocketReAssign');
      }
      return reducer(state, app);
    } else if (action.type === loadWebsocketTakeControlSuccess.type) {
      let app = _.cloneDeep(action);
      if (app.data) {
        app.data = ApplicationUtil.workBasketWebSocketTypeCasting(app.data, 'websocketTakeControl');
      }
      return reducer(state, app);
    } else {
      return reducer(state, action);
    }
  };
}
