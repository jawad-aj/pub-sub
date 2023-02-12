import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromEventsMapping from '../reducers/events-mapping.reducer'
import {GlobalState} from "../reducers";

/**
 * EventsMapping Selector
 */

export const selectEventsMapping = createFeatureSelector<GlobalState, fromEventsMapping.EventsMappingState>(fromEventsMapping.eventsMappingFeatureKey);
export const eventsMappingSelector = createSelector(selectEventsMapping, (eventsMappingState: fromEventsMapping.EventsMappingState) => _.cloneDeep(eventsMappingState.eventsMapping));
