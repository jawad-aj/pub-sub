import * as fromPDF from '../reducers/pdf-code.reducer';
import * as _ from 'lodash-es';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from '../reducers';

/**
 * PDFCode Selector
 */

export const selectPDFCode = createFeatureSelector<GlobalState, fromPDF.PDFCodeState>(fromPDF.pdfCodeFeatureKey);
export const pdfCodeSelector = createSelector(selectPDFCode, (pdfCodeState: fromPDF.PDFCodeState) => _.cloneDeep(pdfCodeState.pdfCode));

/**
 * PDFCode Selector
 */

export const selectLINVPDFCode = createFeatureSelector<GlobalState, fromPDF.PDFLINVCodeState>(fromPDF.pdfLINVCodeFeatureKey);
export const pdfLINVCodeSelector = createSelector(selectLINVPDFCode, (pdfLINVCodeState: fromPDF.PDFLINVCodeState) => _.cloneDeep(pdfLINVCodeState.pdfLINVCode));

/**
 * AccidentPDFCode Selector
 */

export const selectAccidentPDFCode = createFeatureSelector<GlobalState, fromPDF.AccidentPDFCodeState>(fromPDF.accidentPDFCodeFeatureKey);
export const accidentPDFCodeSelector = createSelector(selectAccidentPDFCode, (accidentPDFCodeState: fromPDF.AccidentPDFCodeState) => _.cloneDeep(accidentPDFCodeState.accidentPDFCode));

/**
 * ClaimCoverSheetPDFCode Selector
 */

export const selectClaimCoverSheetPDFCode = createFeatureSelector<GlobalState, fromPDF.ClaimCoverSheetPDFCodeState>(fromPDF.claimCoverSheetPDFCodeFeatureKey);
export const claimCoverSheetPDFCodeSelector = createSelector(selectClaimCoverSheetPDFCode, (claimCoverSheetPDFCodeState: fromPDF.ClaimCoverSheetPDFCodeState) => _.cloneDeep(claimCoverSheetPDFCodeState.claimCoverSheetPDFCode));

/**
 * AccidentCoverSheetPDFCode Selector
 */

export const selectAccidentCoverSheetPDFCode = createFeatureSelector<GlobalState, fromPDF.AccidentCoverSheetPDFCodeState>(fromPDF.accidentCoverSheetPDFCodeFeatureKey);
export const accidentCoverSheetPDFCodeSelector = createSelector(selectAccidentCoverSheetPDFCode, (accidentCoverSheetPDFCodeState: fromPDF.AccidentCoverSheetPDFCodeState) => _.cloneDeep(accidentCoverSheetPDFCodeState.accidentCoverSheetPDFCode));
