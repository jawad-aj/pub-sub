import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromThirdParty from '../reducers/third-party.reducer';
import * as _ from 'lodash-es';


/**
 * DriverPicture
 */
export const selectDriverPicture = createFeatureSelector<GlobalState, fromThirdParty.DriverPictureState>(fromThirdParty.driverPictureFeatureKey);
export const driverPictureSelector = createSelector(selectDriverPicture, (driverPictureState: fromThirdParty.DriverPictureState) => _.cloneDeep(driverPictureState.driverPicture));



/**
 * DriverValidation
 */
export const selectDriverValidation = createFeatureSelector<GlobalState, fromThirdParty.DriverValidationState>(fromThirdParty.driverValidationFeatureKey);
export const driverValidationSelector = createSelector(selectDriverValidation, (driverValidationState: fromThirdParty.DriverValidationState) => _.cloneDeep(driverValidationState.driverValidation));



/**
 * CtpVirm
 */
export const selectCtpVirm = createFeatureSelector<GlobalState, fromThirdParty.CtpVirmState>(fromThirdParty.ctpVirmFeatureKey);
export const CTPVIRMSelector = createSelector(selectCtpVirm, (ctpVirmState: fromThirdParty.CtpVirmState) => _.cloneDeep(ctpVirmState.ctpVirm));


