/*
* Created by Jawad  on 23/09/2020.
*/
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from "../reducers";
import * as fromRouter from "../reducers/router.reducer";
import * as _ from 'lodash-es';

export const selectRouter = createFeatureSelector<GlobalState, fromRouter.RouterState>(fromRouter.routerFeatureKey);
export const routerSelector = createSelector(selectRouter, (routerState: fromRouter.RouterState) => _.cloneDeep(routerState.router));



