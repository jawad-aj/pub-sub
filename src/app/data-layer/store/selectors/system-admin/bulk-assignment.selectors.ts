import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromBulkAssignment from "../../reducers/system-admin/bulk-assignment.reducer";
import * as _ from 'lodash-es';
import {GetBulkAssignmentAccidentsState, GetUserLookupState} from "../../reducers/system-admin/bulk-assignment.reducer";


/**
 * UserLookups Selector
 */

export const selectUserLookups = createFeatureSelector<GetUserLookupState>(fromBulkAssignment.userLookupFeatureKey);
export const userLookupSelector = createSelector(selectUserLookups, (userLookupState: fromBulkAssignment.GetUserLookupState) => _.cloneDeep(userLookupState.userLookup));

/**
 * BulkAssignmentAccidents Selector
 */

export const selectBulkAssignmentAccidents = createFeatureSelector<GetBulkAssignmentAccidentsState>(fromBulkAssignment.bulkAssignmentAccidentsFeatureKey);
export const bulkAssignmentAccidentsSelector = createSelector(selectBulkAssignmentAccidents, (bulkAssignmentAccidentsState: fromBulkAssignment.GetBulkAssignmentAccidentsState) => _.cloneDeep(bulkAssignmentAccidentsState.bulkAssignmentAccidents));
