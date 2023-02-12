import {Action, createReducer, on} from '@ngrx/store';
import {AccidentListSummary} from '../../../business-layer/models/AccidentListSummary';
import {
  loadAccidentSuccess,
  loadClearSearchAccidents,
  loadImplicitAccidentSuccess,
  loadSearchAccidentsSuccess
} from '../actions/searchAccident.actions';
import {ApplicationUtil} from '../../api-services/util/ApplicationUtil';
import * as _ from 'lodash-es';
import {Accident} from '../../../business-layer/models/Accident';
import {loadLogout} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {
  loadNewAccidentSuccess,
  loadNonStructuralAccidentApplicationChangeSuccess,
  loadPersistAccidentSuccess,
  loadSubmitAccidentSuccess,
  loadUpdateAccidentSuccess
} from '../actions/application.actions';
import {
  loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess,
  loadImplicitRetrieveAccidentLetterPDFApplicationSuccess,
  loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess,
  loadImplicitSaveAccidentLetterPDFApplicationSuccess
} from '../actions/pdf.actions';

export const accidentListSummaryFeatureKey = 'accidentListSummary';
export const accidentFeatureKey = 'accident';

export interface accidentListSummaryState {
  readonly accidentListSummary: AccidentListSummary[];
}

export const accidentListSummaryInitialState: accidentListSummaryState = {
  accidentListSummary: undefined,
};

const searchAccidentReducer = createReducer(
  accidentListSummaryInitialState,
  on(loadSearchAccidentsSuccess, (accidentListSummaryState, {data}) => ({accidentListSummary: data.accidentSummary})),
  on(loadClearSearchAccidents, (accidentListSummaryState, {data}) => ({accidentListSummary: undefined})),
  on(loadExitApplication, (accidentListSummaryState, {data}) => ({accidentListSummary: data})),
  on(loadLogout, (accidentListSummaryState, {data}) => ({accidentListSummary: data}))
);

export function accidentListSummaryReducer(accidentListSummaryState: accidentListSummaryState | undefined, action: Action) {
  return searchAccidentReducer(accidentListSummaryState, action);
}

/*░░░░░░░░░░░░░░░░░░░░░░ Accident Reducer░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export interface accidentState {
  readonly accident: Accident;
}

export const accidentInitialState: accidentState = {
  accident: undefined,
};

const accidentReducer = createReducer(
  accidentInitialState,
  on(loadAccidentSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadImplicitAccidentSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadNewAccidentSuccess, (accidentState, {data}) => ({accident: data.application})),
  on(loadPersistAccidentSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadUpdateAccidentSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadSubmitAccidentSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadNonStructuralAccidentApplicationChangeSuccess, (accidentState, {data}) => ({accident: data.application})),
  on(loadImplicitRetrieveAccidentLetterPDFApplicationSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadImplicitSaveAccidentLetterPDFApplicationSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess, (accidentState, {data}) => ({accident: data.accident})),
  on(loadExitApplication, (accidentState, {data}) => ({accident: data})),
  on(loadLogout, (accidentState, {data}) => ({accident: data})),
);

export function reducerAccident(accidentState: accidentState | undefined, action: Action) {
  return accidentReducer(accidentState, action);
}

/*░░░░░░░░░░░░░░░░░░░░░░ claimWQSummaryMetaReducer░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

export function accidentListSummaryMetaReducer(reducer) {
  return function(state, action) {
    if (action.type === loadSearchAccidentsSuccess.type) {
      let app = _.cloneDeep(action);
      if (app.data != undefined) {
        app.data.accidentSummary = ApplicationUtil.searchAccidentTypeCasting(app.data.accidentSummary);
      }
      return reducer(state, app);
    } else {
      return reducer(state, action);
    }
  };
}

/*░░░░░░░░░░░░░░░░░░░░░░Accident Meta Reducer░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

export function accidentMetaReducer(reducer) {
  return function(state, action) {
    if (action.type === loadAccidentSuccess.type || action.type === loadImplicitAccidentSuccess.type ||
      action.type === loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess.type ||
      action.type === loadUpdateAccidentSuccess.type || action.type === loadPersistAccidentSuccess.type ||
      action.type === loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess.type ||
      action.type === loadSubmitAccidentSuccess.type || action.type === loadImplicitSaveAccidentLetterPDFApplicationSuccess.type ||
      action.type ===loadImplicitRetrieveAccidentLetterPDFApplicationSuccess.type) {
      let applicationUtil: ApplicationUtil = new ApplicationUtil();
      let app = _.cloneDeep(action);
      app.data.accident = applicationUtil.retrieveAccidentApplicationResponseHandler(app.data.accident);
      return reducer(state, app);
    } else {
      return reducer(state, action);
    }
  };
}
