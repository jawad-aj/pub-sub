import {ActionReducerMap, MetaReducer,} from '@ngrx/store';
import * as fromLogin from './login.reducer';
import * as fromWorkBasket from './workBasket.reducer';
import * as claimComponent from './claim.reducer';
import * as vehicleComponent from './vehicle.reducer';
import * as searchAccident from './searchAccident.reducer';
import * as fromRemoteServices from './remote-services.reducer';
import * as fromHttpFailure from './http-failure.reducer';
import * as fromActionLogs from './action-logs.reducer';
import * as fromNotificationSuccess from './notification-success.reducer';
import * as fromNotificationFailure from './notification-failure.reducer';
import * as fromRouter from './router.reducer';
import * as fromWorkBasketController from './workbasket-controller.reducer';
import * as fromEventsMapping from './events-mapping.reducer';
import * as fromEventHandler from './event-handler.reducer';
import * as fromFooter from './footer.reducer';
import * as fromHeaderComboData from './header-controller.reducer';
import * as fromAccidentController from './accident-controller.reducer';
import * as fromVehicleController from './vehicle-controller.reducer';
import * as fromClaimController from './claim-controller.reducer';
import * as fromInitialAssessmentController from './initial-assessment-controller.reducer';
import * as fromDiaryController from './diary-controller.reducer';
import * as fromAttachmentController from './attachment-controller.reducer';
import * as fromPaymentController from './payment-controller.reducer';
import * as fromMedicalEvidenceController from './medical-evidence-controller.reducer';
import * as fromFraudCheckController from './fraud-check-controller.reducer';
import * as fromIsDirty from './isdirty.reducer';
import * as fromFileURL from './file-url.reducer';
import * as fromSelectedRow from './selected-row.reducer';
import * as fromIndependentReview from './independent-review-controller.reducer';
import * as fromClaimOffer from './claim-offer-controller.reducer';
import * as fromThirdParty from './third-party.reducer';
import * as fromSearchAccidentController from './search-accident-controller.reducer';
import * as fromAccidentAppVehicleSection from './accident-phase-vehicle-section.reducer';
import * as fromAccidentAppClaimSection from './accident-phase-claim-section.reducer';
import * as fromAccidentAppDiarySection from './accident-phase-diary-section.reducer';
import * as fromAccidentAppAttachmentSection from './accident-phase-attachment-section.reducer';
import * as fromPDFCode from './pdf-code.reducer';
import * as fromApplicationHeaderInfo from './application-header-info.reducer';
import {environment} from '../../../../environments/environment';

/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░Global State░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export interface GlobalState {
  [fromLogin.loginFeatureKey]: fromLogin.loginDataState;
  [fromLogin.isActiveFeatureKey]: fromLogin.isActiveState;
  [fromWorkBasket.getClaimWQSummaryFeatureKey]: fromWorkBasket.ClaimWQSummaryState;
  [fromWorkBasket.claimAccidentSummaryFeatureKey]: fromWorkBasket.ClaimAccidentSummaryState;
  [fromWorkBasket.claimTypeWQSummaryFeatureKey]: fromWorkBasket.ClaimTypeWQSummaryState;
  [claimComponent.claimSummaryFeatureKey]: claimComponent.claimSummaryState;
  [vehicleComponent.vehicleSummaryFeatureKey]: vehicleComponent.vehicleSummaryState;
  [searchAccident.accidentListSummaryFeatureKey]: searchAccident.accidentListSummaryState;
  [searchAccident.accidentFeatureKey]: searchAccident.accidentState;
  [fromRemoteServices.remoteServiceFeatureKey]: fromRemoteServices.RemoteServiceState;
  [fromHttpFailure.httpFailureFeatureKey]: fromHttpFailure.HttpFailureState;
  [fromActionLogs.actionLogsFeatureKey]: fromActionLogs.ActionLogsState;
  [fromNotificationSuccess.notificationSuccessFeatureKey]: fromNotificationSuccess.NotificationSuccessState;
  [fromNotificationFailure.notificationFailureFeatureKey]: fromNotificationFailure.NotificationFailureState;
  [fromRouter.routerFeatureKey]: fromRouter.RouterState;
  [fromWorkBasketController.workBasketComboDataFeatureKey]: fromWorkBasketController.WorkBasketComboDataState;
  [fromWorkBasketController.workBasketBriefFeatureKey]: fromWorkBasketController.WorkBasketBriefState;
  [fromWorkBasketController.assignComboDataFeatureKey]: fromWorkBasketController.AssignComboDataState;
  [fromWorkBasketController.assignBriefFeatureKey]: fromWorkBasketController.AssignBriefState;
  [fromEventsMapping.eventsMappingFeatureKey]: fromEventsMapping.EventsMappingState;
  [fromEventHandler.eventHandlerFeatureKey]: fromEventHandler.EventHandlerState;
  [fromFooter.footerFeatureKey]: fromFooter.FooterState;
  [fromHeaderComboData.headerComboDataFeatureKey]: fromHeaderComboData.HeaderComboDataState;
  [fromHeaderComboData.headersFeatureKey]: fromHeaderComboData.HeadersState;
  [fromAccidentController.accidentBriefFeatureKey]: fromAccidentController.AccidentBriefState;
  [fromAccidentController.accidentComboDataFeatureKey]: fromAccidentController.AccidentComboDataState;
  [fromAccidentController.accidentApplicationAccidentBriefFeatureKey]: fromAccidentController.AccidentApplicationAccidentBriefState;
  [fromAccidentController.accidentApplicationAccidentComboDataFeatureKey]: fromAccidentController.AccidentApplicationAccidentComboDataState;
  [fromVehicleController.vehicleBriefFeatureKey]: fromVehicleController.VehicleBriefState;
  [fromVehicleController.vehicleComboDataFeatureKey]: fromVehicleController.VehicleComboDataState;
  [fromInitialAssessmentController.initialAssessmentBriefFeatureKey]: fromInitialAssessmentController.InitialAssessmentBriefState;
  [fromInitialAssessmentController.initialAssessmentComboDataFeatureKey]: fromInitialAssessmentController.InitialAssessmentComboDataState;
  [fromDiaryController.diaryBriefFeatureKey]: fromDiaryController.DiaryBriefState;
  [fromAttachmentController.attachmentBriefFeatureKey]: fromAttachmentController.AttachmentBriefState;
  [fromAttachmentController.attachmentComboDataFeatureKey]: fromAttachmentController.AttachmentComboDataState;
  [fromAttachmentController.accidentPhaseAttachmentGridBriefFeatureKey]: fromAttachmentController.AccidentPhaseAttachmentGridBriefState;
  [fromAttachmentController.accidentPhaseAttachmentGridComboDataFeatureKey]: fromAttachmentController.AccidentPhaseAttachmentGridComboDataState;
  [fromPaymentController.paymentBriefFeatureKey]: fromPaymentController.PaymentBriefState;
  [fromPaymentController.paymentComboDataFeatureKey]: fromPaymentController.PaymentComboDataState;
  [fromIsDirty.isDirtyFeatureKey]: fromIsDirty.IsDirtyState;
  [fromFileURL.fileURLFeatureKey]: fromFileURL.FileURLState;
  [fromClaimController.claimBriefFeatureKey]: fromClaimController.ClaimBriefState;
  [fromClaimController.claimantBriefFeatureKey]: fromClaimController.ClaimantBriefState;
  [fromClaimController.claimServiceProviderBriefFeatureKey]: fromClaimController.ClaimServiceProviderBriefState;
  [fromClaimController.claimComboDataFeatureKey]: fromClaimController.ClaimComboDataState;
  [fromSelectedRow.selectedRowFeatureKey]: fromSelectedRow.SelectedRowState;
  [fromMedicalEvidenceController.medicalEvidenceBriefFeatureKey]: fromMedicalEvidenceController.MedicalEvidenceBriefState;
  [fromMedicalEvidenceController.medicalEvidenceComboDataFeatureKey]: fromMedicalEvidenceController.MedicalEvidenceComboDataState;
  [fromFraudCheckController.fraudCheckBriefFeatureKey]: fromFraudCheckController.FraudCheckBriefState;
  [fromFraudCheckController.fraudCheckComboDataFeatureKey]: fromFraudCheckController.FraudCheckComboDataState;
  [fromFraudCheckController.reviewApprovedBriefFeatureKey]: fromFraudCheckController.ReviewApprovedBriefState;
  [fromFraudCheckController.reviewApprovedComboDataFeatureKey]: fromFraudCheckController.ReviewApprovedComboDataState;
  [fromFraudCheckController.fraudCheckApprovedBriefFeatureKey]: fromFraudCheckController.FraudCheckApprovedBriefState;
  [fromFraudCheckController.investigationApprovalComboDataFeatureKey]: fromFraudCheckController.InvestigationApprovalComboDataState;
  [fromFraudCheckController.investigationApprovalBriefFeatureKey]: fromFraudCheckController.InvestigationApprovalBriefState;
  [fromIndependentReview.independentReviewBriefFeatureKey]: fromIndependentReview.IndependentReviewBriefState;
  [fromIndependentReview.independentReviewComboDataFeatureKey]: fromIndependentReview.IndependentReviewComboDataState;
  [fromIndependentReview.independentReviewClaimAuthorizationBriefFeatureKey]: fromIndependentReview.IndependentReviewClaimAuthorizationBriefState;
  [fromIndependentReview.independentReviewClaimAuthorizationComboDataFeatureKey]: fromIndependentReview.IndependentReviewClaimAuthorizationComboDataState;
  [fromIndependentReview.independentReviewApprovedBriefFeatureKey]: fromIndependentReview.IndependentReviewApprovedBriefState;
  [fromClaimOffer.claimOfferBriefFeatureKey]: fromClaimOffer.ClaimOfferBriefState;
  [fromClaimOffer.claimOfferComboDataFeatureKey]: fromClaimOffer.ClaimOfferComboDataState;
  [fromClaimOffer.claimOfferClaimAuthorizationBriefFeatureKey]: fromClaimOffer.ClaimOfferClaimAuthorizationState;
  [fromClaimOffer.claimOfferApprovedBriefFeatureKey]: fromClaimOffer.ClaimOfferApprovedBriefState;
  [fromThirdParty.ctpVirmFeatureKey]: fromThirdParty.CtpVirmState;
  [fromThirdParty.driverPictureFeatureKey]: fromThirdParty.DriverPictureState;
  [fromThirdParty.driverValidationFeatureKey]: fromThirdParty.DriverValidationState;
  [fromSearchAccidentController.searchAccidentComboDataFeatureKey]: fromSearchAccidentController.SearchAccidentComboDataState;
  [fromAccidentAppVehicleSection.accidentApplicationVehicleSectionComboDataFeatureKey]: fromAccidentAppVehicleSection.AccidentAppVehicleSectionComboData;
  [fromAccidentAppVehicleSection.accidentPhaseVehicleBriefFeatureKey]: fromAccidentAppVehicleSection.AccidentPhaseVehicleBrief;
  [fromAccidentAppVehicleSection.accidentPhaseVehicleComboDataFeatureKey]: fromAccidentAppVehicleSection.AccidentPhaseVehicleComboData;
  [fromAccidentAppVehicleSection.accidentPhaseVehicleSelectedRecordFeatureKey]: fromAccidentAppVehicleSection.AccidentPhaseVehicleSelectedRecord;
  [fromAccidentAppClaimSection.accidentApplicationClaimSectionComboDataFeatureKey]: fromAccidentAppClaimSection.AccidentAppClaimSectionComboData;
  [fromAccidentAppClaimSection.accidentPhaseClaimBriefFeatureKey]: fromAccidentAppClaimSection.AccidentPhaseClaimBrief;
  [fromAccidentAppClaimSection.accidentPhaseClaimSectionBriefFeatureKey]: fromAccidentAppClaimSection.AccidentPhaseClaimSectionBrief;
  [fromAccidentAppClaimSection.accidentPhaseClaimComboDataFeatureKey]: fromAccidentAppClaimSection.AccidentPhaseClaimComboData;
  [fromAccidentAppClaimSection.accidentPhaseClaimSelectedRecordFeatureKey]: fromAccidentAppClaimSection.AccidentPhaseClaimSelectedRecord;
  [fromAccidentAppClaimSection.accidentPhaseClaimServiceProviderBriefFeatureKey]: fromAccidentAppClaimSection.AccidentPhaseClaimServiceProviderBrief;
  [fromAccidentAppClaimSection.accidentPhaseClaimantBriefFeatureKey]: fromAccidentAppClaimSection.AccidentPhaseClaimantBrief;
  [fromAccidentAppDiarySection.accidentPhaseDiaryBriefFeatureKey]: fromAccidentAppDiarySection.AccidentPhaseDiaryBrief;
  [fromAccidentAppDiarySection.accidentPhaseDiarySelectedRecordFeatureKey]: fromAccidentAppDiarySection.AccidentPhaseDiarySelectedRecord;
  [fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogBriefFeatureKey]: fromAccidentAppAttachmentSection.AccidentPhaseAttachmentDialogBrief;
  [fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogComboDataFeatureKey]: fromAccidentAppAttachmentSection.AccidentPhaseAttachmentDialogComboData;
  [fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogSelectedRecordFeatureKey]: fromAccidentAppAttachmentSection.AccidentPhaseAttachmentDialogSelectedRecord;
  [fromPDFCode.pdfCodeFeatureKey]: fromPDFCode.PDFCodeState;
  [fromPDFCode.pdfLINVCodeFeatureKey]: fromPDFCode.PDFLINVCodeState;
  [fromPDFCode.accidentPDFCodeFeatureKey]: fromPDFCode.AccidentPDFCodeState;
  [fromPDFCode.claimCoverSheetPDFCodeFeatureKey]: fromPDFCode.ClaimCoverSheetPDFCodeState;
  [fromPDFCode.accidentCoverSheetPDFCodeFeatureKey]: fromPDFCode.AccidentCoverSheetPDFCodeState;
  [fromPDFCode.accidentCoverSheetPDFCodeFeatureKey]: fromPDFCode.AccidentCoverSheetPDFCodeState;
  [fromApplicationHeaderInfo.applicationHeaderInfoFeatureKey]: fromApplicationHeaderInfo.ApplicationHeaderInfoState;
}

/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Reducer Map░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
export const reducers: ActionReducerMap<GlobalState> = {
  [fromLogin.loginFeatureKey]: fromLogin.loginReducer,
  [fromLogin.isActiveFeatureKey]: fromLogin.isActiveReducer,
  [fromWorkBasket.getClaimWQSummaryFeatureKey]: fromWorkBasket.getClaimWQSummaryReducer,
  [fromWorkBasket.claimAccidentSummaryFeatureKey]: fromWorkBasket.claimAccidentSummaryReducer,
  [fromWorkBasket.claimTypeWQSummaryFeatureKey]: fromWorkBasket.claimTypeWQSummaryReducer,
  [claimComponent.claimSummaryFeatureKey]: claimComponent.claimSummaryReducer,
  [vehicleComponent.vehicleSummaryFeatureKey]: vehicleComponent.vehicleSummaryReducer,
  [searchAccident.accidentListSummaryFeatureKey]: searchAccident.accidentListSummaryReducer,
  [searchAccident.accidentFeatureKey]: searchAccident.reducerAccident,
  [fromRemoteServices.remoteServiceFeatureKey]: fromRemoteServices.remoteServiceReducer,
  [fromHttpFailure.httpFailureFeatureKey]: fromHttpFailure.httpFailureReducer,
  [fromActionLogs.actionLogsFeatureKey]: fromActionLogs.actionLogsReducer,
  [fromNotificationSuccess.notificationSuccessFeatureKey]: fromNotificationSuccess.notificationSuccessReducer,
  [fromNotificationFailure.notificationFailureFeatureKey]: fromNotificationFailure.notificationFailureReducer,
  [fromRouter.routerFeatureKey]: fromRouter.routerReducer,
  [fromWorkBasketController.workBasketComboDataFeatureKey]: fromWorkBasketController.workBasketComboDataReducer,
  [fromWorkBasketController.workBasketBriefFeatureKey]: fromWorkBasketController.workBasketBriefReducer,
  [fromWorkBasketController.assignComboDataFeatureKey]: fromWorkBasketController.assignComboDataReducer,
  [fromWorkBasketController.assignBriefFeatureKey]: fromWorkBasketController.assignBriefReducer,
  [fromEventsMapping.eventsMappingFeatureKey]: fromEventsMapping.eventsMappingReducer,
  [fromEventHandler.eventHandlerFeatureKey]: fromEventHandler.eventHandlerReducer,
  [fromFooter.footerFeatureKey]: fromFooter.footerReducer,
  [fromHeaderComboData.headerComboDataFeatureKey]: fromHeaderComboData.headerComboDataReducer,
  [fromHeaderComboData.headersFeatureKey]: fromHeaderComboData.headersReducer,
  [fromAccidentController.accidentBriefFeatureKey]: fromAccidentController.accidentBriefReducer,
  [fromAccidentController.accidentComboDataFeatureKey]: fromAccidentController.accidentComboDataReducer,
  [fromAccidentController.accidentApplicationAccidentBriefFeatureKey]: fromAccidentController.accidentApplicationAccidentBriefReducer,
  [fromAccidentController.accidentApplicationAccidentComboDataFeatureKey]: fromAccidentController.accidentApplicationAccidentComboDataReducer,
  [fromVehicleController.vehicleBriefFeatureKey]: fromVehicleController.vehicleBriefReducer,
  [fromVehicleController.vehicleComboDataFeatureKey]: fromVehicleController.vehicleComboDataReducer,
  [fromInitialAssessmentController.initialAssessmentBriefFeatureKey]: fromInitialAssessmentController.initialAssessmentBriefReducer,
  [fromInitialAssessmentController.initialAssessmentComboDataFeatureKey]: fromInitialAssessmentController.initialAssessmentComboDataReducer,
  [fromDiaryController.diaryBriefFeatureKey]: fromDiaryController.diaryBriefReducer,
  [fromAttachmentController.attachmentBriefFeatureKey]: fromAttachmentController.attachmentBriefReducer,
  [fromAttachmentController.attachmentComboDataFeatureKey]: fromAttachmentController.attachmentComboDataReducer,
  [fromAttachmentController.accidentPhaseAttachmentGridBriefFeatureKey]: fromAttachmentController.accidentPhaseAttachmentGridBriefReducer,
  [fromAttachmentController.accidentPhaseAttachmentGridComboDataFeatureKey]: fromAttachmentController.accidentPhaseAttachmentGridComboDataReducer,
  [fromPaymentController.paymentBriefFeatureKey]: fromPaymentController.paymentBriefReducer,
  [fromPaymentController.paymentComboDataFeatureKey]: fromPaymentController.paymentComboDataReducer,
  [fromIsDirty.isDirtyFeatureKey]: fromIsDirty.isDirtyReducer,
  [fromFileURL.fileURLFeatureKey]: fromFileURL.fileURLReducer,
  [fromClaimController.claimBriefFeatureKey]: fromClaimController.claimBriefReducer,
  [fromClaimController.claimantBriefFeatureKey]: fromClaimController.claimantBriefReducer,
  [fromClaimController.claimServiceProviderBriefFeatureKey]: fromClaimController.claimServiceProviderBriefReducer,
  [fromClaimController.claimComboDataFeatureKey]: fromClaimController.claimComboDataReducer,
  [fromSelectedRow.selectedRowFeatureKey]: fromSelectedRow.selectedRowReducer,
  [fromMedicalEvidenceController.medicalEvidenceBriefFeatureKey]: fromMedicalEvidenceController.medicalEvidenceBriefReducer,
  [fromMedicalEvidenceController.medicalEvidenceComboDataFeatureKey]: fromMedicalEvidenceController.medicalEvidenceComboDataReducer,
  [fromFraudCheckController.fraudCheckBriefFeatureKey]: fromFraudCheckController.fraudCheckBriefReducer,
  [fromFraudCheckController.fraudCheckComboDataFeatureKey]: fromFraudCheckController.fraudCheckComboDataReducer,
  [fromFraudCheckController.reviewApprovedBriefFeatureKey]: fromFraudCheckController.reviewApprovedBriefReducer,
  [fromFraudCheckController.reviewApprovedComboDataFeatureKey]: fromFraudCheckController.reviewApprovedComboDataReducer,
  [fromFraudCheckController.fraudCheckApprovedBriefFeatureKey]: fromFraudCheckController.fraudCheckApprovedBriefReducer,
  [fromFraudCheckController.investigationApprovalComboDataFeatureKey]: fromFraudCheckController.investigationApprovalComboDataReducer,
  [fromFraudCheckController.investigationApprovalBriefFeatureKey]: fromFraudCheckController.investigationApprovalBriefReducer,
  [fromIndependentReview.independentReviewBriefFeatureKey]: fromIndependentReview.independentReviewBriefReducer,
  [fromIndependentReview.independentReviewComboDataFeatureKey]: fromIndependentReview.independentReviewComboDataReducer,
  [fromIndependentReview.independentReviewClaimAuthorizationBriefFeatureKey]: fromIndependentReview.independentReviewClaimAuthorizationBriefReducer,
  [fromIndependentReview.independentReviewClaimAuthorizationComboDataFeatureKey]: fromIndependentReview.independentReviewClaimAuthorizationComboDataReducer,
  [fromIndependentReview.independentReviewApprovedBriefFeatureKey]: fromIndependentReview.independentReviewApprovedBriefReducer,
  [fromClaimOffer.claimOfferBriefFeatureKey]: fromClaimOffer.claimOfferBriefReducer,
  [fromClaimOffer.claimOfferComboDataFeatureKey]: fromClaimOffer.claimOfferComboDataReducer,
  [fromClaimOffer.claimOfferClaimAuthorizationBriefFeatureKey]: fromClaimOffer.claimOfferClaimAuthorizationBriefReducer,
  [fromClaimOffer.claimOfferApprovedBriefFeatureKey]: fromClaimOffer.claimOfferApprovedBriefReducer,
  [fromThirdParty.driverValidationFeatureKey]: fromThirdParty.driverValidationReducer,
  [fromThirdParty.driverPictureFeatureKey]: fromThirdParty.driverPictureReducer,
  [fromThirdParty.ctpVirmFeatureKey]: fromThirdParty.ctpVirmReducer,
  [fromSearchAccidentController.searchAccidentComboDataFeatureKey]: fromSearchAccidentController.searchAccidentComboDataReducer,
  [fromAccidentAppVehicleSection.accidentApplicationVehicleSectionComboDataFeatureKey]: fromAccidentAppVehicleSection.accidentApplicationVehicleSectionComboDataReducer,
  [fromAccidentAppVehicleSection.accidentPhaseVehicleBriefFeatureKey]: fromAccidentAppVehicleSection.accidentPhaseVehicleBriefReducer,
  [fromAccidentAppVehicleSection.accidentPhaseVehicleComboDataFeatureKey]: fromAccidentAppVehicleSection.accidentPhaseVehicleComboDataReducer,
  [fromAccidentAppVehicleSection.accidentPhaseVehicleSelectedRecordFeatureKey]: fromAccidentAppVehicleSection.accidentPhaseVehicleSelectedRecordReducer,
  [fromAccidentAppClaimSection.accidentApplicationClaimSectionComboDataFeatureKey]: fromAccidentAppClaimSection.accidentApplicationClaimSectionComboDataReducer,
  [fromAccidentAppClaimSection.accidentPhaseClaimBriefFeatureKey]: fromAccidentAppClaimSection.accidentPhaseClaimBriefReducer,
  [fromAccidentAppClaimSection.accidentPhaseClaimSectionBriefFeatureKey]: fromAccidentAppClaimSection.accidentPhaseClaimSectionBriefReducer,
  [fromAccidentAppClaimSection.accidentPhaseClaimComboDataFeatureKey]: fromAccidentAppClaimSection.accidentPhaseClaimComboDataReducer,
  [fromAccidentAppClaimSection.accidentPhaseClaimSelectedRecordFeatureKey]: fromAccidentAppClaimSection.accidentPhaseClaimSelectedRecordReducer,
  [fromAccidentAppClaimSection.accidentPhaseClaimServiceProviderBriefFeatureKey]: fromAccidentAppClaimSection.accidentPhaseClaimServiceProviderBriefReducer,
  [fromAccidentAppClaimSection.accidentPhaseClaimantBriefFeatureKey]: fromAccidentAppClaimSection.accidentPhaseClaimantBriefReducer,
  [fromAccidentAppDiarySection.accidentPhaseDiaryBriefFeatureKey]: fromAccidentAppDiarySection.accidentPhaseDiaryBriefReducer,
  [fromAccidentAppDiarySection.accidentPhaseDiarySelectedRecordFeatureKey]: fromAccidentAppDiarySection.accidentPhaseDiarySelectedRecordReducer,
  [fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogBriefFeatureKey]: fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogBriefReducer,
  [fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogComboDataFeatureKey]: fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogComboDataReducer,
  [fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogSelectedRecordFeatureKey]: fromAccidentAppAttachmentSection.accidentPhaseAttachmentDialogSelectedRecordReducer,
  [fromPDFCode.pdfCodeFeatureKey]: fromPDFCode.pdfCodeReducer,
  [fromPDFCode.pdfLINVCodeFeatureKey]: fromPDFCode.pdfLINVCodeReducer,
  [fromPDFCode.accidentPDFCodeFeatureKey]: fromPDFCode.accidentPDFCodeReducer,
  [fromPDFCode.claimCoverSheetPDFCodeFeatureKey]: fromPDFCode.claimCoverSheetPDFCodeReducer,
  [fromPDFCode.accidentCoverSheetPDFCodeFeatureKey]: fromPDFCode.accidentCoverSheetPDFCodeReducer,
  [fromApplicationHeaderInfo.applicationHeaderInfoFeatureKey]: fromApplicationHeaderInfo.applicationHeaderInfoReducer,
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];



