import {Action, createReducer, on} from '@ngrx/store';
import {
  loadImplicitSaveClaimApplicationSuccess, loadNonStructuralAccidentApplicationChangeSuccess,
  loadNonStructuralApplicationChangeSuccess, loadPersistAccidentSuccess,
  loadSaveClaimApplicationSuccess, loadUpdateAccidentSuccess
} from '../actions/application.actions';
import {loadClaimAccidentSummarySuccess, loadImplicitClaimAccidentSummarySuccess} from '../actions/workBasket.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadImplicitSaveClaimLetterPDFApplicationSuccess} from '../actions/pdf.actions';


export const isDirtyFeatureKey = 'isDirty';


export interface IsDirtyState {
  isDirty: boolean
}

export const isDirtyInitialState: IsDirtyState = {
  isDirty: undefined
};


export const isDirtyStateReducer = createReducer(
  isDirtyInitialState,
  on(loadNonStructuralApplicationChangeSuccess, (isDirtyState, {data}) => ({isDirty: true})),
  on(loadNonStructuralAccidentApplicationChangeSuccess, (isDirtyState, {data}) => ({isDirty: true})),
  on(loadClaimAccidentSummarySuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadPersistAccidentSuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadUpdateAccidentSuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadImplicitClaimAccidentSummarySuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadImplicitSaveClaimLetterPDFApplicationSuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadImplicitSaveClaimApplicationSuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadSaveClaimApplicationSuccess, (isDirtyState, {data}) => ({isDirty: false})),
  on(loadExitApplication, (isDirtyState, {data}) => ({isDirty: false})),
);

export function isDirtyReducer(isDirtyState: IsDirtyState | undefined, action: Action) {
  return isDirtyStateReducer(isDirtyState, action);
}
