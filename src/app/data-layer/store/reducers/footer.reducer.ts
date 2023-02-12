import {Action, createReducer, on} from '@ngrx/store';
import {loadFooterSuccess} from '../actions/footer.actions';
import {loadLogout} from "../actions/logout.actions";
import {loadVersionSuccess} from "../actions/remote-services.actions";

/**
 * Footer Reducer
 */
export const footerFeatureKey = 'footer';

export interface FooterState {
  readonly footer: any;
}

export const initialState: FooterState = {
  footer: undefined,
};

const footerStateReducer = createReducer(
  initialState,
  on(loadFooterSuccess, (FooterState, {data}) => ({footer: data.footerBrief})),
  on(loadVersionSuccess, (FooterState, {data}) => ({footer: data.version})),
);

export function footerReducer(FooterState: FooterState | undefined, action: Action) {
  return footerStateReducer(FooterState, action);
}


