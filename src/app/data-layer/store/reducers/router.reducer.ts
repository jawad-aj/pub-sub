/*
* Created by Jawad  on 23/09/2020.
*/
import {Action, createReducer, on} from '@ngrx/store';
import {loadRouterSuccess} from "../actions/router.actions";

export const routerFeatureKey = 'router';

export interface RouterState {
  readonly router: string;
}


export const routerInitialState: RouterState = {
  router: undefined,
};


const routerStateReducer = createReducer(
  routerInitialState,
  on(loadRouterSuccess, (routerState, {data}) => ({router: data})),
);


export function routerReducer(routerState: RouterState | undefined, action: Action) {
  return routerStateReducer(routerState, action);
}
