import {ClaimServiceProvider} from '../../../business-layer/models/ClaimServiceProvider';
import {ClaimServiceProviderParam} from '../../../business-layer/models/ClaimServiceProviderParam';
import {LoginData} from '../../../business-layer/models/LoginData';
import {ClaimServiceProviderComboData} from '../../../business-layer/models/ClaimServiceProviderComboData';
import {CompanyParameterUtil} from './CompanyParameterUtil';
import {Claim} from '../../../business-layer/models/Claim';
import {Dependant} from '../../../business-layer/models/Dependant';

export class ClaimUtil {

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Claim Service Provider Component░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static claimServiceProviderArrayHandler(trialCourtAddress: string, courtReferenceNumber: string, array1: ClaimServiceProvider[], array2: ClaimServiceProviderParam[], loginData: LoginData) {
    // Mapping Claim Service Provider Array to Claim Service Provider Form Array
    for (let index = 0; index < array1.length; index++) {
      let claimServiceProviderFormArray: ClaimServiceProviderParam = new ClaimServiceProviderParam();
      claimServiceProviderFormArray.claimServiceProviderID = array1[index].claimServiceProviderID;
      claimServiceProviderFormArray.claimID = array1[index].claimID;
      claimServiceProviderFormArray.serviceProviderID = array1[index].serviceProviderID;
      claimServiceProviderFormArray.referenceNumber = array1[index].referenceNumber;
      claimServiceProviderFormArray.contactName = array1[index].contactName;
      claimServiceProviderFormArray.courtLevel = array1[index].courtLevel;
      claimServiceProviderFormArray.serviceProviderType = array1[index].serviceProviderType;
      if (array1[index].serviceProviderType == '00080') {
        claimServiceProviderFormArray.trialCourtAddress = trialCourtAddress;
        claimServiceProviderFormArray.courtReferenceNumber = courtReferenceNumber;
      }
      array2.push(claimServiceProviderFormArray);
    }
    ClaimUtil.claimServiceProviderObjectsHandler(array2, loginData);

    return array2;
  }

  static claimServiceProviderObjectsHandler(array2: ClaimServiceProviderParam[], loginData: LoginData) {
    // Fetching Service Provider Object.
    for (let index = 0; index < array2.length; index++) {
      let comboData: ClaimServiceProviderComboData = new ClaimServiceProviderComboData();
      comboData = CompanyParameterUtil.claimServiceProviderObjectHandler(array2[index].serviceProviderID, array2[index].serviceProviderType, loginData);
      for (let index2 = 0; index2 < 9; index2++) {
        array2[index].customField1 = comboData.claimServiceProviderObject.customField1;
        array2[index].customField2 = comboData.claimServiceProviderObject.customField2;
        array2[index].serviceProviderContactName = comboData.claimServiceProviderObject.serviceProviderContactName;
        array2[index].serviceProviderContactNumber = comboData.claimServiceProviderObject.serviceProviderContactNumber;
        array2[index].serviceProviderName = comboData.claimServiceProviderObject.serviceProviderName;
        array2[index].serviceProviderStatus = comboData.claimServiceProviderObject.serviceProviderStatus;
        array2[index].address.addressPostCode = comboData.claimServiceProviderObject.address.addressPostCode;
        array2[index].address.addressDistrict = comboData.claimServiceProviderObject.address.addressDistrict;
        array2[index].address.addressProvince = comboData.claimServiceProviderObject.address.addressProvince;
        array2[index].address.addressLineTwo = comboData.claimServiceProviderObject.address.addressLineTwo;
        array2[index].address.addressLineOne = comboData.claimServiceProviderObject.address.addressLineOne;
      }
    }
  }

  static claimServiceProviderObjectHandler(claimServiceProviderParam: ClaimServiceProviderParam, serviceProviderID: number, serviceProviderType: string, loginData: LoginData) {
    // Fetching Service Provider Object.
    let comboData: ClaimServiceProviderComboData = new ClaimServiceProviderComboData();
    comboData = CompanyParameterUtil.claimServiceProviderObjectHandler(serviceProviderID, serviceProviderType, loginData);
    claimServiceProviderParam.customField1 = comboData.claimServiceProviderObject.customField1;
    claimServiceProviderParam.customField2 = comboData.claimServiceProviderObject.customField2;
    claimServiceProviderParam.serviceProviderContactNumber = comboData.claimServiceProviderObject.serviceProviderContactNumber;
    claimServiceProviderParam.serviceProviderName = comboData.claimServiceProviderObject.serviceProviderName;
    if (claimServiceProviderParam.serviceProviderType == '00110') {
      claimServiceProviderParam.contactName = comboData.claimServiceProviderObject.serviceProviderContactName;
    }
    claimServiceProviderParam.serviceProviderStatus = comboData.claimServiceProviderObject.serviceProviderStatus;
    claimServiceProviderParam.address.addressPostCode = comboData.claimServiceProviderObject.address.addressPostCode;
    claimServiceProviderParam.address.addressDistrict = comboData.claimServiceProviderObject.address.addressDistrict;
    claimServiceProviderParam.address.addressProvince = comboData.claimServiceProviderObject.address.addressProvince;
    claimServiceProviderParam.address.addressLineTwo = comboData.claimServiceProviderObject.address.addressLineTwo;
    claimServiceProviderParam.address.addressLineOne = comboData.claimServiceProviderObject.address.addressLineOne;
  }

  //For Claim Service Root Object Updation
  static claimServiceProviderObjectArrayHandler(claim: Claim, claimServiceProviderParam: ClaimServiceProviderParam) {
    for (let index = 0; index < claim.claimServiceProviders.length; index++) {
      if (claim.claimServiceProviders[index].serviceProviderType == claimServiceProviderParam.serviceProviderType) {
        claim.claimServiceProviders[index].claimID = claim.claimID;
        claim.claimServiceProviders[index].contactName = claimServiceProviderParam.contactName;
        claim.claimServiceProviders[index].serviceProviderID = claimServiceProviderParam.serviceProviderID;
        claim.claimServiceProviders[index].serviceProviderType = claimServiceProviderParam.serviceProviderType;
        claim.claimServiceProviders[index].referenceNumber = claimServiceProviderParam.referenceNumber;
        if (claim.claimServiceProviders[index].serviceProviderType == '00080') {
          claim.claimServiceProviders[index].courtLevel = claimServiceProviderParam.courtLevel;
          claim.trialCourtAddress = claimServiceProviderParam.trialCourtAddress;
          claim.courtReferenceNumber = claimServiceProviderParam.courtReferenceNumber;
        }
      }
    }
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Dependent Details Component░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static dependentDetailCalculations(dependentObject: Dependant,percentFactorAmount) {
    dependentObject.initialDamagesAmount = percentFactorAmount - (percentFactorAmount * dependentObject.lessContingencyPercentage) / 100;
    let a = dependentObject.initialDamagesAmount + dependentObject.stateAmount + dependentObject.otherAmount - dependentObject.BPCAmount;
    let b = (a * dependentObject.contributoryNegligenceAmount) / 100;
    dependentObject.totalAmount = a-b;
    return dependentObject;
  }
}
