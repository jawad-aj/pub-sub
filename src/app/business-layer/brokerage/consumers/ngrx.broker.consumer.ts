/**
 * Created by Jawad  on 07/08/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {IConsumer} from '../../pubsub-broker/interfaces/IConsumer';
import {BrokerResponse} from '../../pubsub-broker/models/broker.response.model';
import {BrokerRemoteServicesStore} from '../ngrx-stubs/broker.remoteServices.store';
import {BrokerLoginStore} from '../ngrx-stubs/broker.login.store';
import {BrokerNotificationStore} from '../ngrx-stubs/broker.notification.store';
import {BrokerRouterStore} from '../ngrx-stubs/broker.router.store';
import {BrokerWorkBasketStore} from '../ngrx-stubs/broker.workBasket.store';
import {BrokerWorkbasketControllerStore} from '../ngrx-stubs/broker.workbasket.controller.store';
import {BrokerEventsMappingStore} from '../ngrx-stubs/broker.eventsMapping.store';
import {BrokerEventHandlerStore} from '../ngrx-stubs/broker.eventHandler.store';
import {BrokerFooterControllerStore} from '../ngrx-stubs/broker.footer.controller.store';
import {BrokerHeaderControllerStore} from '../ngrx-stubs/broker.header.controller.store';
import {BrokerAccidentControllerStore} from '../ngrx-stubs/broker.accident.controller.store';
import {BrokerApplicationStore} from '../ngrx-stubs/broker.application.store';
import {BrokerIsDirtyStore} from '../ngrx-stubs/broker.isDirty.store';
import {BrokerVehicleControllerStore} from '../ngrx-stubs/broker.vehicle.controller.store';
import {BrokerVehicleSummaryStore} from '../ngrx-stubs/broker.vehicle.store';
import {BrokerInitialAssessmentControllerStore} from '../ngrx-stubs/broker.initialAssessment.controller.store';
import {BrokerDiaryControllerStore} from '../ngrx-stubs/broker.diary.controller.store';
import {BrokerAttachmentControllerStore} from '../ngrx-stubs/broker.attachment.controller.store';
import {BrokerPaymentControllerStore} from '../ngrx-stubs/broker.payment.controller.store';
import {BrokerFileURLStore} from '../ngrx-stubs/broker.fileURL.store';
import {BrokerClaimControllerStore} from '../ngrx-stubs/broker.claim.controller.store';
import {BrokerPdfStore} from '../ngrx-stubs/broker.pdf.store';
import {BrokerMedicalEvidenceControllerStore} from '../ngrx-stubs/broker.medicaEvidence.controller.store';
import {BrokerFraudCheckControllerStore} from '../ngrx-stubs/broker.fraudCheck.controller.store';
import {BrokerIndependentReviewControllerStore} from '../ngrx-stubs/broker.independentReview.controller.store';
import {BrokerClaimOfferControllerStore} from '../ngrx-stubs/broker.claimOffer.controller.store';
import {BrokerSearchAccidentControllerStore} from '../ngrx-stubs/broker.searchAccident.controller.store';
import {BrokerAccidentPhaseVehicleSectionControllerStore} from '../ngrx-stubs/broker.accidentPhase.vehicleSection.controller.store';
import {BrokerAccidentPhaseClaimSectionControllerStore} from '../ngrx-stubs/broker.accidentPhase.claimSection.controller.store';
import {BrokerAccidentPhaseDiarySectionControllerStore} from '../ngrx-stubs/broker.accidentPhase.diarySection.controller.store';
import {BrokerAccidentPhaseAttachmentSectionControllerStore} from '../ngrx-stubs/broker.accidentPhase.attachmentSection.controller.store';
import {BrokerApplicationPrintControllerStore} from '../ngrx-stubs/broker.application.print.controller.store';
import {BrokerWebsocketServiceStore} from '../ngrx-stubs/broker.websocketService.store';
import {BrokerWebsocketMessagesStore} from '../ngrx-stubs/broker.websocketMessages.store';
import {BrokerThirdPartyStore} from '../ngrx-stubs/broker.thirdParty.store';
import {BrokerPaymentsControllerStore} from '../ngrx-stubs/system-admin/broker.payments.controller.store';
import {BrokerParametersControllerStore} from '../ngrx-stubs/system-admin/broker.parameters.controller.store';
import {BrokerServiceProviderControllerStore} from '../ngrx-stubs/system-admin/broker.serviceProvider.controller.store';
import {BrokerSystemUserControllerStore} from '../ngrx-stubs/system-admin/broker.systemUser.controller.store';
import {BrokerBulkAssignmentControllerStore} from '../ngrx-stubs/system-admin/broker.bulkAssignment.controller.store';
import {BrokerDynamicFormsControllerStore} from '../ngrx-stubs/system-admin/broker.dynamicForms.controller.store';
import {BrokerGenericRetrieveControllerStore} from '../ngrx-stubs/system-admin/broker.genericRetrieve.controller.store';

@Injectable()
export class NGRxBrokerConsumer implements IConsumer {

  constructor(
    private brokerRemoteServicesStore: BrokerRemoteServicesStore,
    private brokerLoginStore: BrokerLoginStore,
    private brokerNotificationStore: BrokerNotificationStore,
    private brokerRouterStore: BrokerRouterStore,
    private brokerWorkBasketStore: BrokerWorkBasketStore,
    private brokerWorkbasketControllerStore: BrokerWorkbasketControllerStore,
    private brokerEventsMappingStore: BrokerEventsMappingStore,
    private brokerEventHandlerStore: BrokerEventHandlerStore,
    private brokerFooterControllerStore: BrokerFooterControllerStore,
    private brokerHeaderControllerStore: BrokerHeaderControllerStore,
    private brokerAccidentControllerStore: BrokerAccidentControllerStore,
    private brokerApplicationStore: BrokerApplicationStore,
    private brokerIsDirtyStore: BrokerIsDirtyStore,
    private brokerVehicleControllerStore: BrokerVehicleControllerStore,
    private brokerVehicleSummaryStore: BrokerVehicleSummaryStore,
    private brokerInitialAssessmentControllerStore: BrokerInitialAssessmentControllerStore,
    private brokerDiaryControllerStore: BrokerDiaryControllerStore,
    private brokerAttachmentControllerStore: BrokerAttachmentControllerStore,
    private brokerPaymentControllerStore: BrokerPaymentControllerStore,
    private brokerFileURLStore: BrokerFileURLStore,
    private brokerClaimControllerStore: BrokerClaimControllerStore,
    private brokerPdfStore: BrokerPdfStore,
    private brokerMedicalEvidenceControllerStore: BrokerMedicalEvidenceControllerStore,
    private brokerFraudCheckControllerStore: BrokerFraudCheckControllerStore,
    private brokerIndependentReviewControllerStore: BrokerIndependentReviewControllerStore,
    private brokerClaimOfferControllerStore: BrokerClaimOfferControllerStore,
    private brokerSearchAccidentControllerStore: BrokerSearchAccidentControllerStore,
    private brokerAccidentPhaseVehicleSectionControllerStore: BrokerAccidentPhaseVehicleSectionControllerStore,
    private brokerAccidentPhaseClaimSectionControllerStore: BrokerAccidentPhaseClaimSectionControllerStore,
    private brokerAccidentPhaseDiarySectionControllerStore: BrokerAccidentPhaseDiarySectionControllerStore,
    private brokerAccidentPhaseAttachmentSectionControllerStore: BrokerAccidentPhaseAttachmentSectionControllerStore,
    private brokerApplicationPrintControllerStore: BrokerApplicationPrintControllerStore,
    private brokerWebsocketServiceStore: BrokerWebsocketServiceStore,
    private brokerWebsocketMessagesStore: BrokerWebsocketMessagesStore,
    private brokerThirdPartyStore: BrokerThirdPartyStore,
    private brokerPaymentsControllerStore: BrokerPaymentsControllerStore,
    private brokerParametersControllerStore: BrokerParametersControllerStore,
    private brokerServiceProviderControllerStore: BrokerServiceProviderControllerStore,
    private brokerSystemUserControllerStore: BrokerSystemUserControllerStore,
    private brokerBulkAssignmentControllerStore: BrokerBulkAssignmentControllerStore,
    private brokerDynamicFormsControllerStore: BrokerDynamicFormsControllerStore,
    private brokerGenericRetrieveControllerStore: BrokerGenericRetrieveControllerStore,
  ) {
  }


  public ReceiveBrokerAction(brokerAction: BrokerAction) {
    switch (brokerAction.brokerType) {
      case this.brokerRemoteServicesStore.brokerLabel:
        this.brokerRemoteServicesStore.dispatchAction(brokerAction);
        break;
      case this.brokerLoginStore.brokerLabel:
        this.brokerLoginStore.dispatchAction(brokerAction);
        break;
      case this.brokerRouterStore.brokerLabel:
        this.brokerRouterStore.dispatchAction(brokerAction);
        break;
      case this.brokerWorkBasketStore.brokerLabel:
        this.brokerWorkBasketStore.dispatchAction(brokerAction);
        break;
      case this.brokerWorkbasketControllerStore.brokerLabel:
        this.brokerWorkbasketControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerEventsMappingStore.brokerLabel:
        this.brokerEventsMappingStore.dispatchAction(brokerAction);
        break;
      case this.brokerEventHandlerStore.brokerLabel:
        this.brokerEventHandlerStore.dispatchAction(brokerAction);
        break;
      case this.brokerFooterControllerStore.brokerLabel:
        this.brokerFooterControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerHeaderControllerStore.brokerLabel:
        this.brokerHeaderControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerAccidentControllerStore.brokerLabel:
        this.brokerAccidentControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerApplicationStore.brokerLabel:
        this.brokerApplicationStore.dispatchAction(brokerAction);
        break;
      case this.brokerIsDirtyStore.brokerLabel:
        this.brokerIsDirtyStore.dispatchAction(brokerAction);
        break;
      case this.brokerVehicleControllerStore.brokerLabel:
        this.brokerVehicleControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerVehicleSummaryStore.brokerLabel:
        this.brokerVehicleSummaryStore.dispatchAction(brokerAction);
        break;
      case this.brokerInitialAssessmentControllerStore.brokerLabel:
        this.brokerInitialAssessmentControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerDiaryControllerStore.brokerLabel:
        this.brokerDiaryControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerAttachmentControllerStore.brokerLabel:
        this.brokerAttachmentControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerPaymentControllerStore.brokerLabel:
        this.brokerPaymentControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerFileURLStore.brokerLabel:
        this.brokerFileURLStore.dispatchAction(brokerAction);
        break;
      case this.brokerClaimControllerStore.brokerLabel:
        this.brokerClaimControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerPdfStore.brokerLabel:
        this.brokerPdfStore.dispatchAction(brokerAction);
        break;
      case this.brokerMedicalEvidenceControllerStore.brokerLabel:
        this.brokerMedicalEvidenceControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerFraudCheckControllerStore.brokerLabel:
        this.brokerFraudCheckControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerIndependentReviewControllerStore.brokerLabel:
        this.brokerIndependentReviewControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerClaimOfferControllerStore.brokerLabel:
        this.brokerClaimOfferControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerSearchAccidentControllerStore.brokerLabel:
        this.brokerSearchAccidentControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerAccidentPhaseVehicleSectionControllerStore.brokerLabel:
        this.brokerAccidentPhaseVehicleSectionControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerAccidentPhaseClaimSectionControllerStore.brokerLabel:
        this.brokerAccidentPhaseClaimSectionControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerAccidentPhaseDiarySectionControllerStore.brokerLabel:
        this.brokerAccidentPhaseDiarySectionControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerAccidentPhaseAttachmentSectionControllerStore.brokerLabel:
        this.brokerAccidentPhaseAttachmentSectionControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerApplicationPrintControllerStore.brokerLabel:
        this.brokerApplicationPrintControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerWebsocketServiceStore.brokerLabel:
        this.brokerWebsocketServiceStore.dispatchAction(brokerAction);
        break;
      case this.brokerWebsocketMessagesStore.brokerLabel:
        this.brokerWebsocketMessagesStore.dispatchAction(brokerAction);
        break;
      case this.brokerThirdPartyStore.brokerLabel:
        this.brokerThirdPartyStore.dispatchAction(brokerAction);
        break;
      case this.brokerPaymentsControllerStore.brokerLabel:
        this.brokerPaymentsControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerParametersControllerStore.brokerLabel:
        this.brokerParametersControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerServiceProviderControllerStore.brokerLabel:
        this.brokerServiceProviderControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerSystemUserControllerStore.brokerLabel:
        this.brokerSystemUserControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerBulkAssignmentControllerStore.brokerLabel:
        this.brokerBulkAssignmentControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerDynamicFormsControllerStore.brokerLabel:
        this.brokerDynamicFormsControllerStore.dispatchAction(brokerAction);
        break;
      case this.brokerGenericRetrieveControllerStore.brokerLabel:
        this.brokerGenericRetrieveControllerStore.dispatchAction(brokerAction);
        break;
    }
  }

  public ReceivedBrokerSelectorRequest(brokerType: string, props?: string): BrokerResponse {
    let brokerResponse = new BrokerResponse();
    switch (brokerType) {
      case this.brokerRemoteServicesStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerRemoteServicesStore.getComponentSupplies();
        break;
      case this.brokerLoginStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerLoginStore.getComponentSupplies();
        break;
      case this.brokerNotificationStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerNotificationStore.getComponentSupplies();
        break;
      case this.brokerRouterStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerRouterStore.getComponentSupplies();
        break;
      case this.brokerWorkBasketStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerWorkBasketStore.getComponentSupplies();
        break;
      case this.brokerWorkbasketControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerWorkbasketControllerStore.getComponentSupplies();
        break;
      case this.brokerEventsMappingStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerEventsMappingStore.getComponentSupplies();
        break;
      case this.brokerEventHandlerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerEventHandlerStore.getComponentSupplies();
        break;
      case this.brokerFooterControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerFooterControllerStore.getComponentSupplies();
        break;
      case this.brokerHeaderControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerHeaderControllerStore.getComponentSupplies();
        break;
      case this.brokerAccidentControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerAccidentControllerStore.getComponentSupplies();
        break;
      case this.brokerApplicationStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerApplicationStore.getComponentSupplies();
        break;
      case this.brokerIsDirtyStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerIsDirtyStore.getComponentSupplies();
        break;
      case this.brokerVehicleControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerVehicleControllerStore.getComponentSupplies();
        break;
      case this.brokerVehicleSummaryStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerVehicleSummaryStore.getComponentSupplies();
        break;
      case this.brokerInitialAssessmentControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerInitialAssessmentControllerStore.getComponentSupplies();
        break;
      case this.brokerDiaryControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerDiaryControllerStore.getComponentSupplies();
        break;
      case this.brokerAttachmentControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerAttachmentControllerStore.getComponentSupplies();
        break;
      case this.brokerPaymentControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerPaymentControllerStore.getComponentSupplies();
        break;
      case this.brokerFileURLStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerFileURLStore.getComponentSupplies();
        break;
      case this.brokerClaimControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerClaimControllerStore.getComponentSupplies();
        break;
      case this.brokerPdfStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerPdfStore.getComponentSupplies();
        break;
      case this.brokerMedicalEvidenceControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerMedicalEvidenceControllerStore.getComponentSupplies();
        break;
      case this.brokerFraudCheckControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerFraudCheckControllerStore.getComponentSupplies();
        break;
      case this.brokerIndependentReviewControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerIndependentReviewControllerStore.getComponentSupplies();
        break;
      case this.brokerClaimOfferControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerClaimOfferControllerStore.getComponentSupplies();
        break;
      case this.brokerSearchAccidentControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerSearchAccidentControllerStore.getComponentSupplies();
        break;
      case this.brokerAccidentPhaseVehicleSectionControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerAccidentPhaseVehicleSectionControllerStore.getComponentSupplies();
        break;
      case this.brokerAccidentPhaseClaimSectionControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerAccidentPhaseClaimSectionControllerStore.getComponentSupplies();
        break;
      case this.brokerAccidentPhaseDiarySectionControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerAccidentPhaseDiarySectionControllerStore.getComponentSupplies();
        break;
      case this.brokerAccidentPhaseAttachmentSectionControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerAccidentPhaseAttachmentSectionControllerStore.getComponentSupplies();
        break;
      case this.brokerApplicationPrintControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerApplicationPrintControllerStore.getComponentSupplies();
        break;
      case this.brokerThirdPartyStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerThirdPartyStore.getComponentSupplies();
        break;
      case this.brokerPaymentsControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerPaymentsControllerStore.getComponentSupplies();
        break;
      case this.brokerParametersControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerParametersControllerStore.getComponentSupplies();
        break;
      case this.brokerServiceProviderControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerServiceProviderControllerStore.getComponentSupplies();
        break;
      case this.brokerSystemUserControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerSystemUserControllerStore.getComponentSupplies();
        break;
      case this.brokerBulkAssignmentControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerBulkAssignmentControllerStore.getComponentSupplies();
        break;
      case this.brokerDynamicFormsControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerDynamicFormsControllerStore.getComponentSupplies();
        break;
      case this.brokerGenericRetrieveControllerStore.brokerLabel:
        brokerResponse.brokerRequested = this.brokerGenericRetrieveControllerStore.getComponentSupplies();
        break;
    }
    return brokerResponse;
  }
}
