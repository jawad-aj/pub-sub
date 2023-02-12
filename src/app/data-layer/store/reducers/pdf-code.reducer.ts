import {Action, createReducer, on} from '@ngrx/store';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadLogout} from '../actions/logout.actions';
import {
  loadAccidentCoverSheetPDFCodeSuccess,
  loadAccidentPDFCodeSuccess,
  loadClaimCoverSheetPDFCodeSuccess, loadLINVPDFCodeSuccess,
  loadPDFCodeSuccess
} from '../actions/pdf.actions';

/**
 * PDFCode Reducer
 */
export const pdfCodeFeatureKey = 'pdfCode';


export interface PDFCodeState {
  readonly pdfCode: string;
}


export const pdfCodeInitialState: PDFCodeState = {
  pdfCode: undefined,
};


const pdfCodeStateReducer = createReducer(
  pdfCodeInitialState,
  on(loadPDFCodeSuccess, (pdfCodeState, {data}) => ({pdfCode: data.pdf})),
  on(loadExitApplication, (pdfCodeState, {data}) => ({pdfCode: data})),
  on(loadLogout, (pdfCodeState, {data}) => ({pdfCode: data})),
);


export function pdfCodeReducer(pdfCodeState: PDFCodeState | undefined, action: Action) {
  return pdfCodeStateReducer(pdfCodeState, action);
}

/**
 * PDFLINVCode Reducer
 */
export const pdfLINVCodeFeatureKey = 'pdfLINVCode';


export interface PDFLINVCodeState {
  readonly pdfLINVCode: string;
}


export const pdfLINVCodeInitialState: PDFLINVCodeState = {
  pdfLINVCode: undefined,
};


const pdfLINVCodeStateReducer = createReducer(
  pdfLINVCodeInitialState,
  on(loadLINVPDFCodeSuccess, (pdfLINVCodeState, {data}) => ({pdfLINVCode: data.pdf})),
  on(loadExitApplication, (pdfLINVCodeState, {data}) => ({pdfLINVCode: data})),
  on(loadLogout, (pdfLINVCodeState, {data}) => ({pdfLINVCode: data})),
);


export function pdfLINVCodeReducer(pdfLINVCodeState: PDFLINVCodeState | undefined, action: Action) {
  return pdfLINVCodeStateReducer(pdfLINVCodeState, action);
}
/**
 * AccidentPDFCode Reducer
 */
export const accidentPDFCodeFeatureKey = 'accidentPDFCode';


export interface AccidentPDFCodeState {
  readonly accidentPDFCode: string;
}


export const accidentPDFCodeInitialState: AccidentPDFCodeState = {
  accidentPDFCode: undefined,
};


const accidentPDFCodeStateReducer = createReducer(
  accidentPDFCodeInitialState,
  on(loadAccidentPDFCodeSuccess, (accidentPDFCodeState, {data}) => ({accidentPDFCode: data.pdf})),
  on(loadExitApplication, (accidentPDFCodeState, {data}) => ({accidentPDFCode: data})),
  on(loadLogout, (accidentPDFCodeState, {data}) => ({accidentPDFCode: data})),
);


export function accidentPDFCodeReducer(accidentPDFCodeState: AccidentPDFCodeState | undefined, action: Action) {
  return accidentPDFCodeStateReducer(accidentPDFCodeState, action);
}

/**
 * ClaimCoverSheetPDFCode Reducer
 */
export const claimCoverSheetPDFCodeFeatureKey = 'claimCoverSheetPDFCode';


export interface ClaimCoverSheetPDFCodeState {
  readonly claimCoverSheetPDFCode: string;
}


export const claimCoverSheetPDFCodeInitialState: ClaimCoverSheetPDFCodeState = {
  claimCoverSheetPDFCode: undefined,
};


const claimCoverSheetPDFCodeStateReducer = createReducer(
  claimCoverSheetPDFCodeInitialState,
  on(loadClaimCoverSheetPDFCodeSuccess, (claimCoverSheetPDFCodeState, {data}) => ({claimCoverSheetPDFCode: data.pdf})),
  on(loadExitApplication, (claimCoverSheetPDFCodeState, {data}) => ({claimCoverSheetPDFCode: data})),
  on(loadLogout, (claimCoverSheetPDFCodeState, {data}) => ({claimCoverSheetPDFCode: data})),
);


export function claimCoverSheetPDFCodeReducer(claimCoverSheetPDFCodeState: ClaimCoverSheetPDFCodeState | undefined, action: Action) {
  return claimCoverSheetPDFCodeStateReducer(claimCoverSheetPDFCodeState, action);
}

/**
 * AccidentCoverSheetPDFCode Reducer
 */
export const accidentCoverSheetPDFCodeFeatureKey = 'accidentCoverSheetPDFCode';


export interface AccidentCoverSheetPDFCodeState {
  readonly accidentCoverSheetPDFCode: string;
}


export const accidentCoverSheetPDFCodeInitialState: AccidentCoverSheetPDFCodeState = {
  accidentCoverSheetPDFCode: undefined,
};


const accidentCoverSheetPDFCodeStateReducer = createReducer(
  accidentCoverSheetPDFCodeInitialState,
  on(loadAccidentCoverSheetPDFCodeSuccess, (accidentCoverSheetPDFCodeState, {data}) => ({accidentCoverSheetPDFCode: data.pdf})),
  on(loadExitApplication, (accidentCoverSheetPDFCodeState, {data}) => ({accidentCoverSheetPDFCode: data})),
  on(loadLogout, (accidentCoverSheetPDFCodeState, {data}) => ({accidentCoverSheetPDFCode: data})),
);


export function accidentCoverSheetPDFCodeReducer(accidentCoverSheetPDFCodeState: AccidentCoverSheetPDFCodeState | undefined, action: Action) {
  return accidentCoverSheetPDFCodeStateReducer(accidentCoverSheetPDFCodeState, action);
}
