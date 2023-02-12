/**
 * Created by Jawad on 01/01/2020.
 */

import * as _ from 'lodash-es';
import {ClaimAccidentSummary} from '../../../business-layer/models/ClaimAccidentSummary';
import {Address} from '../../../business-layer/models/Address';
import {ClaimAuthorization} from '../../../business-layer/models/ClaimAuthorization';
import {ClaimOffer} from '../../../business-layer/models/ClaimOffer';
import {Authorization} from '../../../business-layer/models/Authorization';
import {ClaimServiceProvider} from '../../../business-layer/models/ClaimServiceProvider';
import {Vehicle} from '../../../business-layer/models/Vehicle';
import {Claim} from '../../../business-layer/models/Claim';
import {SupportingDocument} from '../../../business-layer/models/SupportingDocument';
import {ObjectUtil} from './ObjectUtil';
import {LoginData} from '../../../business-layer/models/LoginData';
import {Diary} from '../../../business-layer/models/Diary';
import {ClaimAssessment} from '../../../business-layer/models/ClaimAssessment';
import {AccidentListSummary} from '../../../business-layer/models/AccidentListSummary';
import {Accident} from '../../../business-layer/models/Accident';
import {Owner} from '../../../business-layer/models/Owner';
import {Driver} from '../../../business-layer/models/Driver';
import {Claimant} from '../../../business-layer/models/Claimant';
import {InsuranceConsultant} from '../../../business-layer/models/InsuranceConsultant';
import {InitialAssessment} from '../../../business-layer/models/InitialAssessment';
import * as moment from 'moment';
import {ClaimPayment} from '../../../business-layer/models/ClaimPayment';
import {ClaimantClaim} from '../../../business-layer/models/ClaimantClaim';

export class ApplicationUtil {
  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  constructor() {
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static fraudCheckListNullCaseHandler(loginData: LoginData, claim: Claim) {
    if (claim.quantamAssessment.fraudChecks.length == 0) {
      // claim.quantamAssessment.fraudChecks = ObjectUtil.getFraudCheckArray(loginData, claim);
    }
    return claim;
  }

  static independentReviewListNullCaseHandler(loginData: LoginData, claim: Claim) {
    if (claim.quantamAssessment.independentReviewChecklists.length == 0) {
      claim.quantamAssessment.independentReviewChecklists = ObjectUtil.getIndependentReviewArray(loginData, claim);
    }
    return claim;
  }

  static validatorRequiredFields(supportingDocument: SupportingDocument, formArray) {
    let missedFields = '';
    missedFields = (!(this.checkString(supportingDocument.title)) ? 'Title' : '')
      .concat(!(this.checkString(supportingDocument.comments)) ? ' Comments' : '');
    if (formArray.controls.length == 0) {
      missedFields = missedFields + ' No Attachments';
    }
    return missedFields;
  }

  static validatorRequiredFieldsDiary(diary: Diary) {
    let missedFields = '';
    missedFields = (!(this.checkString(diary.diaryTitle)) ? 'Title' : '')
      .concat(!(this.checkString(diary.diaryComment)) ? ' Comments' : '');
    return missedFields;
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static checkEmailString(value: string): boolean {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static checkString(value: string): boolean {
    return !(value == null || value == '');
  }

// For WorkBasket Records Columns Sum with Wijmo
  static workBasketTypeCasting(data) {
    data.claimWQSummary.forEach((value, index) => {
      if (value.estimatedAmount !== null) {
        value.estimatedAmount = Number(String(value.estimatedAmount).replace(/,\s?/g, ''));
      } else {
        value.estimatedAmount = 0;
      }
      if (value.claimantPaidAmount !== null) {
        value.claimantPaidAmount = Number(String(value.claimantPaidAmount).replace(/,\s?/g, ''));
      } else {
        value.claimantPaidAmount = 0;
      }
      if (value.reservedAmount !== null) {
        value.reservedAmount = Number(String(value.reservedAmount).replace(/,\s?/g, ''));
      } else {
        value.reservedAmount = 0;
      }
      if (value.totalPaidAmount !== null) {
        value.totalPaidAmount = Number(String(value.totalPaidAmount).replace(/,\s?/g, ''));
      } else {
        value.totalPaidAmount = 0;
      }
      if (value.accidentDate) {
        value.accidentDate = moment.utc(new Date(value.accidentDate)).format('YYYY-MM-DD');
      }
      if (value.receivedDate) {
        value.receivedDate = moment.utc(new Date(value.receivedDate)).format('YYYY-MM-DD');
      }
    });
    return data;
  }

// For WorkBasket Records Columns Sum with Wijmo
  static workBasketWebSocketTypeCasting(data, parentType) {
    data[parentType].forEach((value, index) => {
      if (value.estimatedAmount !== null) {
        value.estimatedAmount = Number(String(value.estimatedAmount).replace(/,\s?/g, ''));
      } else {
        value.estimatedAmount = 0;
      }
      if (value.claimantPaidAmount !== null) {
        value.claimantPaidAmount = Number(String(value.claimantPaidAmount).replace(/,\s?/g, ''));
      } else {
        value.claimantPaidAmount = 0;
      }
      if (value.reservedAmount !== null) {
        value.reservedAmount = Number(String(value.reservedAmount).replace(/,\s?/g, ''));
      } else {
        value.reservedAmount = 0;
      }
      if (value.totalPaidAmount !== null) {
        value.totalPaidAmount = Number(String(value.totalPaidAmount).replace(/,\s?/g, ''));
      } else {
        value.totalPaidAmount = 0;
      }
      if (value.accidentDate) {
        value.accidentDate = moment.utc(new Date(value.accidentDate)).format('YYYY-MM-DD');
      }
      if (value.receivedDate) {
        value.receivedDate = moment.utc(new Date(value.receivedDate)).format('YYYY-MM-DD');
      }
    });
    return data;
  }

  static paymentDateTypeCasting(items: ClaimPayment[]) {
    items.forEach((value, index) => {
      if (value.paymentDate) {
        value.paymentDate = moment.utc(new Date(value.paymentDate)).format('YYYY-MM-DD');
      }
    });
    return items;
  }

  static bulkAssignmentDateTypeCasting(items: Accident[]) {
    items.forEach((value, index) => {
      if (value.accidentDate) {
        value.accidentDate = moment.utc(new Date(value.accidentDate)).format('YYYY-MM-DD');
      }
    });
    return items;
  }

  // For Search Accident Records Columns Sum with Wijmo
  static searchAccidentTypeCasting(accidentListSummary: AccidentListSummary[]) {
    accidentListSummary.forEach((value, index) => {
      if (value.claimEstimateAmount !== null) {
        value.claimEstimateAmount = Number(String(value.claimEstimateAmount).replace(/,\s?/g, ''));
      } else {
        value.claimEstimateAmount = 0;
      }
      if (value.claimPaidAmount !== null) {
        value.claimPaidAmount = Number(String(value.claimPaidAmount).replace(/,\s?/g, ''));
      } else {
        value.claimPaidAmount = 0;
      }
      if (value.claimReserveAmount !== null) {
        value.claimReserveAmount = Number(String(value.claimReserveAmount).replace(/,\s?/g, ''));
      } else {
        value.claimReserveAmount = 0;
      }
    });
    return accidentListSummary;
  }

  retrieveAccidentApplicationResponseHandler(accident: Accident): Accident {
    if (accident != null) {
      if (accident.address == null) {
        accident.address = new Address();
      }
      if (accident.vehicles.length > 0) {
        accident.vehicles.forEach((vehicle) => {
          if (!vehicle.driver) {
            vehicle.driver = new Driver();
          }
          if (!vehicle.driver.address) {
            vehicle.driver.address = new Address();
          }
          if (!vehicle.owner) {
            vehicle.owner = new Owner();
          }
          if (!vehicle.owner.address) {
            vehicle.owner.address = new Address();
          }
          if (vehicle.claims.length > 0) {
            vehicle.claims.forEach((claim) => {
              if (!claim.claimant) {
                claim.claimant = new Claimant();
              }
              if (!claim.claimant.address) {
                claim.claimant.address = new Address();
              }
              if (!claim.claimant.guardianAddress) {
                claim.claimant.guardianAddress = new Address();
              }
              if (!claim.insuranceConsultant) {
                claim.insuranceConsultant = new InsuranceConsultant();
              }
              if (!claim.insuranceConsultant.address) {
                claim.insuranceConsultant.address = new Address();
              }
              if (claim.claimServiceProviders.length === 0) {
                let serviceProviderType: string[] = [];
                serviceProviderType.push('00080'); //For Under Trial
                serviceProviderType.push('00110'); //For Lawyer
                serviceProviderType.push('00130'); //For District Court
                serviceProviderType.push('00140'); //For Investigation Company
                for (let index = 0; index < 4; index++) {
                  let claimServiceProvider: ClaimServiceProvider = new ClaimServiceProvider();
                  claimServiceProvider.serviceProviderType = serviceProviderType[index];
                  claim.claimServiceProviders.push(claimServiceProvider);
                }
              } else {
                let serviceProviderType: string[] = [];
                serviceProviderType.push('00080'); //For Under Trial
                serviceProviderType.push('00110'); //For Lawyer
                serviceProviderType.push('00130'); //For District Court
                serviceProviderType.push('00140'); //For Investigation Company
                for (let index = 0; index < 4; index++) {
                  let claimServiceProvider: ClaimServiceProvider = new ClaimServiceProvider();
                  if (claim.claimServiceProviders.find((value: ClaimServiceProvider) => value.serviceProviderType == serviceProviderType[index]) == undefined) {
                    claimServiceProvider.serviceProviderType = serviceProviderType[index];
                    claim.claimServiceProviders.push(claimServiceProvider);
                  }
                }
              }
            });
          }
        });
      }
      if (accident.diaries == null) {
        accident.diaries = [];
      }
    }
    return accident;
  }

  retrieveApplicationResponseHandler(claimAccidentSummary: ClaimAccidentSummary): ClaimAccidentSummary {
    if (claimAccidentSummary != null) {
      if (claimAccidentSummary.accident != null) {
        let index = 0;
        /********** Initialize all claimAccidentSummary Objects ****************/
        if (claimAccidentSummary.accident.vehicles.length == 0) {
          claimAccidentSummary.accident.vehicles.push(new Vehicle());
        }
        if (claimAccidentSummary.accident.vehicles[0].claims.length == 0) {
          claimAccidentSummary.accident.vehicles[0].claims.push(new Claim());
        }
        if (claimAccidentSummary.accident.address == null) {
          claimAccidentSummary.accident.address = new Address();
        }
        if (claimAccidentSummary.accident.vehicles[0].driver == null) {
          claimAccidentSummary.accident.vehicles[0].driver = new Driver();
        }
        if (claimAccidentSummary.accident.vehicles[0].driver.address == null) {
          claimAccidentSummary.accident.vehicles[0].driver.address = new Address();
        }
        if (claimAccidentSummary.accident.vehicles[0].owner == null) {
          claimAccidentSummary.accident.vehicles[0].owner = new Owner();
        }
        if (claimAccidentSummary.accident.vehicles[0].owner.address == null) {
          claimAccidentSummary.accident.vehicles[0].owner.address = new Address();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].claimant == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].claimant = new Claimant();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].claimant.address == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].claimant.address = new Address();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].insuranceConsultant == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].insuranceConsultant = new InsuranceConsultant();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].insuranceConsultant.address == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].insuranceConsultant.address = new Address();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].claimant.guardianAddress == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].claimant.guardianAddress = new Address();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment = new ClaimAssessment();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].initialAssessment == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].initialAssessment = new InitialAssessment();
        }
        /***************************************ClaimAuthorization*********************************************************/
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.claimOffer == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.claimOffer = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.claimOfferApproved == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.claimOfferApproved = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.reviewApproved == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.reviewApproved = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.independentReview == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.independentReview = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.independentReviewApproved == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.independentReviewApproved = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.fraudCheckApproved == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.fraudCheckApproved = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.fraudCheckInvestigation == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.fraudCheckInvestigation = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization.revisedAssessment = new ClaimAuthorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].claimantDemand == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].claimantDemand = new ClaimOffer();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].companyOffer == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].companyOffer = new ClaimOffer();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.fraudChecks.length == 0) {
          // claimAccidentSummary.accident.vehicles[0].claims[0] = ApplicationUtil.fraudCheckListNullCaseHandler(this.loginData.getLoginData(), claimAccidentSummary.accident.vehicles[0].claims[0]);
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.independentReviewChecklists.length == 0) {
          // claimAccidentSummary.accident.vehicles[0].claims[0] = ApplicationUtil.independentReviewListNullCaseHandler(this.loginData.getLoginData(), claimAccidentSummary.accident.vehicles[0].claims[0]);
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization == null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.authorization = new Authorization();
        }
        if (claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.hospitals === null) {
          claimAccidentSummary.accident.vehicles[0].claims[0].quantamAssessment.hospitals = [];
        }

        if (claimAccidentSummary.accident.vehicles[0].claims[0].claimServiceProviders.length == 0) {
          let serviceProviderType: string[] = [];
          serviceProviderType.push('00080'); //For Under Trial
          serviceProviderType.push('00110'); //For Lawyer
          serviceProviderType.push('00130'); //For District Court
          serviceProviderType.push('00140'); //For Investigation Company
          for (let index = 0; index < 4; index++) {
            let claimServiceProvider: ClaimServiceProvider = new ClaimServiceProvider();
            claimServiceProvider.serviceProviderType = serviceProviderType[index];
            claimAccidentSummary.accident.vehicles[0].claims[0].claimServiceProviders.push(claimServiceProvider);
          }
        } else {
          let serviceProviderType: string[] = [];
          serviceProviderType.push('00080'); //For Under Trial
          serviceProviderType.push('00110'); //For Lawyer
          serviceProviderType.push('00130'); //For District Court
          serviceProviderType.push('00140'); //For Investigation Company
          for (let index = 0; index < 4; index++) {
            let claimServiceProvider: ClaimServiceProvider = new ClaimServiceProvider();
            if (claimAccidentSummary.accident.vehicles[0].claims[0].claimServiceProviders.find((value: ClaimServiceProvider) => value.serviceProviderType == serviceProviderType[index]) == undefined) {
              claimServiceProvider.serviceProviderType = serviceProviderType[index];
              claimAccidentSummary.accident.vehicles[0].claims[0].claimServiceProviders.push(claimServiceProvider);
            }
          }
        }
        return _.cloneDeep(claimAccidentSummary);
      }
    }
  }
}
