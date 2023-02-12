import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from "../reducers";
import * as fromEventHandler from "../reducers/event-handler.reducer";
import * as _ from 'lodash-es';

/**
 * Created by Jawad on 02/10/2020.
 */

export const selectEventHandler = createFeatureSelector<GlobalState, fromEventHandler.EventHandlerState>(fromEventHandler.eventHandlerFeatureKey);
export const eventHandlerSelector = createSelector(selectEventHandler, (eventHandlerState: fromEventHandler.EventHandlerState) => _.cloneDeep(eventHandlerState.eventHandler));

