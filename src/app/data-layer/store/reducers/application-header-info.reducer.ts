import {Action, createReducer, on} from '@ngrx/store';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadLogout} from '../actions/logout.actions';
import {ApplicationHeaderInfo} from '../../../business-layer/models/ApplicationHeaderInfo';
import {loadApplicationHeaderInfoSuccess} from '../actions/application.actions';


/**
 * ApplicationHeaderInfo Reducer
 */
export const applicationHeaderInfoFeatureKey = 'applicationHeaderInfo';


export interface ApplicationHeaderInfoState {
  readonly applicationHeaderInfo: ApplicationHeaderInfo;
}


export const applicationHeaderInfoInitialState: ApplicationHeaderInfoState = {
  applicationHeaderInfo: undefined,
};


const applicationHeaderInfoStateReducer = createReducer(
  applicationHeaderInfoInitialState,
  on(loadApplicationHeaderInfoSuccess, (applicationHeaderInfoState, {data}) => ({applicationHeaderInfo: data.applicationHeaderInfo})),
  on(loadExitApplication, (applicationHeaderInfoState, {data}) => ({applicationHeaderInfo: data})),
  on(loadLogout, (applicationHeaderInfoState, {data}) => ({applicationHeaderInfo: data})),
);


export function applicationHeaderInfoReducer(applicationHeaderInfoState: ApplicationHeaderInfoState | undefined, action: Action) {
  return applicationHeaderInfoStateReducer(applicationHeaderInfoState, action);
}
