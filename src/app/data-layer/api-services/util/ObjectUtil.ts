import {FraudCheck} from "../../../business-layer/models/FraudCheck";
import {LoginData} from "../../../business-layer/models/LoginData";
import {Claim} from "../../../business-layer/models/Claim";
import {IndependentReviewChecklist} from "../../../business-layer/models/IndependentReviewChecklist";

export class ObjectUtil {


  constructor() {

  }


  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/

  static reviver(key, value) {
    const dateFormat1 = /^\d{4}-\d{2}-\d{2}$/;
    if (dateFormat1.test(value)) {
      return new Date(value);
    }
    return value;
  }

  static getFraudCheckArray(claimAssessmentID,loginData:LoginData): FraudCheck[] {
    let array: FraudCheck[] = [];
    loginData.checklist.forEach((value, index) => {
      if (value.rowType == 'C') {
        let fraudCheck: FraudCheck = new FraudCheck();
        fraudCheck.fraudCheckDescription = value.description;
        fraudCheck.score = value.score;
        fraudCheck.fraudCheckIndicator = false;
        fraudCheck.fraudCheckPoint = value.score;
        fraudCheck.order = index++;
        fraudCheck.conditionChecklistID = value.conditionChecklistID;
        fraudCheck.claimAssessmentID = claimAssessmentID;
        array.push(fraudCheck);
      }
    });
    return array;
  }

  static getIndependentReviewArray(loginData: LoginData, claim: Claim): IndependentReviewChecklist[] {
    let array: IndependentReviewChecklist[] = [];
    loginData.checklist.forEach((value, index) => {
      if (value.rowType == 'L') {
        let independentReviewChecklist: IndependentReviewChecklist = new IndependentReviewChecklist();
        independentReviewChecklist.checklistDescription = value.description;
        independentReviewChecklist.checklistIndicator = false;
        independentReviewChecklist.order = index++;
        independentReviewChecklist.conditionChecklistID = value.conditionChecklistID;
        independentReviewChecklist.claimAssessmentID = claim.quantamAssessment.claimAssessmentID;
        array.push(independentReviewChecklist);
      }
    });
    return array;
  }

  static totalAmountCalculations(graphArray: any[], columnName: string) {
    let sum = 0;
    graphArray.forEach(value => {
      sum += value[columnName];
    });
    return sum;
  }

  static nullCaseHandler(key) {
    if (key) {
      return true;
    } else {
      return false;
    }
  }

  static lookupHandler(key) {
    if (key == true) {
      return 'T';
    } else {
      return 'F';
    }
  }

  static lookupHandlerReverse(key) {
    if (key == 'T') {
      return true;
    } else {
      return false;
    }
  }

  static daysCalculation(startDate) {
    if (startDate !== undefined) {
      return (new Date(new Date().toDateString()).getTime() - new Date(new Date(startDate).toDateString()).getTime()) / (1000 * 3600 * 24);
    } else {
      return 0;
    }
  }

  static isEmpty(param: string): boolean {
    return param === '' || param == null; // return true if is empty
  }

}
