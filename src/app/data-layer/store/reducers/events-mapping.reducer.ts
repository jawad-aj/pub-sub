import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from "../actions/logout.actions";
import {loadEventsMappingSuccess} from "../actions/events-mapping.actions";

/**
 * EventsMapping Reducer
 */
export const eventsMappingFeatureKey = 'eventsMapping';


export interface EventsMappingState {
  readonly eventsMapping: any;
}


export const eventsMappingInitialState: EventsMappingState = {
  eventsMapping: undefined,
};


const eventsMappingStateReducer = createReducer(
  eventsMappingInitialState,
  on(loadEventsMappingSuccess, (eventsMappingState, {data}) => ({eventsMapping: data})),
  on(loadLogout, (eventsMappingState, {data}) => ({eventsMapping: data})),
);


export function eventsMappingReducer(eventsMappingState: EventsMappingState | undefined, action: Action) {
  return eventsMappingStateReducer(eventsMappingState, action);
}
