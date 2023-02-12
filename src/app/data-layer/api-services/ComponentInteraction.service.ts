import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {LoginData} from '../../business-layer/models/LoginData';
import {ClaimAuthorization} from "../../business-layer/models/ClaimAuthorization";

@Injectable()
export class ComponentInteractionService {

  constructor() {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Login Data ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendLoginData = new Subject<LoginData>();
  LoginDataMessage$ = this.sendLoginData.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Claim Accident Summary ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendStoreUpdation = new Subject<boolean>();
  storeUpdationMessage$ = this.sendStoreUpdation.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Vehicle Data ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendVehicleData = new Subject<string>();
  vehicleDataMessage$ = this.sendVehicleData.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Address patch Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendAddress = new Subject<boolean>();
  sendAddressMessage$ = this.sendAddress.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Role Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendRole = new Subject<any>();
  sendRoleMessage$ = this.sendRole.asObservable();
  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Role Deceased Case Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendRoleDeceasedCase = new Subject<any>();
  sendRoleDeceasedCaseMessage$ = this.sendRoleDeceasedCase.asObservable();
  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Claim Handler Code Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendClaimHandlerCode = new Subject<any>();
  sendClaimHandlerCodeMessage$ = this.sendClaimHandlerCode.asObservable();
  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Dependant Details ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendDependantDetail = new Subject<boolean>();
  sendDependantDetailMessage$ = this.sendDependantDetail.asObservable();
  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Fraud Check message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendFraudCheckStatus = new Subject<any>();
  sendFraudCheckStatusMessage$ = this.sendFraudCheckStatus.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Investigation Approval message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendClaimAuthorization = new Subject<any>();
  sendClaimAuthorizationMessage$ = this.sendClaimAuthorization.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Claim Data ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendClaimData = new Subject<string>();
  claimDataMessage$ = this.sendClaimData.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Initial Assessment Data ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendInitialAssessmentCostAmountData = new Subject<number>();
  initialAssessmentCostAmountDataMessage$ = this.sendInitialAssessmentCostAmountData.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Initial Assessment  Curr Estimate message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendInitialAssessCurrAmount = new Subject<number>();
  initialAssessCurrAmountMessage$ = this.sendInitialAssessCurrAmount.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Initial Assessment  Curr Estimate message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendIndependentReviewActivation = new Subject<any>();
  independentReviewActivationMessage$ = this.sendIndependentReviewActivation.asObservable();

  /*░░░░░░░░░░░░░░░░░░░░░░ Subject Initial Assessment  Curr Estimate message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  private sendXslIndicator = new Subject<string>();
  xslIndicatorMessage$ = this.sendXslIndicator.asObservable();

  private sendFraudCheckPDFIndicator = new Subject<any>();
  fraudCheckPDFIndicatorMessage$ = this.sendFraudCheckPDFIndicator.asObservable();

  private sendBPCUpdation = new Subject<boolean>();
  bpcUpdationMessage$ = this.sendBPCUpdation.asObservable();

  private sendDiaryTitle = new Subject<any>();
  diaryTitleMessage$ = this.sendDiaryTitle.asObservable();

  private sendConditionallyPDFIconSwitch = new Subject<any>();
  conditionallyPDFIconSwitchMessage$ = this.sendConditionallyPDFIconSwitch.asObservable();

  //--------------------------------------------------------------------------------
  /*░░░░░░░░░░░░░░░░░░░░░░ Send LoginData Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendLoginDataMessage(data: LoginData) {
    this.sendLoginData.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Change Indicator Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendStoreUpdationMessage() {
    this.sendStoreUpdation.next();
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Change Indicator Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendBPCUpdationMessage(data: boolean) {
    this.sendBPCUpdation.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Address patch Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendAddressMessage() {
    this.sendAddress.next();
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Address patch Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendRoleMessage(data1, data2) {
    this.sendRole.next({data1, data2});
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Address patch Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendRoleDeceasedCaseMessage(data) {
    this.sendRoleDeceasedCase.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Address patch Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendClaimHandlerCodeMessage(data) {
    this.sendClaimHandlerCode.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Vehicle Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendVehicleDataMessage(data: string) {
    this.sendVehicleData.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send DependantDetail Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendDependantDetailMessage(data: boolean) {
    this.sendDependantDetail.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Fraud Check Status message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendFraudCheckStatusMessage(data: string, title: string) {
    this.sendFraudCheckStatus.next({data, title});
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Fraud Check Status message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendFraudCheckPDFMessage(data: string) {
    this.sendFraudCheckPDFIndicator.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send ClaimAuthorization message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendClaimAuthorizationMessage(data: ClaimAuthorization, title: string) {
    this.sendClaimAuthorization.next({data, title});
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Fraud Check Status message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendInitialAssessCurrAmountMessage(data: number) {
    this.sendInitialAssessCurrAmount.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Fraud Check Status message ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendIndependentReviewActivationMessage(data: boolean, title: string, totalAmountClaimOffer: number) {
    this.sendIndependentReviewActivation.next({data, title, totalAmountClaimOffer});
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Vehicle Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendClaimDataMessage(data: string) {
    this.sendClaimData.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send Initial Assessment Object ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendInitialAssessmentCostAmountDataMessage(data: number) {
    this.sendInitialAssessmentCostAmountData.next(data);
  }

  /*░░░░░░░░░░░░░░░░░░░░░░ Send XslIndicator ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  sendXslIndicatorMessage(data: string) {
    this.sendXslIndicator.next(data);
  }

  sendDiaryTitleMessage(title: string, days: number) {
    this.sendDiaryTitle.next({title, days});
  }

  sendConditionallyPDFIconSwitchMessage(title: string,hiddenIndicator: boolean) {
    this.sendConditionallyPDFIconSwitch.next({title,hiddenIndicator});
  }
}
