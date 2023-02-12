/**
 * Created by Jawad on 11/4/2016.
 */

import {CompanyParameter} from '../../../business-layer/models/CompanyParam';
import {LoginData} from '../../../business-layer/models/LoginData';
import {ClaimComboData} from '../../../business-layer/models/ClaimComboData';
import {AccidentComboData} from '../../../business-layer/models/AccidentComboData';
import {FraudCheckComboData} from '../../../business-layer/models/FraudCheckComboData';
import {InitialAssessmentComboData} from '../../../business-layer/models/InitialAssessmentComboData';
import {AssignComboData} from '../../../business-layer/models/assignComboData';
import {ClaimOfferComboData} from '../../../business-layer/models/ClaimOfferComboData';
import {MedicalEvidenceComboData} from '../../../business-layer/models/MedicalEvidenceComboDta';
import {ServiceProvider} from '../../../business-layer/models/ServiceProvider';
import {ClaimAuthorizationComboData} from '../../../business-layer/models/ClaimAuthorizationComboData';
import {InvestigationApprovalComboData} from '../../../business-layer/models/InvestigationApprovalComboData';
import {Lookup} from '../../../business-layer/models/Lookup';
import {CommentsComboData} from '../../../business-layer/models/CommentsComboData';
import {ClaimServiceProviderComboData} from '../../../business-layer/models/ClaimServiceProviderComboData';
import {AddressComboData} from '../../../business-layer/models/AddressComboData';
import {PaymentComboData} from '../../../business-layer/models/PaymentComboData';
import {AttachmentComboData} from '../../../business-layer/models/AttachmentComboData';
import {WorkBasketComboData} from '../../../business-layer/models/WorkBasketComboData';
import {IndependentReviewComboData} from '../../../business-layer/models/IndependentReviewComboData';
import {SearchAccidentComboData} from '../../../business-layer/models/SearchAccidentComboData';
import {HeaderComboData} from '../../../business-layer/models/HeaderComboData';
import {MenuHeader} from '../../../business-layer/models/MenuHeader';
import {VehicleSmartComboData} from '../../../business-layer/models/VehicleSmartComboData';
import {ClaimSmartComboData} from '../../../business-layer/models/ClaimSmartComboData';
import {HeaderMenu} from '../../../business-layer/models/headers/HeaderMenu';
import {VehicleSectionComboData} from '../../../business-layer/models/comboData/VehicleSectionComboData';
import {ClaimSectionComboData} from '../../../business-layer/models/comboData/ClaimSectionComboData';
import {LookupNumberModel} from '../../../business-layer/models/LookupNumberModel';


export class CompanyParameterUtil {

  constructor() {
  }


  // *****************************************Return Company Parameter object******************************************
  public static getCompanyParametersObject(category: string, group: string, companyParameter?: CompanyParameter[]): CompanyParameter[] {
    const companyParameters: CompanyParameter[] = companyParameter;
    const dp: CompanyParameter[] = Array();
    for (let i = 0; i < companyParameters.length; i++) {
      if (companyParameters[i].category == category && companyParameters[i].group == group) {
        const cp: CompanyParameter = companyParameters[i] as CompanyParameter;
        dp.push(cp);
      }
    }
    return dp;
  }


  // *****************************************Return Service Provider object******************************************
  public static getServiceProviderArray(serviceProviderType: string, serviceProvider?: ServiceProvider[]): ServiceProvider[] {
    const serviceProviders: ServiceProvider[] = serviceProvider;
    const dp: ServiceProvider[] = Array();
    for (let i = 0; i < serviceProviders.length; i++) {
      if (serviceProviders[i].serviceProviderType == serviceProviderType) {
        const cp: ServiceProvider = serviceProviders[i] as ServiceProvider;
        dp.push(cp);
      }
    }
    return dp;
  }

  // *****************************************Return Service Provider object******************************************
  public static getServiceProviderObject(serviceProviderID: number, serviceProviderType: string, serviceProviders: ServiceProvider[]): ServiceProvider {
    const serviceProviderObject: ServiceProvider = new ServiceProvider();
    for (const serviceProviderIndex in serviceProviders) {
      if (serviceProviders[serviceProviderIndex].serviceProviderID == serviceProviderID && serviceProviders[serviceProviderIndex].serviceProviderType == serviceProviderType) {
        serviceProviderObject.serviceProviderID = serviceProviders[serviceProviderIndex].serviceProviderID;
        serviceProviderObject.serviceProviderName = serviceProviders[serviceProviderIndex].serviceProviderName;
        serviceProviderObject.serviceProviderContactName = serviceProviders[serviceProviderIndex].serviceProviderContactName;
        serviceProviderObject.serviceProviderContactNumber = serviceProviders[serviceProviderIndex].serviceProviderContactNumber;
        serviceProviderObject.serviceProviderType = serviceProviders[serviceProviderIndex].serviceProviderType;
        serviceProviderObject.customField1 = serviceProviders[serviceProviderIndex].customField1;
        serviceProviderObject.customField2 = serviceProviders[serviceProviderIndex].customField2;
        serviceProviderObject.serviceProviderStatus = serviceProviders[serviceProviderIndex].serviceProviderStatus;
        serviceProviderObject.address.addressPostCode = serviceProviders[serviceProviderIndex].address.addressPostCode;
        serviceProviderObject.address.addressProvince = serviceProviders[serviceProviderIndex].address.addressProvince;
        serviceProviderObject.address.addressDistrict = serviceProviders[serviceProviderIndex].address.addressDistrict;
        serviceProviderObject.address.addressLineOne = serviceProviders[serviceProviderIndex].address.addressLineOne;
        serviceProviderObject.address.addressLineTwo = serviceProviders[serviceProviderIndex].address.addressLineTwo;
      }
    }
    return serviceProviderObject;
  }

  // *****************************************Return Assignee  object******************************************
  public static getAssigneeObject(assigneeLabel: string, assignee?: Lookup[]): Lookup[] {
    const assignees: Lookup[] = assignee;
    const dp: Lookup[] = Array();
    for (let i = 0; i < assignees.length; i++) {
      if (assignees[i].label1 == assigneeLabel) {
        const cp: Lookup = assignees[i] as Lookup;
        dp.push(cp);
      }
    }
    return dp;
  }

  // *****************************************Return Company Parameter Code******************************************
  public static getCompanyParametersCode(category: string, group: string, value: string, companyParameter?: CompanyParameter[]): string {
    let code = '';
    const companyParameters: CompanyParameter[] = companyParameter;
    for (let i = 0; i < companyParameters.length; i++) {
      if (companyParameters[i].category == category && companyParameters[i].group == group && companyParameters[i].value == value) {
        code = companyParameters[i].code;
      }
    }
    return code;
  }

  // *********************************************Return Company Parameter Value********************************************************************
  public static getCompanyParametersValue(category: string, group: string, code: string, companyParameter?: CompanyParameter[]): string {
    let value = '';
    const companyParameters: CompanyParameter[] = companyParameter;
    for (let i = 0; i < companyParameters.length; i++) {
      if (companyParameters[i].category == category && companyParameters[i].group == group && companyParameters[i].code == code) {
        value = companyParameters[i].value;

      }
    }
    return value;
  }

  // *****************************************************************************************************************
  public static getCompanyParametersCustomField1(category: string, group: string, code: string, companyParameter?: CompanyParameter[]): string {
    let value = '';
    const companyParameters: CompanyParameter[] = companyParameter;
    for (let i = 0; i < companyParameters.length; i++) {
      if (companyParameters[i].category == category && companyParameters[i].group == group && companyParameters[i].code == code) {
        value = companyParameters[i].customField1;

      }
    }
    return value;
  }

  // ******************************************Rounded Decimal Number**************************************************
  public static convert(number: number, decimal_places: any): number {
    if (typeof number === 'number' && typeof decimal_places === 'number') {
      const denominator = Math.pow(10, decimal_places),
        rounded_number = Math.round(number * denominator) / denominator;

      return rounded_number;
    } else {
      return number = 0;
    }
  }


  // ******************************************Claim Combo Data**************************************************
  public static claimComboDataHandler(loginData: LoginData): ClaimComboData {
    const claimComboData: ClaimComboData = new ClaimComboData();
    claimComboData.claimHandlerCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM HANDLER CODE', loginData.companyParameters);
    claimComboData.claimStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM STATUS', loginData.companyParameters);
    claimComboData.claimType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM TYPE', loginData.companyParameters);
    claimComboData.closeReason = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM CLOSE REASON', loginData.companyParameters);
    claimComboData.titleCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'TITLE CODE', loginData.companyParameters);
    claimComboData.maritalStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'MARITAL STATUS', loginData.companyParameters);
    claimComboData.classCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM CLASSIFICATION', loginData.companyParameters);
    claimComboData.classCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM CLASSIFICATION', loginData.companyParameters);
    claimComboData.dependantRelationship = CompanyParameterUtil.getCompanyParametersObject('codetables', 'RELATIONSHIP WITH CLAIMANT', loginData.companyParameters);
    claimComboData.guardianRelation = CompanyParameterUtil.getCompanyParametersObject('codetables', 'RELATIONSHIP WITH CLAIMANT', loginData.companyParameters);
    claimComboData.courtLevel = CompanyParameterUtil.getCompanyParametersObject('codetables', 'COURT LEVELS', loginData.companyParameters);
    claimComboData.genderArray = [{data: 'M', label: 'Male'}, {data: 'F', label: 'Female'}];
    claimComboData.roleCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ROLE STATUS', loginData.companyParameters);
    return claimComboData;
  }

  // ******************************************Claim Combo Data**************************************************
  public static claimSmartComboDataHandler(loginData: LoginData, registrationNumbers: Lookup[]): ClaimSmartComboData {
    const claimComboData: ClaimSmartComboData = new ClaimSmartComboData();
    claimComboData.claimComboData.claimHandlerCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM HANDLER CODE', loginData.companyParameters);
    claimComboData.claimComboData.claimStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM STATUS', loginData.companyParameters);
    claimComboData.claimComboData.claimType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM TYPE', loginData.companyParameters);
    claimComboData.claimComboData.closeReason = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM CLOSE REASON', loginData.companyParameters);
    claimComboData.claimantComboData.titleCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'TITLE CODE', loginData.companyParameters);
    claimComboData.claimantComboData.address = this.addressComboDataHandler(loginData);
    claimComboData.claimantComboData.maritalStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'MARITAL STATUS', loginData.companyParameters);
    claimComboData.claimantComboData.classCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM CLASSIFICATION', loginData.companyParameters);
    claimComboData.dependantComboData.dependantRelationship = CompanyParameterUtil.getCompanyParametersObject('codetables', 'RELATIONSHIP WITH CLAIMANT', loginData.companyParameters);
    claimComboData.dependantComboData.dependantEconomicLoss = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ECONOMIC LOSS', loginData.companyParameters);
    claimComboData.dependantComboData.genderArray = [{data: 'm', label: 'Male'}, {data: 'f', label: 'Female'}];
    claimComboData.nextOfKinComboData.guardianRelation = CompanyParameterUtil.getCompanyParametersObject('codetables', 'RELATIONSHIP WITH CLAIMANT', loginData.companyParameters);
    claimComboData.nextOfKinComboData.address = this.addressComboDataHandler(loginData);
    claimComboData.claimServiceProviderComboData = this.claimServiceProviderComboDataHandler(loginData);
    claimComboData.claimantComboData.genderArray = [{data: 'M', label: 'Male'}, {data: 'F', label: 'Female'}];
    claimComboData.claimantComboData.registrationNumbers = registrationNumbers;
    claimComboData.claimantComboData.roleCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ROLE STATUS', loginData.companyParameters);
    claimComboData.commentsComboData.AcknowledgementLetter = CompanyParameterUtil.getCompanyParametersObject('codetables', 'LETTERATTACHMENTS', loginData.companyParameters);
    return claimComboData;
  }

  // ******************************************Header Combo Data**************************************************
  public static headerComboDataHandler(loginData: LoginData, code: string, menu: HeaderMenu): HeaderComboData {
    const headerComboData: HeaderComboData = new HeaderComboData();
    headerComboData.claimStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM STATUS', loginData.companyParameters);
    headerComboData.claimType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM TYPE', loginData.companyParameters);
    for (let key in menu[code]) {
      if ((loginData.logonCode === '00150' && menu[code][key] === 'Search Accident') ||
        (loginData.logonCode === '00100' && menu[code][key] === 'Home')) {

      } else {
        headerComboData.menuItems.push(this.menuHeaderHandler(key, menu[code][key]));
      }
    }
    return headerComboData;
  }

  // ******************************************ClaimService Provider Combo Data**************************************************
  public static searchAccidentComboDataHandler(loginData: LoginData): SearchAccidentComboData {
    const searchAccidentComboData: SearchAccidentComboData = new SearchAccidentComboData();
    searchAccidentComboData.claimType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM TYPE', loginData.companyParameters);
    searchAccidentComboData.claimHandler = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM HANDLER CODE', loginData.companyParameters);
    searchAccidentComboData.ratingCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'RATING & CLASS CODE', loginData.companyParameters);
    searchAccidentComboData.roleCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ROLE STATUS', loginData.companyParameters);
    searchAccidentComboData.fileStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ACCIDENT FILE STATUS', loginData.companyParameters);
    searchAccidentComboData.makeID = loginData.makes;
    searchAccidentComboData.bodyID = loginData.bodyTypes;
    searchAccidentComboData.addressProvince = loginData.provinces;
    searchAccidentComboData.addressDistrict = loginData.districts;
    searchAccidentComboData.assignees = loginData.assignees;
    searchAccidentComboData.viewTypes = [{data: 'D', label: 'Detail'}, {data: 'S', label: 'Summary'}];
    searchAccidentComboData.vehicleAtFault = [{data: 'T', label: 'Yes'}, {data: 'F', label: 'No'}];
    searchAccidentComboData.menuItemSource = [{data: 'loadOpenAccident', label: 'Open Accident'}];
    return searchAccidentComboData;
  }

  // ******************************************Vehicle Section Combo Data**************************************************
  public static vehicleSectionComboDataHandler(loginData: LoginData): VehicleSectionComboData {
    const vehicleSectionComboData: VehicleSectionComboData = new VehicleSectionComboData();
    vehicleSectionComboData.makeID = loginData.makes;
    vehicleSectionComboData.vehicleAtFault = [{data: 'T', label: 'Yes'}, {data: 'F', label: 'No'}];
    return vehicleSectionComboData;
  }

  // ******************************************Claim Section Combo Data**************************************************
  public static claimSectionComboDataHandler(loginData: LoginData): ClaimSectionComboData {
    const claimSectionComboData: ClaimSectionComboData = new ClaimSectionComboData();
    claimSectionComboData.claimHandler = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM HANDLER CODE', loginData.companyParameters);
    claimSectionComboData.claimType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM TYPE', loginData.companyParameters);
    return claimSectionComboData;
  }

  // ******************************************ClaimService Provider Combo Data**************************************************
  public static claimServiceProviderComboDataHandler(loginData: LoginData): ClaimServiceProviderComboData {
    const claimServiceProviderComboData: ClaimServiceProviderComboData = new ClaimServiceProviderComboData();
    claimServiceProviderComboData.claimCourtLevel = CompanyParameterUtil.getCompanyParametersObject('codetables', 'COURT LEVELS', loginData.companyParameters);
    claimServiceProviderComboData.claimLawyer = CompanyParameterUtil.getServiceProviderArray('00110', loginData.serviceProviders);
    claimServiceProviderComboData.claimDistrictCourt = CompanyParameterUtil.getServiceProviderArray('00130', loginData.serviceProviders);
    claimServiceProviderComboData.claimUnderTrial = CompanyParameterUtil.getServiceProviderArray('00080', loginData.serviceProviders);
    claimServiceProviderComboData.claimUnderInvestigation = CompanyParameterUtil.getServiceProviderArray('00140', loginData.serviceProviders);
    claimServiceProviderComboData.address = this.addressComboDataHandler(loginData);
    return claimServiceProviderComboData;
  }

  public static claimServiceProviderObjectHandler(serviceProviderID: number, serviceProviderType: string, loginData: LoginData): ClaimServiceProviderComboData {
    const claimServiceProviderObjectComboData: ClaimServiceProviderComboData = new ClaimServiceProviderComboData();
    claimServiceProviderObjectComboData.claimServiceProviderObject = CompanyParameterUtil.getServiceProviderObject(serviceProviderID, serviceProviderType, loginData.serviceProviders);
    return claimServiceProviderObjectComboData;
  }

  // ******************************************Accident Combo Data**************************************************
  public static accidentComboDataHandler(loginData: LoginData): AccidentComboData {
    const accidentComboData: AccidentComboData = new AccidentComboData();
    accidentComboData.roadConditionStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ROAD CONDITIONS', loginData.companyParameters);
    accidentComboData.weatherStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ACCIDENT WEATHER', loginData.companyParameters);
    accidentComboData.accidentCauseCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ACCIDENT CAUSE - CODES', loginData.companyParameters);
    accidentComboData.RUMCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'R.U.M CODES', loginData.companyParameters);
    accidentComboData.fileStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ACCIDENT FILE STATUS', loginData.companyParameters);
    accidentComboData.assignee = loginData.assignees;
    accidentComboData.hours = this.timeHandler(24);
    accidentComboData.minutes = this.timeHandler(60);
    accidentComboData.addressComboData = this.addressComboDataHandler(loginData);
    return accidentComboData;
  }

  // ******************************************Vehicle Combo Data**************************************************
  public static vehicleComboDataHandler(loginData: LoginData): VehicleSmartComboData {
    const vehicleSmartComboData: VehicleSmartComboData = new VehicleSmartComboData();
    vehicleSmartComboData.vehicleComboData.ratingCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'RATING & CLASS CODE', loginData.companyParameters);
    vehicleSmartComboData.vehicleComboData.accidentClassification = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ACCIDENT CLASSIFICATION', loginData.companyParameters);
    vehicleSmartComboData.ownerComboData.ownerType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'OWNERSHIP TYPE', loginData.companyParameters);
    vehicleSmartComboData.ownerComboData.addressComboData = this.addressComboDataHandler(loginData);
    vehicleSmartComboData.driverComboData.licenseType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'LICENSE TYPE', loginData.companyParameters);
    vehicleSmartComboData.driverComboData.licenseClass = CompanyParameterUtil.getCompanyParametersObject('codetables', 'LICENSE CLASS', loginData.companyParameters);
    vehicleSmartComboData.driverComboData.addressComboData = this.addressComboDataHandler(loginData);
    vehicleSmartComboData.vehicleComboData.makeID = loginData.makes;
    vehicleSmartComboData.vehicleComboData.bodyID = loginData.bodyTypes;
    return vehicleSmartComboData;
  }

  // ******************************************Vehicle Combo Data**************************************************
  public static getLoginDataArrays(loginData: LoginData, type): any[] {
    return loginData[type];
  }

  // ******************************************initialAssessment Combo Data**************************************************
  public static initialAssessmentComboDataHandler(loginData: LoginData): InitialAssessmentComboData {
    const initialAssessmentComboData: InitialAssessmentComboData = new InitialAssessmentComboData();
    initialAssessmentComboData.injuryCode = CompanyParameterUtil.getCompanyParametersObject('codetables', 'INJURY CODES', loginData.companyParameters);
    initialAssessmentComboData.medicalReport = [{data: 'true', label: 'Yes'}, {data: 'false', label: 'No'}];
    return initialAssessmentComboData;
  }

  // ******************************************fraudCheck Combo Data**************************************************
  public static fraudCheckDataHandler(loginData: LoginData): FraudCheckComboData {
    const fraudCheckComboData: FraudCheckComboData = new FraudCheckComboData();
    fraudCheckComboData.fraudCheckStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'FRAUD CHECK STATUS', loginData.companyParameters);
    fraudCheckComboData.fraudCheckIndicator = [{data: true, label: 'Yes'}, {data: false, label: 'No'}];
    return fraudCheckComboData;
  }

  // ******************************************Independent Review Combo Data**************************************************
  public static independentReviewDataHandler(): IndependentReviewComboData {
    const independentReviewComboData: IndependentReviewComboData = new IndependentReviewComboData();
    independentReviewComboData.independentReviewIndicator = [{data: true, label: 'Yes'}, {data: false, label: 'No'}];
    return independentReviewComboData;
  }

  // ******************************************Claim Authorization Combo Data**************************************************
  public static claimAuthorizationHandler(loginData: LoginData): ClaimAuthorizationComboData {
    const claimAuthorizationComboData: ClaimAuthorizationComboData = new ClaimAuthorizationComboData();
    claimAuthorizationComboData.status = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM OFFER APPROVAL STATUS', loginData.companyParameters);
    claimAuthorizationComboData.recommendationStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM OFFER STATUS', loginData.companyParameters);
    claimAuthorizationComboData.independentReviewStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'INDEPENDENT REVIEW STATUS', loginData.companyParameters);
    claimAuthorizationComboData.approvedBy = loginData.assignees;
    return claimAuthorizationComboData;
  }

  // ******************************************Investigation Approval Sub Component Combo Data**************************************************
  public static investigationApprovalHandler(loginData: LoginData): InvestigationApprovalComboData {
    const investigationApprovalComboData: InvestigationApprovalComboData = new InvestigationApprovalComboData();
    investigationApprovalComboData.assignee = CompanyParameterUtil.getAssigneeObject('00060', loginData.assignees);
    investigationApprovalComboData.companies = CompanyParameterUtil.getServiceProviderArray('00140', loginData.serviceProviders);
    investigationApprovalComboData.assign = [{data: true, label: 'Yes'}, {data: false, label: 'No'}];
    return investigationApprovalComboData;
  }

  // ******************************************assignee Combo Data**************************************************
  public static assignDataHandler(loginData: LoginData): AssignComboData {
    const assignComboData: AssignComboData = new AssignComboData();
    assignComboData.assignees = loginData.assignees;
    assignComboData.fraudCheckOfficers = loginData.assignees.filter((temp) => temp.label1 === '00060');
    assignComboData.serviceProvider = loginData.logonCodes.filter(value => value.indicator1);
    assignComboData.claimStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM STATUS', loginData.companyParameters);
    let lookup = new Lookup();
    lookup.data = '00030';
    lookup.label = 'PEER REVIEWER';
    lookup.indicator1 = false;
    assignComboData.serviceProvider.push(lookup);
    return assignComboData;
  }

  // ******************************************WorkBasket Combo Data**************************************************
  public static workBasketDataHandler(loginData: LoginData): WorkBasketComboData {
    const workBasketComboData: WorkBasketComboData = new WorkBasketComboData();
    workBasketComboData.searchAccident = CompanyParameterUtil.searchAccidentComboDataHandler(loginData);
    workBasketComboData.day = [{data: 'TDL', label: 'To Do List'}, {data: 'T', label: 'Today'},
      {data: 'CW', label: 'Current Week'}, {data: 'CM', label: 'Current Month'}, {data: 'AL', label: 'All'}];
    workBasketComboData.logOnCodes = loginData.logonCodes.filter((temp) => temp.indicator1 === true);
    workBasketComboData.menuItemSource = [{data: 'loadOpenClaim', label: 'Open Claim'}, {
      data: 'loadAssign',
      label: 'Assign'
    },
      {data: 'loadReAssign', label: 'Re Assign'}, {data: 'loadTakeControl', label: 'Take Control'}];
    workBasketComboData.popupTitles = [{data: 'loadOpenClaim', label: ''}, {
      data: 'loadAssign',
      label: 'Claim Assignment'
    },
      {data: 'loadReAssign', label: 'Claim Re-Assignment'}, {data: 'loadTakeControl', label: 'Take Control'}];
    return workBasketComboData;
  }

  // ******************************************ClaimOffer Combo Data**************************************************
  public static claimOfferDataHandler(loginData: LoginData): ClaimOfferComboData {
    const claimOfferComboData: ClaimOfferComboData = new ClaimOfferComboData();
    claimOfferComboData.authStatus = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM OFFER STATUS', loginData.companyParameters);
    claimOfferComboData.approvalStatus = [{data: 'A', label: 'Approved'}, {data: 'D', label: 'Declined'}];
    claimOfferComboData.authBy = loginData.assignees;
    return claimOfferComboData;
  }

  // ******************************************Medical Evidence Combo Data**************************************************
  public static medicalEvidenceDataHandler(loginData: LoginData): MedicalEvidenceComboData {
    const medicalEvidenceComboData: MedicalEvidenceComboData = new MedicalEvidenceComboData();
    medicalEvidenceComboData.liability = CompanyParameterUtil.getCompanyParametersObject('codetables', 'LIABILITY', loginData.companyParameters);
    medicalEvidenceComboData.reasons = CompanyParameterUtil.getCompanyParametersObject('codetables', 'LIABILITY REASON', loginData.companyParameters);
    medicalEvidenceComboData.furtherExamRequiredFlag = [{data: 'true', label: 'Yes'}, {data: 'false', label: 'No'}];
    medicalEvidenceComboData.hospitals = CompanyParameterUtil.getServiceProviderArray('00070', loginData.serviceProviders);
    return medicalEvidenceComboData;
  }

  // ******************************************Comments Combo Data**************************************************
  public static commentsComboDataHandler(loginData: LoginData): CommentsComboData {
    const commentsComboData: CommentsComboData = new CommentsComboData();
    commentsComboData.AcknowledgementLetter = CompanyParameterUtil.getCompanyParametersObject('codetables', 'LETTERATTACHMENTS', loginData.companyParameters);
    return commentsComboData;
  }

  // ******************************************Address Combo Data**************************************************
  public static addressComboDataHandler(loginData: LoginData): AddressComboData {
    const addressComboData: AddressComboData = new AddressComboData();
    addressComboData.addressDistrict = loginData.districts;
    addressComboData.addressProvince = loginData.provinces;
    return addressComboData;
  }

  // ******************************************Payment Combo Data**************************************************
  public static paymentComboDataHandler(loginData: LoginData): PaymentComboData {
    const paymentComboData: PaymentComboData = new PaymentComboData();
    paymentComboData.paymentType = CompanyParameterUtil.getCompanyParametersObject('codetables', 'PAYMENT TYPES', loginData.companyParameters);
    paymentComboData.claimCost = CompanyParameterUtil.getCompanyParametersObject('codetables', 'CLAIM_COST', loginData.companyParameters);
    return paymentComboData;
  }

  public static paymentSystemAdminComboDataHandler(loginData: LoginData): CompanyParameter[] {
    let cp: CompanyParameter[] = CompanyParameterUtil.getCompanyParametersObject('codetables', 'PAYMENT TYPES', loginData.companyParameters);
    let obj:CompanyParameter = new CompanyParameter();
    obj.code = null;
    obj.value = 'Select Payment Type';
    cp.unshift(obj);
    return cp;
  }

  // ******************************************Attachment Combo Data**************************************************
  public static attachmentComboDataHandler(loginData: LoginData): AttachmentComboData {
    const attachmentComboData: AttachmentComboData = new AttachmentComboData();
    attachmentComboData.diaryTitle = CompanyParameterUtil.getCompanyParametersObject('codetables', 'ATTACHMENT TITLE', loginData.companyParameters);
    return attachmentComboData;
  }

  static timeHandler(maxIndex: number): LookupNumberModel[] {
    let lookups: LookupNumberModel[] = [];
    for (let i = 0; i < maxIndex; i++) {
      let lookup: LookupNumberModel = new LookupNumberModel();
      lookup.data = i;
      if (i >= 0 && i <= 9) {
        lookup.label = '0' + i;
      } else {
        lookup.label = String(i);
      }
      lookups.push(lookup);
    }
    return lookups;
  }

  private static menuHeaderHandler(code: string, label: string) {
    let menu: MenuHeader = new MenuHeader();
    menu.menu.code = code;
    menu.menu.label = label;
    return menu;
  }
}

