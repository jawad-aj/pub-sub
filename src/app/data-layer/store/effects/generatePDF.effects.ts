import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as pdfActions from '../actions/pdf.actions';
import {GeneratePdfService} from '../../api-services/generate-pdf.service';
import {HttpErrorResponse} from '@angular/common/http';
import {loadServiceFailure} from '../actions/service-failure.actions';
import {NotificationUtil} from '../../api-services/util/NotificationUtil';
import {ApplicationService} from '../../api-services/application.service';
import {WebsocketHandlerService} from '../../../business-layer/services/WebsocketHandler.service';
import {FooterStatusService} from '../../../business-layer/services/footerStatus.service';

@Injectable()
export class GeneratePDFEffects {
  /** ******************************PDF CODE EFFECTS**************************************** */
  /**
   * PDFCode
   */
  pdfCode$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadPDFCode),
    switchMap((action) => this.generatePdfService.pdfCode(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadPDFCodeSuccess, 'loadPDFCodeFailure', 'loadPDFCodeSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * LINVPDFCode
   */
  pdfLINVCode$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadLINVPDFCode),
    switchMap((action) => this.generatePdfService.pdfCode(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadLINVPDFCodeSuccess, 'loadLINVPDFCodeFailure', 'loadLINVPDFCodeSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * PDFCode
   */
  claimCoverSheetPDFCode$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadClaimCoverSheetPDFCode),
    switchMap((action) => this.generatePdfService.claimCoverSheetPDFCode(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadClaimCoverSheetPDFCodeSuccess, 'loadClaimCoverSheetPDFCodeFailure', 'loadClaimCoverSheetPDFCodeSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * AccidentPDFCode
   */
  accidentPDFCode$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadAccidentPDFCode),
    switchMap((action) => this.generatePdfService.accidentPDFCode(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadAccidentPDFCodeSuccess, 'loadAccidentPDFCodeFailure', 'loadAccidentPDFCodeSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * PDFCode
   */
  accidentCoverSheetPDFCode$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadAccidentCoverSheetPDFCode),
    switchMap((action) => this.generatePdfService.accidentCoverSheetPDFCodeCall(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadAccidentCoverSheetPDFCodeSuccess, 'loadAccidentCoverSheetPDFCodeFailure', 'loadAccidentCoverSheetPDFCodeSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************CLAIM LETTER PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveClaimLetterPDFApplication$
   */
  implicitSaveClaimLetterPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveClaimLetterPDFApplication),
    switchMap((action) => this.generatePdfService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, pdfActions.loadImplicitSaveClaimLetterPDFApplicationSuccess, 'Claim can not be updated.', 'loadImplicitSaveClaimLetterPDFApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimLetterPDFApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * GeneratePDF
   */
  generatePDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadGenerateClaimPDF),
    switchMap((action) => this.generatePdfService.generatePDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadGenerateClaimPDFSuccess, 'PDF can not be printed.', 'loadGenerateClaimPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveClaimLetterPDFApplication$
   */
  implicitRetrieveClaimLetterPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveClaimLetterPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, pdfActions.loadImplicitRetrieveClaimLetterPDFApplicationSuccess, 'Claim can not be retrieved.', 'loadImplicitRetrieveClaimLetterPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************CLAIM OFFER LETTER PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveClaimOfferLetterPDFApplication$
   */
  implicitSaveClaimOfferLetterPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveClaimOfferLetterPDFApplication),
    switchMap((action) => this.generatePdfService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, pdfActions.loadImplicitSaveClaimOfferLetterPDFApplicationSuccess, 'Claim can not be updated.', 'loadImplicitSaveClaimOfferLetterPDFApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimOfferLetterPDFApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * GeneratePDF
   */
  generateClaimOfferPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadGenerateClaimOfferLetterPDF),
    switchMap((action) => this.generatePdfService.generatePDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadGenerateClaimOfferLetterPDFSuccess, 'PDF can not be printed.', 'loadGenerateClaimOfferLetterPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveClaimOfferLetterPDFApplication$
   */
  implicitRetrieveClaimOfferLetterPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveClaimOfferLetterPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, pdfActions.loadImplicitRetrieveClaimOfferLetterPDFApplicationSuccess, 'Claim can not be retrieved.', 'loadImplicitRetrieveClaimOfferLetterPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************CLAIM LETTER LINV PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveClaimLINVPDFApplication$
   */
  implicitSaveClaimLINVPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveClaimLINVPDFApplication),
    switchMap((action) => this.generatePdfService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, pdfActions.loadImplicitSaveClaimLINVPDFApplicationSuccess, 'Claim can not be updated.', 'loadImplicitSaveClaimLINVPDFApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimLINVPDFApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * GenerateLINVPDF
   */
  generateLINVPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadGenerateClaimLINVPDF),
    switchMap((action) => this.generatePdfService.generatePDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadGenerateClaimLINVPDFSuccess, 'PDF can not be printed.', 'loadGenerateClaimLINVPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveClaimLINVPDFApplication$
   */
  implicitRetrieveClaimLINVPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveClaimLINVPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, pdfActions.loadImplicitRetrieveClaimLINVPDFApplicationSuccess, 'Claim can not be retrieved.', 'loadImplicitRetrieveClaimLINVPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************CLAIM GRID PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveClaimGridPDFApplication$
   */
  implicitSaveClaimGridPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveClaimGridPDFApplication),
    switchMap((action) => this.generatePdfService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, pdfActions.loadImplicitSaveClaimGridPDFApplicationSuccess, 'Claim can not be updated.', 'loadImplicitSaveClaimGridPDFApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimGridPDFApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * GenerateGridPDF
   */
  generateGridPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadGenerateClaimGridPDF),
    switchMap((action) => this.generatePdfService.generateGridPDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadGenerateClaimGridPDFSuccess, 'PDF can not be printed.', 'loadGenerateClaimGridPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveClaimGridPDFApplication$
   */
  implicitRetrieveClaimGridPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveClaimGridPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, pdfActions.loadImplicitRetrieveClaimGridPDFApplicationSuccess, 'Claim can not be retrieved.', 'loadImplicitRetrieveClaimGridPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************CLAIM REVISIONS PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveClaimRevisionPDFApplication$
   */
  implicitSaveClaimRevisionPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveClaimRevisionPDFApplication),
    switchMap((action) => this.generatePdfService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, pdfActions.loadImplicitSaveClaimRevisionPDFApplicationSuccess, 'Claim can not be updated.', 'loadImplicitSaveClaimRevisionPDFApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimRevisionPDFApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  /**
   * GenerateRevisionPDF
   */
  generateRevisionPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadGenerateClaimRevisionPDF),
    switchMap((action) => this.generatePdfService.generateRevisionPDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadGenerateClaimRevisionPDFSuccess, 'PDF can not be printed.', 'loadGenerateClaimRevisionPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveClaimRevisionPDFApplication$
   */
  implicitRetrieveClaimRevisionPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveClaimRevisionPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, pdfActions.loadImplicitRetrieveClaimRevisionPDFApplicationSuccess, 'Claim can not be retrieved.', 'loadImplicitRetrieveClaimRevisionPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************ACCIDENT LETTER PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveAccidentLetterPDFApplication$
   */
  implicitSaveAccidentLetterPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveAccidentLetterPDFApplication),
    switchMap((action) => this.generatePdfService.updateAccidentCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, pdfActions.loadImplicitSaveAccidentLetterPDFApplicationSuccess, 'Accident can not be updated.', 'loadImplicitSaveAccidentLetterPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * GenerateAccidentPDF
   */
  generateAccidentPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadGenerateAccidentPDF),
    switchMap((action) => this.generatePdfService.generatePDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadGenerateAccidentPDFSuccess, 'PDF can not be printed.', 'loadGenerateAccidentPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveAccidentLetterPDFApplication$
   */
  implicitRetrieveAccidentLetterPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveAccidentLetterPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveAccidentCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, pdfActions.loadImplicitRetrieveAccidentLetterPDFApplicationSuccess, 'Accident can not be retrieved.', 'loadImplicitRetrieveAccidentLetterPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************CLAIM COVER SHEET PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveClaimCoverSheetPDFApplication$
   */
  implicitSaveClaimCoverSheetPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveClaimCoverSheetPDFApplication),
    switchMap((action) => this.generatePdfService.updateClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          response = this.notificationUtil.notificationHandler(response, 'application');
          const obj = this.notificationUtil.successCheck('application', response, pdfActions.loadImplicitSaveClaimCoverSheetPDFApplicationSuccess, 'PDF can not be printed.', 'loadImplicitSaveClaimCoverSheetPDFApplicationSuccess');
          if (this.footerService.getFooter()['websocketStatus'] === 'WS: Connected') {
            this.websocketHandlerService.sendWebsocketMessage(obj.data['notificationSuccess'], 'ImplicitSaveClaimCoverSheetPDFApplicationSuccess');
          }
          return obj;
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ClaimCoverSheetPDF
   */
  generateClaimCoverSheetPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadClaimCoverSheetPDF),
    switchMap((action) => this.generatePdfService.generateCoverSheetPDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadClaimCoverSheetPDFSuccess, 'PDF can not be printed.', 'loadClaimCoverSheetPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveClaimCoverSheetPDFApplication$
   */
  implicitRetrieveClaimCoverSheetPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveClaimCoverSheetPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveClaimCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'application');
          return this.notificationUtil.successCheck('application', obj, pdfActions.loadImplicitRetrieveClaimCoverSheetPDFApplicationSuccess, 'Claim can not be retrieved.', 'loadImplicitRetrieveClaimCoverSheetPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /** ******************************ACCIDENT COVER SHEET PDF EFFECTS**************************************** */
  /**
   * ImplicitSaveAccidentCoverSheetPDFApplication$
   */
  implicitSaveAccidentCoverSheetPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitSaveAccidentCoverSheetPDFApplication),
    switchMap((action) => this.generatePdfService.updateAccidentCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, pdfActions.loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess, 'Accident can not be updated.', 'loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * AccidentCoverSheetPDF
   */
  generateAccidentCoverSheetPDF$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadAccidentCoverSheetPDF),
    switchMap((action) => this.generatePdfService.generateCoverSheetPDFCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'pdf');
          return this.notificationUtil.successCheck('pdf', obj, pdfActions.loadAccidentCoverSheetPDFSuccess, 'PDF can not be printed.', 'loadAccidentCoverSheetPDFSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );
  /**
   * ImplicitRetrieveAccidentCoverSheetPDFApplication$
   */
  implicitRetrieveAccidentCoverSheetPDFApplication$ = createEffect(() => this.actions$.pipe(
    ofType(pdfActions.loadImplicitRetrieveAccidentCoverSheetPDFApplication),
    switchMap((action) => this.generatePdfService.retrieveAccidentCmsh5(action.data)
      .pipe(
        map((response) => {
          let obj = this.notificationUtil.notificationHandler(response, 'accident');
          return this.notificationUtil.successCheck('accident', obj, pdfActions.loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess, 'Accident can not be retrieved.', 'loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess');
        }),
        catchError((err: HttpErrorResponse) => of({type: loadServiceFailure.type, error: err.message})))
    ))
  );

  constructor(private  actions$: Actions, private generatePdfService: GeneratePdfService,
              private applicationService: ApplicationService, private notificationUtil: NotificationUtil,
              private websocketHandlerService: WebsocketHandlerService, private footerService: FooterStatusService) {
  }
}
