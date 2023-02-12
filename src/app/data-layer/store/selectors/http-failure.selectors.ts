import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from "../reducers";
import * as fromHttpFailure from "../reducers/http-failure.reducer";
import * as _ from 'lodash-es';

/**
 * Created by Jawad  on 06/08/2020.
 */

export const selectHttpFailure = createFeatureSelector<GlobalState, fromHttpFailure.HttpFailureState>(fromHttpFailure.httpFailureFeatureKey);
export const httpFailureSelector = createSelector(selectHttpFailure, (httpFailureState: fromHttpFailure.HttpFailureState) => _.cloneDeep(httpFailureState.httpFailure));

