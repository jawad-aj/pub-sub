import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpWebService} from './data-layer/api-services/HttpServices';
import {AppComponent} from './app.component';
import {DatePipe, DecimalPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppRoutingModule} from './app-routing.module';
import {HeaderController} from './view-layer/header/HeaderController';
import {FooterController} from './view-layer/footer/FooterController';
import {reducers} from './data-layer/store/reducers';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoginEffects} from './data-layer/store/effects/login.effects';
import {ChangePasswordEffects} from './data-layer/store/effects/changePassword.effects';
import {WorkBasketEffects} from './data-layer/store/effects/workBasket.effects';
import {DialogController} from './view-layer/dialog/DialogController';
import {ErrorController} from './view-layer/error/ErrorController';
import {ErrorHandlingService} from './data-layer/api-services/ErrorHandlingService';
import {ClaimEffects} from './data-layer/store/effects/claim.effect';
import {
  claimAccidentSummaryMetaReducer,
  claimWQSummaryMetaReducer,
} from './data-layer/store/reducers/workBasket.reducer';
import {VehicleEffects} from './data-layer/store/effects/vehicle.effects';
import {AttachmentEffect} from './data-layer/store/effects/attachment.effect';
import {GeneratePDFEffects} from './data-layer/store/effects/generatePDF.effects';
import {SearchAccidentEffects} from './data-layer/store/effects/searchAccident.effects';
import {accidentListSummaryMetaReducer, accidentMetaReducer} from './data-layer/store/reducers/searchAccident.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RemoteServiceEffects} from './data-layer/store/effects/remote-service.effects';
import {RemoteDataService} from './data-layer/api-services/remote-data.service';
import {WorkBasketService} from './data-layer/api-services/work-basket.service';
import {ClaimService} from './data-layer/api-services/claim.service';
import {GeneratePdfService} from './data-layer/api-services/generate-pdf.service';
import {SearchAccidentService} from './data-layer/api-services/search-accident.service';
import {ComponentInteractionService} from './data-layer/api-services/ComponentInteraction.service';
import {ChangePasswordService} from './data-layer/api-services/change-password.service';
import {VehicleService} from './data-layer/api-services/vehicle.service';
import {LoginService} from './data-layer/api-services/login.service';
import {AttachmentService} from './data-layer/api-services/attachment.service';
import {HeaderUtil} from './data-layer/api-services/util/header.util';
import {ServicesUtil} from './data-layer/api-services/util/services.util';
import {NGRxBrokerRegistrationService} from './business-layer/brokerage/registries/ngrx.broker.registration.service';
import {NGRxBrokerConsumer} from './business-layer/brokerage/consumers/ngrx.broker.consumer';
import {BrokerPublisher} from './business-layer/pubsub-broker/outlet/broker.publisher';
import {BrokerDispatcherService} from './business-layer/pubsub-broker/services/broker.dispatcher.service';
import {BrokerActionBuilder} from './business-layer/pubsub-broker/services/broker.action.builder';
import {BrokerHttpFailureStore} from './business-layer/brokerage/ngrx-stubs/broker.httpFailure.store';
import {BrokerActionLogStore} from './business-layer/brokerage/ngrx-stubs/broker.actionLog.store';
import {BrokerLoginStore} from './business-layer/brokerage/ngrx-stubs/broker.login.store';
import {BrokerNotificationStore} from './business-layer/brokerage/ngrx-stubs/broker.notification.store';
import {BrokerRemoteServicesStore} from './business-layer/brokerage/ngrx-stubs/broker.remoteServices.store';
import {BrokerVehicleSummaryStore} from './business-layer/brokerage/ngrx-stubs/broker.vehicle.store';
import {BrokerWorkBasketStore} from './business-layer/brokerage/ngrx-stubs/broker.workBasket.store';
import {SharedModule} from './modules/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotificationUtil} from './data-layer/api-services/util/NotificationUtil';
import {StoreService} from './business-layer/services/store.service';
import {BrokerRouterStore} from './business-layer/brokerage/ngrx-stubs/broker.router.store';
import {LoginDataService} from './business-layer/services/login-data.service';
import {RemoteService} from './business-layer/services/remote-services.service';
import {WorkBasketControllerService} from './data-layer/api-services/work-basket-controller.service';
import {WorkBasketSmartService} from './smartComponents/workbasket-smart/workBasketSmart.service';
import {BrokerWorkbasketControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.workbasket.controller.store';
import {EventsMappingEffects} from './data-layer/store/effects/events-mapping.effects';
import {BrokerEventsMappingStore} from './business-layer/brokerage/ngrx-stubs/broker.eventsMapping.store';
import {EventsMappingEffectService} from './data-layer/api-services/events-mapping-effect.service';
import {EventsMappingService} from './business-layer/services/events-mapping.service';
import {BrokerEventHandlerStore} from './business-layer/brokerage/ngrx-stubs/broker.eventHandler.store';
import {StreamHandlerService} from './business-layer/services/stream-handler.service';
import {WorkBasketControllerEffects} from './data-layer/store/effects/workBasketController.effects';
import {FooterEffects} from './data-layer/store/effects/footer.effects';
import {FooterSmartController} from './smartComponents/footer-smart/footerSmartController';
import {BrokerFooterControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.footer.controller.store';
import {FooterService} from './data-layer/api-services/footer.service';
import {HeaderSmartController} from './smartComponents/headersmart/headerSmartController';
import {HeaderControllerEffects} from './data-layer/store/effects/header-controller.effects';
import {HeaderControllerService} from './data-layer/api-services/header-controller.service';
import {BrokerHeaderControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.header.controller.store';
import {AccidentControllerEffects} from './data-layer/store/effects/accident-controller.effects';
import {BrokerAccidentControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.accident.controller.store';
import {AccidentControllerService} from './data-layer/api-services/accident-controller.service';
import {ApplicationEffects} from './data-layer/store/effects/application.effects';
import {ApplicationService} from './data-layer/api-services/application.service';
import {BrokerApplicationStore} from './business-layer/brokerage/ngrx-stubs/broker.application.store';
import {BrokerIsDirtyStore} from './business-layer/brokerage/ngrx-stubs/broker.isDirty.store';
import {IsDirtyService} from './business-layer/services/isDirty.service';
import {VehicleControllerEffects} from './data-layer/store/effects/vehicle-controller.effects';
import {BrokerVehicleControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.vehicle.controller.store';
import {VehicleControllerService} from './data-layer/api-services/vehicle-controller.service';
import {InitialAssessmentControllerEffects} from './data-layer/store/effects/initial-assessment-controller.effects';
import {BrokerInitialAssessmentControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.initialAssessment.controller.store';
import {InitialAssessmentControllerService} from './data-layer/api-services/initial-assessment-controller.service';
import {DiaryControllerEffects} from './data-layer/store/effects/diary-controller.effects';
import {BrokerDiaryControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.diary.controller.store';
import {DiaryControllerService} from './data-layer/api-services/diary-controller.service';
import {AttachmentControllerEffects} from './data-layer/store/effects/attachment-controller.effects';
import {BrokerAttachmentControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.attachment.controller.store';
import {AttachmentControllerService} from './data-layer/api-services/attachment-controller.service';
import {PaymentControllerEffects} from './data-layer/store/effects/payment-controller.effects';
import {PaymentControllerService} from './data-layer/api-services/payment-controller.service';
import {BrokerPaymentControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.payment.controller.store';
import {BrokerFileURLStore} from './business-layer/brokerage/ngrx-stubs/broker.fileURL.store';
import {BrokerPdfStore} from './business-layer/brokerage/ngrx-stubs/broker.pdf.store';
import {BrokerClaimControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.claim.controller.store';
import {ClaimControllerService} from './data-layer/api-services/claim-controller.service';
import {SelectedRowService} from './data-layer/api-services/selected-row.service';
import {SelectedRowEffects} from './data-layer/store/effects/selected-row.effects';
import {ClaimAccidentSummaryService} from './business-layer/services/claimAccidentSummary.service';
import {ClaimControllerEffects} from './data-layer/store/effects/claim-controller.effects';
import {SelectedRowDataService} from './business-layer/services/selected-row.service';
import {ClaimSummaryService} from './business-layer/services/claim-summary.service';
import {VehicleSummaryService} from './business-layer/services/vehicle-summary.service';
import {MedicalEvidenceControllerEffects} from './data-layer/store/effects/medical-evidence-controller.effects';
import {BrokerMedicalEvidenceControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.medicaEvidence.controller.store';
import {MedicalEvidenceControllerService} from './data-layer/api-services/medical-evidence-controller.service';
import {FraudCheckControllerEffects} from './data-layer/store/effects/fraud-check-controller.effects';
import {FraudCheckControllerService} from './data-layer/api-services/fraud-check-controller.service';
import {BrokerFraudCheckControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.fraudCheck.controller.store';
import {IndependentReviewControllerEffects} from './data-layer/store/effects/independent-review-controller.effects';
import {BrokerIndependentReviewControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.independentReview.controller.store';
import {IndependentReviewControllerService} from './data-layer/api-services/independent-review-controller.service';
import {ClaimOfferControllerEffects} from './data-layer/store/effects/claim-offer-controller.effects';
import {BrokerClaimOfferControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.claimOffer.controller.store';
import {ClaimOfferControllerService} from './data-layer/api-services/claim-offer-controller.service';
import {ThirdPartyEffects} from './data-layer/store/effects/third-party.effects';
import {ThirdPartyService} from './data-layer/api-services/third-party.service';
import {SearchAccidentControllerEffects} from './data-layer/store/effects/search-accident-controller.effects';
import {BrokerSearchAccidentControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.searchAccident.controller.store';
import {SearchAccidentControllerService} from './data-layer/api-services/search-accident-controller.service';
import {HeaderDataService} from './business-layer/services/HeaderData.service';
import {AccidentService} from './business-layer/services/accident.service';
import {AccidentPhaseVehicleSectionEffects} from './data-layer/store/effects/accident-phase-vehicle-section.effects';
import {BrokerAccidentPhaseVehicleSectionControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.accidentPhase.vehicleSection.controller.store';
import {VehicleSectionControllerService} from './data-layer/api-services/vehicle-section-controller.service';
import {AccidentPhaseClaimSectionEffects} from './data-layer/store/effects/accident-phase-claim-section.effects';
import {BrokerAccidentPhaseClaimSectionControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.accidentPhase.claimSection.controller.store';
import {ClaimSectionControllerService} from './data-layer/api-services/claim-section-controller.service';
import {AccidentPhaseDiarySectionEffects} from './data-layer/store/effects/accident-phase-diary-section.effects';
import {DiarySectionControllerService} from './data-layer/api-services/diary-section-controller.service';
import {BrokerAccidentPhaseDiarySectionControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.accidentPhase.diarySection.controller.store';
import {AccidentPhaseAttachmentSectionEffects} from './data-layer/store/effects/accident-phase-attachment-section.effects';
import {BrokerAccidentPhaseAttachmentSectionControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.accidentPhase.attachmentSection.controller.store';
import {AttachmentSectionControllerService} from './data-layer/api-services/attachment-section-controller.service';
import {DialogService} from './business-layer/services/Dialog.service';
import {LogoutCanDeactivateGuard} from './business-layer/guard/logout-can-deactivate.guard.';
import {ClaimDisableUtil} from './data-layer/api-services/util/ClaimDisableUtil';
import {BrokerApplicationPrintControllerStore} from './business-layer/brokerage/ngrx-stubs/broker.application.print.controller.store';
import {PdfCodeService} from './business-layer/services/pdf-code.service';
import {AccidentPdfCodeService} from './business-layer/services/accident-pdf-code.service';
import {ClaimCoversheetPdfCodeService} from './business-layer/services/claim-coversheet-pdf-code.service';
import {AccidentCoversheetPdfCodeService} from './business-layer/services/accident-coversheet-pdf-code.service';
import {WebsocketConnectEffects} from './data-layer/store/effects/websocket-connect.effects';
import {WebsocketMessagesEffects} from './data-layer/store/effects/websocket-messages.effects';
import {WebsocketUtil} from './business-layer/services/WebsocketUtil';
import {WebsocketMessagesService} from './business-layer/services/WebsocketMessages.service';
import {WebsocketHandlerService} from './business-layer/services/WebsocketHandler.service';
import {WebsocketConnectService} from './business-layer/services/websocket-connect.service';
import {BrokerWebsocketMessagesStore} from './business-layer/brokerage/ngrx-stubs/broker.websocketMessages.store';
import {BrokerWebsocketServiceStore} from './business-layer/brokerage/ngrx-stubs/broker.websocketService.store';
import {BrokerThirdPartyStore} from './business-layer/brokerage/ngrx-stubs/broker.thirdParty.store';
import {WSContextUtilService} from './business-layer/services/WSContextUtil.service';
import {LINVPdfCodeService} from './business-layer/services/linv-pdf-code.service';
import {FooterStatusService} from './business-layer/services/footerStatus.service';
import {BrokerPaymentsControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.payments.controller.store';
import {BrokerParametersControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.parameters.controller.store';
import {BrokerServiceProviderControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.serviceProvider.controller.store';
import {BrokerSystemUserControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.systemUser.controller.store';
import {BrokerBulkAssignmentControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.bulkAssignment.controller.store';
import {DialogUtil} from './business-layer/services/DialogUtil';
import {BrokerDynamicFormsControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.dynamicForms.controller.store';
import {DynamicFormDataService} from './business-layer/services/dynamic-form-data.service';
import {SystemAdminPaymentFilterService} from './business-layer/services/SystemAdmin-PaymentFilter.service';
import {BrokerGenericRetrieveControllerStore} from './business-layer/brokerage/ngrx-stubs/system-admin/broker.genericRetrieve.controller.store';
import {SystemAdminGenericPayloadService} from './business-layer/services/SystemAdmin-GenericPayload.service';
import {NgIdleService} from './business-layer/services/NgIdle.service';
import {IsActiveService} from './business-layer/services/isActive.service';
import {IdleTimeDialogComponent} from './view-layer/idle-time-dialog/idle-time-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderController,
    ErrorController,
    FooterController,
    FooterSmartController,
    HeaderSmartController,
    IdleTimeDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers: [claimWQSummaryMetaReducer, accidentListSummaryMetaReducer, accidentMetaReducer, claimAccidentSummaryMetaReducer],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([WebsocketMessagesEffects, WebsocketConnectEffects, LoginEffects, ChangePasswordEffects, WorkBasketEffects, ClaimEffects, VehicleEffects, AttachmentEffect,
      GeneratePDFEffects, SearchAccidentEffects, RemoteServiceEffects, EventsMappingEffects, WorkBasketControllerEffects, FooterEffects,
      HeaderControllerEffects, AccidentControllerEffects, ApplicationEffects, VehicleControllerEffects, InitialAssessmentControllerEffects,
      DiaryControllerEffects, AttachmentControllerEffects, PaymentControllerEffects, ClaimControllerEffects, SelectedRowEffects,
      MedicalEvidenceControllerEffects, FraudCheckControllerEffects, IndependentReviewControllerEffects, ClaimOfferControllerEffects, ThirdPartyEffects,
      SearchAccidentControllerEffects, AccidentPhaseVehicleSectionEffects, AccidentPhaseClaimSectionEffects, AccidentPhaseDiarySectionEffects, AccidentPhaseAttachmentSectionEffects
    ]),
  ],
  entryComponents: [ErrorController, DialogController, IdleTimeDialogComponent],
  providers: [WSContextUtilService, HttpWebService, MatDatepickerModule, DatePipe, DecimalPipe, RemoteDataService,
    WorkBasketService, VehicleService, SearchAccidentService, LoginService, GeneratePdfService,
    ComponentInteractionService, ClaimService, ChangePasswordService, AttachmentService, HeaderUtil, ServicesUtil,
    BrokerPublisher, NGRxBrokerConsumer, NGRxBrokerRegistrationService, BrokerActionBuilder, BrokerDispatcherService,
    BrokerRemoteServicesStore, BrokerLoginStore, BrokerActionLogStore, BrokerHttpFailureStore, BrokerNotificationStore,
    BrokerVehicleSummaryStore, BrokerWorkBasketStore, BrokerWorkbasketControllerStore, WorkBasketSmartService, WorkBasketControllerService, StreamHandlerService,
    NotificationUtil, StoreService, BrokerRouterStore, LoginDataService, RemoteService, EventsMappingService, BrokerEventsMappingStore, EventsMappingEffectService, BrokerEventHandlerStore,
    BrokerFooterControllerStore, FooterService, HeaderControllerService, BrokerHeaderControllerStore, BrokerAccidentControllerStore, AccidentControllerService,
    ApplicationService, BrokerApplicationStore, BrokerIsDirtyStore, IsDirtyService, BrokerVehicleControllerStore, VehicleControllerService, BrokerInitialAssessmentControllerStore, InitialAssessmentControllerService,
    BrokerDiaryControllerStore, DiaryControllerService, BrokerAttachmentControllerStore, AttachmentControllerService, PaymentControllerService, BrokerPaymentControllerStore, BrokerFileURLStore, BrokerClaimControllerStore,
    ClaimControllerService, SelectedRowService, SelectedRowDataService, ClaimAccidentSummaryService, BrokerPdfStore, ClaimSummaryService, VehicleSummaryService, BrokerMedicalEvidenceControllerStore, MedicalEvidenceControllerService,
    BrokerFraudCheckControllerStore, FraudCheckControllerService, BrokerIndependentReviewControllerStore, IndependentReviewControllerService, BrokerClaimOfferControllerStore, ClaimOfferControllerService, ThirdPartyService,
    BrokerSearchAccidentControllerStore, SearchAccidentControllerService, HeaderDataService, AccidentService, BrokerAccidentPhaseVehicleSectionControllerStore, VehicleSectionControllerService, BrokerAccidentPhaseClaimSectionControllerStore,
    ClaimSectionControllerService, BrokerAccidentPhaseDiarySectionControllerStore, DiarySectionControllerService, BrokerAccidentPhaseAttachmentSectionControllerStore, AttachmentSectionControllerService, DialogService, LogoutCanDeactivateGuard,
    ClaimDisableUtil, BrokerApplicationPrintControllerStore, WebsocketHandlerService, WebsocketUtil, BrokerWebsocketServiceStore, BrokerWebsocketMessagesStore, WebsocketMessagesService, WebsocketConnectService,
    PdfCodeService, AccidentPdfCodeService, ClaimCoversheetPdfCodeService, AccidentCoversheetPdfCodeService, BrokerThirdPartyStore, LINVPdfCodeService, FooterStatusService, BrokerPaymentsControllerStore, BrokerParametersControllerStore, NgIdleService, IsActiveService,
    BrokerServiceProviderControllerStore, BrokerSystemUserControllerStore, BrokerBulkAssignmentControllerStore, DialogUtil, BrokerDynamicFormsControllerStore, BrokerGenericRetrieveControllerStore, DynamicFormDataService, SystemAdminGenericPayloadService, SystemAdminPaymentFilterService,
    {provide: ErrorHandler, useClass: ErrorHandlingService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
