import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import * as fromRemoteServices from '../reducers/remote-services.reducer';
import * as _ from 'lodash-es';

/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Login░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const selectRemoteService = createFeatureSelector<GlobalState, fromRemoteServices.RemoteServiceState>(fromRemoteServices.remoteServiceFeatureKey);
export const remoteServiceSelector = createSelector(selectRemoteService, (remoteServiceState: fromRemoteServices.RemoteServiceState) => _.cloneDeep(remoteServiceState.servicesUtilParams));



