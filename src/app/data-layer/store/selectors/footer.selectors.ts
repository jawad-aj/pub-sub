import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromFooter from '../reducers/footer.reducer'
import {GlobalState} from "../reducers";

/**
 * Footer Selector
 */

export const selectFooter = createFeatureSelector<GlobalState, fromFooter.FooterState>(fromFooter.footerFeatureKey);
export const footerSelector = createSelector(selectFooter, (footerState: fromFooter.FooterState) => _.cloneDeep(footerState.footer));
