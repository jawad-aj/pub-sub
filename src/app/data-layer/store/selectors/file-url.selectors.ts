import {selectRemoteService} from './remote-service.selectors';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';
import {ServicesUtilParams} from '../../api-services/models/Services.util.params';
import {ServicesUtil} from '../../api-services/util/services.util';
import * as fromFileUrl from '../reducers/file-url.reducer';
import * as fromRemoteServices from '../reducers/remote-services.reducer';

/**
 * FileUrl Selector
 */

export const selectFileUrl = createFeatureSelector<GlobalState, fromFileUrl.FileURLState>(fromFileUrl.fileURLFeatureKey);
export const fileUrlSelector = createSelector(selectFileUrl, selectRemoteService,
  (fileURLState: fromFileUrl.FileURLState,
   remoteServiceState: fromRemoteServices.RemoteServiceState) => {
    let path: ServicesUtilParams;
    if (remoteServiceState.servicesUtilParams) {
      path = remoteServiceState.servicesUtilParams.find(value => value.serviceName === 'downloadSupportingDocuments');
    }
    let obj: ServicesUtil = new ServicesUtil();
    path = obj.decodeServiceParams(path);
    let endPoint = path.serviceEndpoint.search('webservice');
    let url = path.serviceEndpoint.substr(0, endPoint);
    if (fileURLState.fileURL) {
      return url + 'reports/' + fileURLState.fileURL;
    }
  });
