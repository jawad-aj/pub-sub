import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainMenuController} from '../../view-layer/mainmenu/MainMenuController';
import {AccidentController} from '../../view-layer/accident/AccidentController';
import {ApplicationController} from '../../view-layer/application/ApplicationController';
import {ClaimController} from '../../view-layer/claim/ClaimController';
import {VehicleController} from '../../view-layer/vehicle/VehicleController';
import {DiaryController} from '../../view-layer/diary/DiaryController';
import {PaymentsController} from '../../view-layer/payments/PaymentsController';
import {AttachmentsController} from '../../view-layer/attachments/AttachmentsController';
import {QuantumAssessmentSmartController} from '../../smartComponents/quantum-smart-assessment/QuantumAssessmentSmartController';
import {MedicalEvidenceController} from '../../view-layer/medicalevidence/MedicalEvidenceController';
import {IndependentReviewController} from '../../view-layer/independentReview/IndependentReviewController';
import {FraudcheckComponent} from '../../view-layer/fraudcheck/FraudcheckController';
import {ClaimOfferController} from '../../view-layer/claimoffer/ClaimOfferController';
import {ClaimantDetailsController} from '../../view-layer/claimantdetails/ClaimantDetailsController';
import {InsuranceConsultantController} from '../../view-layer/insuranceconsultant/InsuranceConsultantController';
import {GuardianController} from '../../view-layer/guardian/GuardianController';
import {DependentDetailsController} from '../../view-layer/dependentdetails/DependentDetailsController';
import {ClaimServiceProviderController} from '../../view-layer/claimserviceprovider/ClaimServiceProviderController';
import {AddressController} from '../../view-layer/address/AddressController';
import {CommentsController} from '../../view-layer/comments/CommentsController';
import {VehicleDriverController} from '../../view-layer/vehicledriver/VehicleDriverController';
import {VehicleOwnerController} from '../../view-layer/vehicleowner/VehicleOwnerController';
import {AccidentSummaryController} from '../../view-layer/accidentsummary/AccidentSummaryController';
import {ClaimAuthorizationController} from '../../view-layer/claimauthorization/ClaimAuthorizationController';
import {InvestigationApprovalSubController} from '../../view-layer/investigationapprovalsubcomponent/InvestigationApprovalSubController';
import {HospitalController} from '../../view-layer/hospital/hospitalController';
import {ClaimOfferApprovalSubComponentController} from '../../view-layer/claimofferapprovalsubcomponent/ClaimOfferApprovalSubComponentController';
import {AccidentApplicationController} from '../../view-layer/accidentapplication/AccidentApplicationController';
import {VehicleSectionController} from '../../view-layer/vehiclesection/VehicleSectionController';
import {ClaimSectionController} from '../../view-layer/claimsection/ClaimSectionController';
import {SharedModule} from '../shared/shared.module';
import {ApplicationSmartComponent} from '../../smartComponents/application-smart/application-smart.component';
import {ApplicationRoutingModule} from './application-routing.module';
import {AccidentSmartComponent} from '../../smartComponents/accident-smart/accident-smart.component';
import {ClaimSmartComponent} from '../../smartComponents/claim-smart/claim-smart.component';
import {CanDeactivateGuard} from '../../business-layer/guard/can-deactivate.guard.';
import {VehicleSmartController} from '../../smartComponents/vehicle-smart/vehicleSmartController';
import {VehicleSummaryController} from '../../view-layer/vehiclesummary/VehicleSummaryController';
import {InitialAssessmentSmartController} from '../../smartComponents/initial-assessment-smart/initialAssessmentSmartController';
import {DiarySmartController} from '../../smartComponents/diary-smart/diarySmartController';
import {InitialAssessmentController} from '../../view-layer/initialassmentent/InitialAssmententController';
import {AttachmentSmartComponent} from '../../smartComponents/attachment-smart/attachment-smart.component';
import {UploadAttachmentsController} from '../../view-layer/uploadattachments/UploadAttachmentsController';
import {PaymentSmartComponent} from '../../smartComponents/payment-smart/payment-smart.component';
import {ClaimSummaryController} from '../../view-layer/claimsummary/ClaimSummaryController';
import {AcknowledgementLetterController} from '../../view-layer/acknowledgementletter/AcknowledgementLetterController';
import {MedicalEvidenceSmartController} from '../../smartComponents/medical-evidence-smart/medical-evidence-smart.controller';
import {FraudCheckSmartController} from '../../smartComponents/fraud-check-smart/fraud-check-smart.controller';
import {IndependentReviewSmartController} from '../../smartComponents/independent-review-smart/independent-review-smart.controller';
import {ClaimOfferSmartController} from '../../smartComponents/claim-offer-smart/claim-offer-smart.controller';
import {ApplicationPrintController} from '../../view-layer/applictionprint/ApplicationPrintController';
import {CoverSheetPDFController} from '../../view-layer/coversheetpdf/CoverSheetPDFController';
import {AccidentPhaseAccidentSmartComponent} from '../../smartComponents/accident-phase/accident-phase-accident-smart/accident-phase-accident-smart.component';
import {AccidentPhaseApplicationSmartComponent} from '../../smartComponents/accident-phase/accident-phase-application-smart/accident-phase-application-smart.component';
import {AccidentPhaseVehiclesSmartComponent} from '../../smartComponents/accident-phase/accident-phase-vehicles-smart/accident-phase-vehicles-smart.component';
import {AccidentPhaseClaimsSmartComponent} from '../../smartComponents/accident-phase/accident-phase-claims-smart/accident-phase-claims-smart.component';
import {AccidentPhaseDiarySmartComponent} from '../../smartComponents/accident-phase/accident-phase-diary-smart/accident-phase-diary-smart.component';
import {AccidentPhaseAttachmentSmartComponent} from '../../smartComponents/accident-phase/accident-phase-attachment-smart/accident-phase-attachment-smart.component';
import {ApplicationSmartDialogController} from '../../view-layer/applictionsmartdialog/ApplictionSmartDialogController';
import {AccidentPhaseVehicleSectionSmartComponent} from '../../smartComponents/accident-phase/accident-phase-vehicle-section-smart/accident-phase-vehicle-section-smart.component';
import {AccidentPhaseClaimSectionSmartComponent} from '../../smartComponents/accident-phase/accident-phase-claim-section-smart/accident-phase-claim-section-smart.component';
import {AccidentPhaseDiarySectionSmartComponent} from '../../smartComponents/accident-phase/accident-phase-diary-section-smart/accident-phase-diary-section-smart.component';
import {DiaryCommentController} from '../../view-layer/diarycomments/DiaryCommentController';
import { AccidentPhaseAttachmentSectionSmartComponent } from '../../smartComponents/accident-phase/accident-phase-attachment-section-smart/accident-phase-attachment-section-smart.component';
import {CanDeactivateAccidentGuard} from '../../business-layer/guard/can-deactivate-accident.guard.';
import { ApplicationPrintSmartComponent } from '../../smartComponents/application-print-smart/application-print-smart.component';
import { DriverPictureSmartComponent } from '../../smartComponents/third-party-smart/driver-picture-smart/driver-picture-smart.component';
import { DriverLicenseValidationSmartComponent } from '../../smartComponents/third-party-smart/driver-license-validation-smart/driver-license-validation-smart.component';
import { CtpValidationSmartComponent } from '../../smartComponents/third-party-smart/ctp-validation-smart/ctp-validation-smart.component';
import { DriverLicenseValidationComponent } from '../../view-layer/driver-license-validation/driver-license-validation.component';
import {CtpValidationComponent} from '../../view-layer/ctp-validation/ctp-validation.component';


@NgModule({
    declarations: [
        MainMenuController,
        AccidentController,
        ApplicationController,
        ClaimController,
        VehicleController,
        DiaryController,
        PaymentsController,
        AttachmentsController,
        MedicalEvidenceController,
        IndependentReviewController,
        FraudcheckComponent,
        ClaimOfferController,
        ClaimantDetailsController,
        GuardianController,
        DependentDetailsController,
        ClaimServiceProviderController,
        AddressController,
        CommentsController,
        VehicleDriverController,
        VehicleOwnerController,
        AccidentSummaryController,
        ClaimAuthorizationController,
        InvestigationApprovalSubController,
        HospitalController,
        ClaimOfferApprovalSubComponentController,
        AccidentApplicationController,
        VehicleSectionController,
        ClaimSectionController,
        ApplicationSmartComponent,
        AccidentSmartComponent,
        ClaimSmartComponent,
        VehicleSmartController,
        VehicleSummaryController,
        InitialAssessmentSmartController,
        DiarySmartController,
        InitialAssessmentController,
        AttachmentSmartComponent,
        UploadAttachmentsController,
        UploadAttachmentsController,
        PaymentSmartComponent,
        ClaimSummaryController,
        AcknowledgementLetterController,
        InsuranceConsultantController,
        QuantumAssessmentSmartController,
        MedicalEvidenceSmartController,
        FraudCheckSmartController,
        IndependentReviewSmartController,
        ClaimOfferSmartController,
        ApplicationPrintController,
        CoverSheetPDFController,
        AccidentPhaseAccidentSmartComponent,
        AccidentPhaseApplicationSmartComponent,
        AccidentPhaseVehiclesSmartComponent,
        AccidentPhaseClaimsSmartComponent,
        AccidentPhaseDiarySmartComponent,
        AccidentPhaseAttachmentSmartComponent,
        ApplicationSmartDialogController,
        AccidentPhaseVehicleSectionSmartComponent,
        AccidentPhaseClaimSectionSmartComponent,
        AccidentPhaseDiarySectionSmartComponent,
        DiaryCommentController,
        AccidentPhaseAttachmentSectionSmartComponent,
        ApplicationPrintSmartComponent,
        DriverPictureSmartComponent,
        DriverLicenseValidationSmartComponent,
        CtpValidationSmartComponent,
        DriverLicenseValidationComponent,
        CtpValidationComponent,

    ],
    imports: [
        CommonModule, SharedModule, ApplicationRoutingModule,],
    exports: [
        PaymentsController
    ],
    providers: [CanDeactivateGuard, CanDeactivateAccidentGuard]
})
export class ApplicationModule {
}
