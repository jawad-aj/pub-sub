import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromIsDirty from '../reducers/isdirty.reducer';
import * as _ from 'lodash-es';

/**
 * Created by Jawad on 21/10/2020.
 */

export const selectIsDirty = createFeatureSelector<GlobalState, fromIsDirty.IsDirtyState>(fromIsDirty.isDirtyFeatureKey);
export const isDirtySelector = createSelector(selectIsDirty, (isDirtyState: fromIsDirty.IsDirtyState) => _.cloneDeep(isDirtyState.isDirty));

