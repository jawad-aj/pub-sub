/*
* Created by Jawad  on 02/10/2020.
*/
import {Action, createReducer, on} from '@ngrx/store';
import {loadEventSuccess} from "../actions/eventHandler.actions";
import {CMSEvents} from "../../../business-layer/models/CMSEvents";

export const eventHandlerFeatureKey = 'eventHandler';

export interface EventHandlerState {
  readonly eventHandler: CMSEvents;
}


export const eventHandlerInitialState: EventHandlerState = {
  eventHandler: undefined,
};


const eventHandlerStateReducer = createReducer(
  eventHandlerInitialState,
  on(loadEventSuccess, (eventHandlerState, {data}) => ({eventHandler: data})),
);


export function eventHandlerReducer(eventHandlerState: EventHandlerState | undefined, action: Action) {
  return eventHandlerStateReducer(eventHandlerState, action);
}
