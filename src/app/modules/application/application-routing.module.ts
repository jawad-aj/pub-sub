import {ClaimSmartComponent} from '../../smartComponents/claim-smart/claim-smart.component';
import {ApplicationSmartComponent} from '../../smartComponents/application-smart/application-smart.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AccidentSmartComponent} from '../../smartComponents/accident-smart/accident-smart.component';
import {CanDeactivateGuard} from '../../business-layer/guard/can-deactivate.guard.';
import {VehicleSmartController} from '../../smartComponents/vehicle-smart/vehicleSmartController';
import {InitialAssessmentSmartController} from '../../smartComponents/initial-assessment-smart/initialAssessmentSmartController';
import {DiarySmartController} from '../../smartComponents/diary-smart/diarySmartController';
import {AttachmentSmartComponent} from '../../smartComponents/attachment-smart/attachment-smart.component';
import {PaymentSmartComponent} from '../../smartComponents/payment-smart/payment-smart.component';
import {QuantumAssessmentSmartController} from '../../smartComponents/quantum-smart-assessment/QuantumAssessmentSmartController';
import {MedicalEvidenceSmartController} from '../../smartComponents/medical-evidence-smart/medical-evidence-smart.controller';
import {FraudCheckSmartController} from '../../smartComponents/fraud-check-smart/fraud-check-smart.controller';
import {IndependentReviewSmartController} from '../../smartComponents/independent-review-smart/independent-review-smart.controller';
import {ClaimOfferSmartController} from '../../smartComponents/claim-offer-smart/claim-offer-smart.controller';
import {AccidentPhaseApplicationSmartComponent} from '../../smartComponents/accident-phase/accident-phase-application-smart/accident-phase-application-smart.component';
import {AccidentPhaseAccidentSmartComponent} from '../../smartComponents/accident-phase/accident-phase-accident-smart/accident-phase-accident-smart.component';
import {AccidentPhaseVehiclesSmartComponent} from '../../smartComponents/accident-phase/accident-phase-vehicles-smart/accident-phase-vehicles-smart.component';
import {AccidentPhaseClaimsSmartComponent} from '../../smartComponents/accident-phase/accident-phase-claims-smart/accident-phase-claims-smart.component';
import {AccidentPhaseDiarySmartComponent} from '../../smartComponents/accident-phase/accident-phase-diary-smart/accident-phase-diary-smart.component';
import {AccidentPhaseAttachmentSmartComponent} from '../../smartComponents/accident-phase/accident-phase-attachment-smart/accident-phase-attachment-smart.component';
import {CanDeactivateAccidentGuard} from '../../business-layer/guard/can-deactivate-accident.guard.';
import {ApplicationPrintSmartComponent} from '../../smartComponents/application-print-smart/application-print-smart.component';

const routes: Routes = [
  {
    path: '', component: ApplicationSmartComponent, canDeactivate: [CanDeactivateGuard],
    children: [
      {path: 'accident', component: AccidentSmartComponent},
      {path: 'claim', component: ClaimSmartComponent},
      {path: 'vehicle', component: VehicleSmartController},
      {path: 'initialAssessment', component: InitialAssessmentSmartController},
      {
        path: 'quantumAssessment', component: QuantumAssessmentSmartController,
        children: [
          {path: 'medicalEvidence', component: MedicalEvidenceSmartController},
          {path: 'fraudCheck', component: FraudCheckSmartController},
          {path: 'independentReview', component: IndependentReviewSmartController},
          {path: 'claimOffer', component: ClaimOfferSmartController},
        ]
      },
      {path: 'diary', component: DiarySmartController},
      {path: 'payment', component: PaymentSmartComponent},
      {path: 'attachment', component: AttachmentSmartComponent},
      {path: 'print', component: ApplicationPrintSmartComponent},
    ]
  },
  {
    path: 'accidentApplication', component: AccidentPhaseApplicationSmartComponent, canDeactivate: [CanDeactivateAccidentGuard],
    children: [
      {path: 'accident', component: AccidentPhaseAccidentSmartComponent},
      {path: 'vehicle', component: AccidentPhaseVehiclesSmartComponent},
      {path: 'claim', component: AccidentPhaseClaimsSmartComponent},
      {path: 'diary', component: AccidentPhaseDiarySmartComponent},
      {path: 'attachment', component: AccidentPhaseAttachmentSmartComponent},
      {path: 'print', component: ApplicationPrintSmartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {
}
