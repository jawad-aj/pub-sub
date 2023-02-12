import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromSystemUser from "../../reducers/system-admin/system-user.reducer";
import * as _ from 'lodash-es';
import {
  GetSystemUsersState,
  GetSystemUserTypesState
} from "../../reducers/system-admin/system-user.reducer";

/**
 * SystemUserTypes Selector
 */

export const selectSystemUserTypes = createFeatureSelector<GetSystemUserTypesState>(fromSystemUser.systemUserTypesFeatureKey);
export const systemUserTypesSelector = createSelector(selectSystemUserTypes, (systemUserTypesState: fromSystemUser.GetSystemUserTypesState) => _.cloneDeep(systemUserTypesState.systemUserTypes));
/**
 * SystemUsers Selector
 */

export const selectSystemUsers = createFeatureSelector<GetSystemUsersState>(fromSystemUser.systemUsersFeatureKey);
export const systemUsersSelector = createSelector(selectSystemUsers, (systemUsersState: fromSystemUser.GetSystemUsersState) => _.cloneDeep(systemUsersState.systemUsers));
