import {createAction, props} from '@ngrx/store';
import {CmsParams} from '../../../business-layer/models/CmsParams';
import {ClaimSummary} from '../../../business-layer/models/ClaimSummary';


/*░░░░░░░░░░░░░░░░░░░░░░Show Claim Actions░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const loadShowClaim = createAction(
  '[Claim] Load ClaimSummary',
  props<{ data: any }>()
);

export const loadShowClaimSuccess = createAction(
  '[Claim] Load ClaimSummary Success',
  props<{ data: any}>()
);
