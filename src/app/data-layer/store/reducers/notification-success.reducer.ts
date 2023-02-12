import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadIsActiveSuccess, loadLoginsSuccess} from '../actions/login.actions';
import {loadNotificationSuccess} from '../actions/notification-success.actions';
import {
  loadBPCClaimWQSummarySuccess,
  loadClaimAccidentSummarySuccess,
  loadCLClaimWQSummarySuccess,
  loadImplicitClaimAccidentSummarySuccess,
  loadSearchClaimWQSummarySuccess
} from '../actions/workBasket.actions';
import {loadRemoteServicesSuccess, loadVersionSuccess} from '../actions/remote-services.actions';
import {
  loadAssignBriefSuccess,
  loadAssignComboDataSuccess,
  loadWorkBasketBriefSuccess,
  loadWorkBasketComboDataSuccess
} from '../actions/workBasketController.actions';
import {loadFooterSuccess} from '../actions/footer.actions';
import {loadHeaderComboDataSuccess, loadHeadersSuccess} from '../actions/header-controller.actions';
import {
  loadAccidentApplicationAccidentBriefSuccess,
  loadAccidentApplicationAccidentComboDataSuccess,
  loadAccidentBriefSuccess,
  loadAccidentComboDataSuccess
} from '../actions/accident-controller.actions';
import {loadVehicleBriefSuccess, loadVehicleComboDataSuccess} from '../actions/vehicle-controller.actions';
import {loadShowVehicleSuccess} from '../actions/vehicle.actions';
import {loadInitialAssessmentBriefSuccess, loadInitialAssessmentComboDataSuccess} from '../actions/initial-assessment-controller.actions';
import {
  loadAccidentPhaseAttachmentGridBriefSuccess,
  loadAccidentPhaseAttachmentGridComboDataSuccess,
  loadAttachmentBriefSuccess,
  loadAttachmentComboDataSuccess
} from '../actions/attachment-controller.actions';
import {loadPaymentBriefSuccess, loadPaymentComboDataSuccess} from '../actions/payment-controller.actions';
import {loadClaimBriefSuccess, loadClaimComboDataSuccess, loadClaimServiceProviderBriefSuccess} from '../actions/claim-controller.actions';
import {loadSelectedRowSuccess} from '../actions/selected-row.actions';
import {loadDiaryBriefSuccess} from '../actions/diary-controller.actions';
import {
  loadApplicationHeaderInfoSuccess,
  loadImplicitSaveClaimApplicationSuccess,
  loadNewAccidentSuccess,
  loadNonStructuralAccidentApplicationChangeSuccess,
  loadPersistAccidentSuccess,
  loadSaveClaimApplicationSuccess,
  loadSubmitAccidentSuccess,
  loadUpdateAccidentSuccess
} from '../actions/application.actions';
import {loadUploadAccidentNewDocumentSuccess, loadUploadNewDocumentSuccess} from '../actions/attachment.actions';
import {loadMedicalEvidenceBriefSuccess, loadMedicalEvidenceComboDataSuccess} from '../actions/medical-evidence-controller.actions';
import {
  loadFraudCheckApprovedBriefSuccess,
  loadFraudCheckBriefSuccess,
  loadFraudCheckComboDataSuccess,
  loadInvestigationApprovalBriefSuccess,
  loadInvestigationApprovalComboDataSuccess,
  loadReviewApprovedBriefSuccess,
  loadReviewApprovedComboDataSuccess
} from '../actions/fraud-check-controller.actions';
import {
  loadIndependentReviewApprovedBriefSuccess,
  loadIndependentReviewBriefSuccess,
  loadIndependentReviewClaimAuthorizationBriefSuccess,
  loadIndependentReviewClaimAuthorizationComboDataSuccess,
  loadIndependentReviewComboDataSuccess
} from '../actions/independent-review-controller.actions';
import {
  loadClaimOfferApprovedBriefSuccess,
  loadClaimOfferBriefSuccess,
  loadClaimOfferClaimAuthorizationBriefSuccess,
  loadClaimOfferComboDataSuccess
} from '../actions/claim-offer-controller.actions';
import {loadDriverPictureSuccess, loadDriverRequestSuccess, loadVehicleRequestSuccess} from '../actions/third-party.actions';
import {loadSearchAccidentComboDataSuccess} from '../actions/search-accident-controller.actions';
import {loadAccidentSuccess} from '../actions/searchAccident.actions';
import {
  loadAccidentPhaseVehicleComboDataSuccess,
  loadAccidentPhaseVehicleSectionComboDataSuccess,
  loadAccidentPhaseVehicleSelectedRecordSuccess
} from '../actions/accident-phase-vehicle-section.actions';
import {
  loadAccidentPhaseClaimantBriefSuccess,
  loadAccidentPhaseClaimBriefSuccess,
  loadAccidentPhaseClaimComboDataSuccess,
  loadAccidentPhaseClaimSectionBriefSuccess,
  loadAccidentPhaseClaimSectionComboDataSuccess,
  loadAccidentPhaseClaimSelectedRecordSuccess,
  loadAccidentPhaseClaimServiceProviderBriefSuccess
} from '../actions/accident-phase-claim-section.actions';
import {
  loadAccidentPhaseDiaryBriefSuccess,
  loadAccidentPhaseDiaryCommentsBriefSuccess,
  loadAccidentPhaseDiarySelectedRecordSuccess
} from '../actions/accident-phase-diary-section.actions';
import {
  loadAccidentPhaseAttachmentDialogBriefSuccess,
  loadAccidentPhaseAttachmentDialogComboDataSuccess,
  loadAccidentPhaseAttachmentDialogSelectedRecordSuccess
} from '../actions/accident-phase-attachment-section.actions';
import {
  loadAccidentCoverSheetPDFCodeSuccess,
  loadAccidentCoverSheetPDFSuccess,
  loadAccidentPDFCodeSuccess,
  loadClaimCoverSheetPDFCodeSuccess,
  loadClaimCoverSheetPDFSuccess,
  loadGenerateAccidentPDFSuccess,
  loadGenerateClaimGridPDFSuccess,
  loadGenerateClaimLINVPDFSuccess,
  loadGenerateClaimOfferLetterPDFSuccess,
  loadGenerateClaimPDFSuccess,
  loadGenerateClaimRevisionPDFSuccess,
  loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess,
  loadImplicitRetrieveAccidentLetterPDFApplicationSuccess,
  loadImplicitRetrieveClaimCoverSheetPDFApplicationSuccess,
  loadImplicitRetrieveClaimGridPDFApplicationSuccess,
  loadImplicitRetrieveClaimLetterPDFApplicationSuccess,
  loadImplicitRetrieveClaimLINVPDFApplicationSuccess,
  loadImplicitRetrieveClaimOfferLetterPDFApplicationSuccess,
  loadImplicitRetrieveClaimRevisionPDFApplicationSuccess,
  loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess,
  loadImplicitSaveAccidentLetterPDFApplicationSuccess,
  loadImplicitSaveClaimCoverSheetPDFApplicationSuccess,
  loadImplicitSaveClaimGridPDFApplicationSuccess,
  loadImplicitSaveClaimLetterPDFApplicationSuccess,
  loadImplicitSaveClaimLINVPDFApplicationSuccess,
  loadImplicitSaveClaimOfferLetterPDFApplicationSuccess,
  loadImplicitSaveClaimRevisionPDFApplicationSuccess,
  loadLINVPDFCode,
  loadPDFCodeSuccess,
} from '../actions/pdf.actions';
import {loadWebsocketAuthenticationSuccess} from '../actions/websocket-connect.actions';
import {
  loadWebsocketAssignSuccess,
  loadWebsocketReAssignSuccess,
  loadWebsocketSaveClaimSuccess,
  loadWebsocketTakeControlSuccess
} from '../actions/websocket-messages.actions';
import {loadShowClaimSuccess} from '../actions/claim.action';
import {loadChangePasswordsSuccess} from '../actions/changePassword.actions';
import {
  loadChangeBatchStatusSuccess,
  loadCreateBatchSuccess,
  loadEditBatchPaymentSuccess,
  loadExportBatchSuccess,
  loadGetPaymentBatchSuccess,
  loadGetPaymentsSuccess,
  loadGetPaymentTypesSuccess,
  loadPaymentFilterSuccess,
  loadUnBatchedPaymentsSuccess
} from '../actions/system-admin/payments.actions';
import {
  loadGetCompanyParametersSuccess,
  loadGetParameterCategoriesSuccess, loadRetrieveCompanyParametersSuccess,
  loadUpdateCompanyParametersSuccess
} from '../actions/system-admin/parameters.actions';
import {
  loadPersistServiceProvidersSuccess,
  loadServiceProvidersSuccess,
  loadServiceProviderTypesSuccess
} from '../actions/system-admin/service-providers.actions';
import {
  loadPersistSystemUsersSuccess, loadRetrieveSystemUsersSuccess,
  loadSendSystemUserPasswordSuccess,
  loadSystemUsersSuccess,
  loadSystemUserTypesSuccess
} from '../actions/system-admin/system-user.actions';
import {
  loadAssignBulkAccidentsSuccess,
  loadGetAccidentsSuccess,
  loadGetUserLookupSuccess, loadRetrieveAccidentsSuccess
} from '../actions/system-admin/bulk-assignment.actions';
import {loadDynamicFormsSuccess} from '../actions/system-admin/dynamic-form.actions';


export const notificationSuccessFeatureKey = 'notificationSuccess';


export interface NotificationSuccessState {
  notificationSuccess: any
}

export const notificationSuccessInitialState: NotificationSuccessState = {
  notificationSuccess: undefined
};


export const notificationSuccessStateReducer = createReducer(
  notificationSuccessInitialState,
  on(loadLoginsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadBPCClaimWQSummarySuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadCLClaimWQSummarySuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSearchClaimWQSummarySuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadRemoteServicesSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetPaymentsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetParameterCategoriesSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetCompanyParametersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadRetrieveCompanyParametersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadUpdateCompanyParametersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadServiceProviderTypesSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadServiceProvidersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPersistServiceProvidersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetUserLookupSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetAccidentsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAssignBulkAccidentsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadRetrieveAccidentsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetPaymentTypesSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGetPaymentBatchSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadCreateBatchSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadUnBatchedPaymentsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadChangeBatchStatusSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadEditBatchPaymentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPaymentFilterSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadExportBatchSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSystemUsersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPersistSystemUsersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadRetrieveSystemUsersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSendSystemUserPasswordSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSystemUserTypesSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadFooterSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWorkBasketComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseDiaryCommentsBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseDiarySelectedRecordSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSubmitAccidentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWorkBasketBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAssignComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseDiaryBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentCoverSheetPDFCodeSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadHeaderComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPDFCodeSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadChangePasswordsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimCoverSheetPDFCodeSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimCoverSheetPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveClaimCoverSheetPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadShowClaimSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentCoverSheetPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPDFCodeSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSearchAccidentComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadUploadNewDocumentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitClaimAccidentSummarySuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimAccidentSummarySuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAssignBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadHeadersSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentApplicationAccidentComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentApplicationAccidentBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadVehicleComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAttachmentComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPersistAccidentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimSelectedRecordSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimSectionBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseAttachmentGridBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseAttachmentGridComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGenerateClaimPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimOfferLetterPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGenerateClaimOfferLetterPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveClaimOfferLetterPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveClaimLetterPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveClaimGridPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveAccidentLetterPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveClaimRevisionPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGenerateClaimGridPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGenerateClaimRevisionPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadUploadAccidentNewDocumentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseAttachmentDialogBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseAttachmentDialogComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseAttachmentDialogSelectedRecordSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimSectionComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimantBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimServiceProviderBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseClaimBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadUpdateAccidentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseVehicleSectionComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseVehicleComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAccidentPhaseVehicleSelectedRecordSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadAttachmentBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPaymentComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadNewAccidentSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadFraudCheckComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadNonStructuralAccidentApplicationChangeSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGenerateAccidentPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveAccidentLetterPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadFraudCheckBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadReviewApprovedBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadFraudCheckApprovedBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadReviewApprovedComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadInvestigationApprovalComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadInvestigationApprovalBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadIndependentReviewComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadIndependentReviewBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadIndependentReviewClaimAuthorizationBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadIndependentReviewClaimAuthorizationComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadIndependentReviewApprovedBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimOfferBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimOfferClaimAuthorizationBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimOfferComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimOfferApprovedBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadPaymentBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadDiaryBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadInitialAssessmentBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadVehicleBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadClaimServiceProviderBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSelectedRowSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadMedicalEvidenceComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadMedicalEvidenceBriefSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadInitialAssessmentComboDataSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadDriverPictureSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadDriverRequestSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadVehicleRequestSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadNotificationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadShowVehicleSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadVersionSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadDynamicFormsSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWebsocketAuthenticationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWebsocketTakeControlSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWebsocketReAssignSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWebsocketAssignSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadWebsocketSaveClaimSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadSaveClaimApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadApplicationHeaderInfoSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimLetterPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimGridPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimRevisionPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimCoverSheetPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitSaveClaimLINVPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadImplicitRetrieveClaimLINVPDFApplicationSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadGenerateClaimLINVPDFSuccess, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadLINVPDFCode, (notificationSuccessState, {data}) => ({notificationSuccess: data.notificationSuccess})),
  on(loadExitApplication, (notificationSuccessState, {data}) => ({notificationSuccess: data})),
  on(loadLogout, (notificationSuccessState, {data}) => ({notificationSuccess: data})),
);

export function notificationSuccessReducer(notificationSuccessState: NotificationSuccessState | undefined, action: Action) {
  return notificationSuccessStateReducer(notificationSuccessState, action);
}
