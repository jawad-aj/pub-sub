import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromGenericRetrieve from '../../reducers/system-admin/retrieve-call.reducer';
import {RetrievePayloadState} from '../../reducers/system-admin/retrieve-call.reducer';
import * as _ from 'lodash-es';

/**
 * RetrievePayload Selector
 */

export const selectRetrievePayload = createFeatureSelector<RetrievePayloadState>(fromGenericRetrieve.retrievePayloadFeatureKey);
export const retrievePayloadSelector = createSelector(selectRetrievePayload, (retrievePayloadState: fromGenericRetrieve.RetrievePayloadState) => {
  if (retrievePayloadState) {
    return _.cloneDeep(retrievePayloadState.retrievePayload);
  }
});
