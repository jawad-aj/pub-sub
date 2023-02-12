/**
 * Created by Jawad  on 14/11/2020.
 */

import {Injectable} from '@angular/core';
import {BrokerAction} from '../../pubsub-broker/models/broker.action.model';
import {Store} from '@ngrx/store';
import {BrokerList} from './brokerlist';
import {GlobalState} from '../../../data-layer/store/reducers';
import * as pdfActions from '../../../data-layer/store/actions/pdf.actions';
import * as pdfActionsTypes from '../../shared-types/actions/pdf.action.types';
import {JsonData} from '../../models/JsonData';
import {LoginDataService} from '../../services/login-data.service';
import {ClaimAccidentSummaryService} from '../../services/claimAccidentSummary.service';
import {VehicleSummaryService} from '../../services/vehicle-summary.service';
import {ClaimSummaryService} from '../../services/claim-summary.service';
import {BrokerActionPayLoad} from '../../../data-layer/api-services/models/BrokerActionPayLoad';
import {CmsParams} from '../../models/CmsParams';
import {SelectedRowDataService} from '../../services/selected-row.service';
import {AccidentService} from '../../services/accident.service';
import {Vehicle} from '../../models/Vehicle';
import {Accident} from '../../models/Accident';
import * as _ from 'lodash-es';
import {Claim} from '../../models/Claim';
import {PdfCodeService} from '../../services/pdf-code.service';
import {AccidentPdfCodeService} from '../../services/accident-pdf-code.service';
import {ClaimCoversheetPdfCodeService} from '../../services/claim-coversheet-pdf-code.service';
import {AccidentCoversheetPdfCodeService} from '../../services/accident-coversheet-pdf-code.service';
import {LINVPdfCodeService} from '../../services/linv-pdf-code.service';

@Injectable()
export class BrokerPdfStore {
  brokerLabel: string = BrokerList.BROKER_PDF_STORE;
  r;

  constructor(private store: Store<GlobalState>, private loginData: LoginDataService, private claimAccidentSummary: ClaimAccidentSummaryService,
              private vehicleSummary: VehicleSummaryService, private claimSummary: ClaimSummaryService, private selectedRow: SelectedRowDataService,
              private accident: AccidentService, private pdfCode: PdfCodeService, private accidentPDF: AccidentPdfCodeService,
              private claimCoverSheetPDF: ClaimCoversheetPdfCodeService, private accidentCoverSheetPDFCodeService: AccidentCoversheetPdfCodeService,
              private linvPdfCodeService: LINVPdfCodeService) {
  }

  getComponentSupplies(): any {
    return Object.assign({
      brokerLabel: this.brokerLabel,
      storeObs: {}
    });
  }

  dispatchAction(brokerAction: BrokerAction): void {
    switch (brokerAction.actionType) {
      case pdfActionsTypes.GET_PDF_CODE:
        this.store.dispatch(pdfActions.loadPDFCode({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_LINV_PDF_CODE:
        this.store.dispatch(pdfActions.loadLINVPDFCode({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_ACCIDENT_PDF_CODE:
        this.store.dispatch(pdfActions.loadAccidentPDFCode({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_COVER_SHEET_PDF_CODE:
        this.store.dispatch(pdfActions.loadClaimCoverSheetPDFCode({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_ACCIDENT_COVER_SHEET_PDF_CODE:
        this.store.dispatch(pdfActions.loadAccidentCoverSheetPDFCode({data: brokerAction.payLoad}));
        break;
      /** **************************CLAIM LETTER PDF****************************************** **/
      case pdfActionsTypes.IMPLICIT_SAVE_CLAIM_LETTER_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveClaimLetterPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_LETTER_PDF:
        let letterPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        letterPayload.data = this.generatePDF(this.pdfCode.getCode());
        letterPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateClaimPDF({data: letterPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_CLAIM_LETTER_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveClaimLetterPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************CLAIM LINV LETTER PDF****************************************** **/
      case pdfActionsTypes.IMPLICIT_SAVE_CLAIM_LINV_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveClaimLINVPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_LINV_LETTER_PDF:
        let letterLINVPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        letterLINVPayload.data = this.generateLINVPDF(this.linvPdfCodeService.getCode().code, this.linvPdfCodeService.getCode().letterCode);
        letterLINVPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateClaimLINVPDF({data: letterLINVPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_CLAIM_LINV_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveClaimLINVPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************CLAIM OFFER LETTER PDF****************************************** **/
      case pdfActionsTypes.IMPLICIT_SAVE_CLAIM_OFFER_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveClaimOfferLetterPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_OFFER_LETTER_PDF:
        let letterClaimOfferPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        letterClaimOfferPayload.data = this.generateClaimOfferPDF(this.pdfCode.getCode());
        letterClaimOfferPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateClaimOfferLetterPDF({data: letterClaimOfferPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_CLAIM_OFFER_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveClaimOfferLetterPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************CLAIM GRID PDF****************************************** **/
      case pdfActionsTypes.IMPLICIT_SAVE_CLAIM_GRID_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveClaimGridPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_GRID_PDF:
        let payload: BrokerActionPayLoad = new BrokerActionPayLoad();
        payload.data = this.generateGridPdf(this.pdfCode.getCode());
        payload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateClaimGridPDF({data: payload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_CLAIM_GRID_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveClaimGridPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************CLAIM REVISION PDF****************************************** **/
      case pdfActionsTypes.IMPLICIT_SAVE_CLAIM_REVISION_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveClaimRevisionPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_REVISION_PDF:
        let revisionPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        revisionPayload.data = this.generateRevisionPDF(this.pdfCode.getCode());
        revisionPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateClaimRevisionPDF({data: revisionPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_CLAIM_REVISION_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveClaimRevisionPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************CLAIM COVER SHEET PDF****************************************** **/
      case pdfActionsTypes.IMPLICIT_SAVE_CLAIM_COVER_SHEET_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveClaimCoverSheetPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_CLAIM_COVER_SHEET_PDF:
        let coverSheetPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        coverSheetPayload.data = this.coverSheetPDF(this.claimCoverSheetPDF.getCode());
        coverSheetPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateClaimPDF({data: coverSheetPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_CLAIM_COVER_SHEET_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveClaimHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveClaimCoverSheetPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************ACCIDENT LETTER PDF****************************************** **/

      case pdfActionsTypes.IMPLICIT_SAVE_ACCIDENT_LETTER_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveAccidentHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveAccidentLetterPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_ACCIDENT_LETTER_PDF:
        let letterAccidentPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        letterAccidentPayload.data = this.generateAccidentPDF(this.accidentPDF.getCode().letterType, this.accidentPDF.getCode().vehicleIndex, this.accidentPDF.getCode().claimIndex);
        letterAccidentPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadGenerateAccidentPDF({data: letterAccidentPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_ACCIDENT_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveAccidentHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveAccidentLetterPDFApplication({data: brokerAction.payLoad}));
        break;
      /** **************************Accident COVER SHEET PDF****************************************** **/

      case pdfActionsTypes.IMPLICIT_SAVE_ACCIDENT_COVER_SHEET_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitSaveAccidentHandler();
        this.store.dispatch(pdfActions.loadImplicitSaveAccidentCoverSheetPDFApplication({data: brokerAction.payLoad}));
        break;
      case pdfActionsTypes.GET_ACCIDENT_COVER_SHEET_PDF:
        let accidentCoverSheetPayload: BrokerActionPayLoad = new BrokerActionPayLoad();
        accidentCoverSheetPayload.data = this.accidentCoverSheetPDF(this.accidentCoverSheetPDFCodeService.getCode());
        accidentCoverSheetPayload.serviceUtilParam = brokerAction.payLoad.serviceUtilParam;
        this.store.dispatch(pdfActions.loadAccidentCoverSheetPDF({data: accidentCoverSheetPayload}));
        break;
      case pdfActionsTypes.IMPLICIT_RETRIEVE_ACCIDENT_COVER_SHEET_PDF_APPLICATION:
        brokerAction.payLoad.data = this.implicitRetrieveAccidentHandler();
        this.store.dispatch(pdfActions.loadImplicitRetrieveAccidentCoverSheetPDFApplication({data: brokerAction.payLoad}));
        break;

    }
  }

  implicitSaveClaimHandler(): JsonData {
    let jsonData: JsonData = new JsonData();
    jsonData.paramStr = this.loginData.getCompleteLoginName();
    jsonData.paramInt1 = this.loginData.getProperty('userID');
    jsonData.accident = this.claimAccidentSummary.getAccident();
    return jsonData;
  }

  implicitRetrieveClaimHandler(): CmsParams {
    let cmsParams: CmsParams = new CmsParams();
    cmsParams.paramLong1 = this.selectedRow.getProperty('accidentID');
    cmsParams.paramLong2 = this.selectedRow.getProperty('vehicleID');
    cmsParams.paramLong3 = this.selectedRow.getProperty('claimID');
    cmsParams.paramLong4 = this.loginData.getProperty('userID');
    cmsParams.paramStr1 = this.loginData.getCompleteLoginName();
    return cmsParams;
  }

  implicitRetrieveAccidentHandler(): CmsParams {
    let cmsParams: CmsParams = new CmsParams();
    cmsParams.paramLong1 = this.accident.getAccident().accidentID;
    cmsParams.paramStr1 = this.loginData.getCompleteLoginName();
    return cmsParams;
  }

  implicitSaveAccidentHandler(): JsonData {
    let payload: JsonData = new JsonData();
    payload.paramStr = this.loginData.getCompleteLoginName();
    payload.paramInt1 = this.loginData.getProperty('userID');
    payload.accident = this.accident.getAccident();
    return payload;
  }

  /**
   * GridPDFHandler
   */
  generateGridPdf(xslIndicator: string): JsonData {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    jsonData.printBrief.vehicleID = this.claimAccidentSummary.getAccident().vehicles[0].vehicleID;
    jsonData.printBrief.accidentNumber = this.claimAccidentSummary.getAccident().accidentNumber;
    jsonData.downloadProcessorParams.accidentID = this.claimAccidentSummary.getAccident().accidentID;
    jsonData.downloadProcessorParams.claimID = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].claimID;
    jsonData.downloadProcessorParams.requestType = 'REPORT';
    jsonData.downloadProcessorParams.xslIndicators.push(xslIndicator);
    if (xslIndicator === 'CLS') {
      jsonData.summaryParam.claimSummary = this.claimSummary.getClaimSummary();
    } else if (xslIndicator === 'VES') {
      jsonData.summaryParam.vehicleSummary = this.vehicleSummary.getVehicleSummary();
    } else {
      jsonData.summaryParam.accidentSummary = this.claimAccidentSummary.getClaimAccidentSummary().accidentSummary;
    }
    return jsonData;
  }

  /**
   * RevisionPDFHandler
   */
  generateRevisionPDF(letterType: string) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.vehicleID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].vehicleID;
    jsonData.printBrief.userID = this.referenceNumberHandling();
    jsonData.printBrief.accidentNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentNumber;
    jsonData.printBrief.claimNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimNumber;
    jsonData.downloadProcessorParams.claimID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimID;
    jsonData.downloadProcessorParams.accidentID = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentID;
    jsonData.downloadProcessorParams.userName = this.loginData.getProperty('loginName');
    jsonData.downloadProcessorParams.requestType = 'REVISION';
    if (letterType === 'IA') {
      jsonData.printBrief.letterType = 'IA';
      jsonData.downloadProcessorParams.revisionEntityID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].initialAssessment.initialAssessmentID;
      jsonData.downloadProcessorParams.xslIndicators.push('HL');
    } else if (letterType === 'OH') {
      jsonData.printBrief.letterType = 'OH';
      jsonData.downloadProcessorParams.revisionEntityID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].companyOffer.claimOfferID;
      jsonData.downloadProcessorParams.xslIndicators.push('LH');
    } else {
      jsonData.printBrief.letterType = 'CO';
      jsonData.downloadProcessorParams.revisionEntityID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].companyOffer.claimOfferID;
      jsonData.downloadProcessorParams.xslIndicators.push('HL');
    }
    return jsonData;
  }

  /**
   * LetterPDFHandler
   */
  generateClaimOfferPDF(xslIndicator: string) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    jsonData.printBrief.claimNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimNumber;
    jsonData.printBrief.designation = this.loginData.getProperty('logonCodes').find(value => value.data == this.loginData.getProperty('logonCode')).label;
    jsonData.downloadProcessorParams.accidentID = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentID;
    jsonData.downloadProcessorParams.claimID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimID;
    jsonData.printBrief.vehicleID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].vehicleID;
    jsonData.downloadProcessorParams.requestType = 'LETTER';
    jsonData.downloadProcessorParams.letterType = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].offerType;
    jsonData.downloadProcessorParams.offerAmount = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].offerAmount;
    jsonData.downloadProcessorParams.subsequentCounter = this.claimAccidentSummary.getAccident().vehicles[0].claims[0].subsequentCount;
    jsonData.downloadProcessorParams.xslIndicators.push(xslIndicator);
    jsonData.accident = this.claimAccidentSummary.getAccident();
    return jsonData;
  }

  generatePDF(xslIndicator: string) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    jsonData.printBrief.claimNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimNumber;
    jsonData.printBrief.designation = this.loginData.getProperty('logonCodes').find(value => value.data == this.loginData.getProperty('logonCode')).label;
    jsonData.downloadProcessorParams.accidentID = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentID;
    jsonData.downloadProcessorParams.claimID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimID;
    jsonData.printBrief.vehicleID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].vehicleID;
    jsonData.downloadProcessorParams.requestType = 'REPORT';
    jsonData.downloadProcessorParams.xslIndicators.push(xslIndicator);
    if (xslIndicator === 'L12' || xslIndicator === 'L12.1' || xslIndicator === 'L12.2' || xslIndicator === 'L12B' || xslIndicator === 'L12.1B' || xslIndicator === 'L12.2B') {
      jsonData.downloadProcessorParams.xslIndicators.push(this.doublePDF(xslIndicator));
    }
    jsonData.accident = this.claimAccidentSummary.getAccident();
    return jsonData;
  }

  doublePDF(xslIndicator) {
    let letterCode: string = '';
    if (xslIndicator == 'L12' || xslIndicator == 'L12.1' || xslIndicator == 'L12.2') {
      if (this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimant.age < 17) {
        letterCode = 'D2';
      } else if (this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimant.age >= 17) {
        letterCode = 'D1';
      }
    } else if (xslIndicator == 'L12B' || xslIndicator == 'L12.1B' || xslIndicator == 'L12.2B') {
      if (this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimant.age < 17) {
        letterCode = 'D4';
      } else if (this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimant.age >= 17) {
        letterCode = 'D3';
      }
    }
    return letterCode;
  }

  /**
   * LetterLINVPDFHandler
   */
  generateLINVPDF(xslIndicator: string, code: string) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    jsonData.printBrief.claimNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimNumber;
    jsonData.printBrief.letterType = code;
    jsonData.printBrief.designation = this.loginData.getProperty('logonCodes').find(value => value.data == this.loginData.getProperty('logonCode')).label;
    jsonData.downloadProcessorParams.accidentID = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentID;
    jsonData.downloadProcessorParams.claimID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimID;
    jsonData.printBrief.vehicleID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].vehicleID;
    jsonData.downloadProcessorParams.requestType = 'REPORT';
    jsonData.downloadProcessorParams.xslIndicators.push(xslIndicator);
    jsonData.accident = this.claimAccidentSummary.getAccident();
    if (xslIndicator === 'LINV') {
      if (code === 'L1') {
        jsonData.downloadProcessorParams.customLetterName = 'Instruction Letter for Investigators';
      } else if (code === 'L2') {
        jsonData.downloadProcessorParams.customLetterName = 'First Follow up to Complete Investigation';
      } else if (code === 'L3') {
        jsonData.downloadProcessorParams.customLetterName = 'Second Follow up to Completed Investigation';
      }
    }
    return jsonData;
  }

  generateAccidentPDF(xslIndicator: string, vehicleIndex?: number, claimIndex?: number, code?,) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    if (claimIndex) {
      jsonData.printBrief.claimNumber = this.accident.getAccident().vehicles[vehicleIndex].claims[claimIndex].claimNumber;
    }
    jsonData.printBrief.designation = this.loginData.getProperty('logonCodes').find(value => value.data == this.loginData.getProperty('logonCode')).label;
    jsonData.downloadProcessorParams.accidentID = this.accident.getAccident().accidentID;
    if (claimIndex) {
      jsonData.downloadProcessorParams.claimID = this.accident.getAccident().vehicles[vehicleIndex].claims[claimIndex].claimID;
    }
    jsonData.printBrief.vehicleID = this.accident.getAccident().vehicles[vehicleIndex].vehicleID;
    jsonData.downloadProcessorParams.requestType = 'REPORT';
    jsonData.downloadProcessorParams.xslIndicators.push(xslIndicator);
    if (!claimIndex) { //Vehicle PDF
      let vehicles: Vehicle[] = [];
      vehicles.push(this.accident.getAccident().vehicles[vehicleIndex]);
      let accident: Accident = _.cloneDeep(this.accident.getAccident());
      accident.vehicles = vehicles;
      jsonData.accident = accident;
    } else {
      let claims: Claim[] = [];
      claims.push(this.accident.getAccident().vehicles[0].claims[claimIndex]);
      let accident: Accident = _.cloneDeep(this.accident.getAccident());
      accident.vehicles[0].claims = claims;
      jsonData.accident = accident;
    }
    return jsonData;
  }

  /**
   * CoverSheetPDFHandler
   */
  coverSheetPDF(payload) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    jsonData.printBrief.claimNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimNumber;
    jsonData.printBrief.accidentNumber = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentNumber;
    jsonData.printBrief.indicator = payload.indicator;
    jsonData.printBrief.comments = payload.comments;
    jsonData.printBrief.designation = this.loginData.getProperty('logonCodes').find(value => value.data == this.loginData.getProperty('logonCode')).label;
    jsonData.downloadProcessorParams.accidentID = this.claimAccidentSummary.getClaimAccidentSummary().accident.accidentID;
    jsonData.downloadProcessorParams.claimID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].claims[0].claimID;
    jsonData.printBrief.vehicleID = this.claimAccidentSummary.getClaimAccidentSummary().accident.vehicles[0].vehicleID;
    jsonData.downloadProcessorParams.requestType = 'REPORT';
    jsonData.downloadProcessorParams.xslIndicators.push('FCS');
    return jsonData;
  }

  /**
   * CoverSheetPDFHandler
   */
  accidentCoverSheetPDF(payload) {
    let jsonData: JsonData = new JsonData();
    jsonData.printBrief.completeName = this.loginData.getCompleteLoginName();
    jsonData.printBrief.userID = this.referenceNumberHandling();
    if (payload.claimNumber) {
      jsonData.printBrief.claimNumber = payload.claimNumber;
    }
    jsonData.printBrief.accidentNumber = this.accident.getAccident().accidentNumber;
    jsonData.printBrief.indicator = payload.indicator;
    jsonData.printBrief.comments = payload.comments;
    jsonData.printBrief.designation = this.loginData.getProperty('logonCodes').find(value => value.data == this.loginData.getProperty('logonCode')).label;
    jsonData.downloadProcessorParams.accidentID = this.accident.getAccident().accidentID;
    if (payload.claimNumber) {
      jsonData.downloadProcessorParams.claimID = this.accident.getAccident().vehicles[0].claims.find(value => value.claimNumber === payload.claimNumber).claimID;
    }
    jsonData.downloadProcessorParams.requestType = 'REPORT';
    jsonData.downloadProcessorParams.xslIndicators.push('FCS');
    return jsonData;
  }

  referenceNumberHandling(): number {
    if (this.loginData.getProperty('securityQuestion')) {
      return this.loginData.getProperty('securityQuestion');
    } else {
      return this.loginData.getProperty('userID');
    }
  }
}
