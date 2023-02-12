import {Action, createReducer, on} from '@ngrx/store';
import {loadDownloadSupportingDocumentsSuccess, loadResetFileURL} from '../actions/attachment.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {loadLogout} from '../actions/logout.actions';
import {
  loadAccidentCoverSheetPDFSuccess,
  loadClaimCoverSheetPDFSuccess,
  loadGenerateAccidentPDFSuccess,
  loadGenerateClaimGridPDFSuccess, loadGenerateClaimLINVPDFSuccess, loadGenerateClaimOfferLetterPDFSuccess,
  loadGenerateClaimPDFSuccess,
  loadGenerateClaimRevisionPDFSuccess
} from '../actions/pdf.actions';

/**
 * FileURL Reducer
 */
export const fileURLFeatureKey = 'fileURL';

export interface FileURLState {
  readonly fileURL: any;
}

export const initialState: FileURLState = {
  fileURL: undefined,
};

const fileURLStateReducer = createReducer(
  initialState,
  on(loadDownloadSupportingDocumentsSuccess, (FileURLState, {data}) => ({fileURL: data.downloadSupportingDocument})),
  on(loadGenerateClaimPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadGenerateClaimLINVPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadGenerateClaimGridPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadGenerateClaimRevisionPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadGenerateAccidentPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadClaimCoverSheetPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadGenerateClaimOfferLetterPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadAccidentCoverSheetPDFSuccess, (FileURLState, {data}) => ({fileURL: data.pdf})),
  on(loadResetFileURL, (FileURLState, {data}) => ({fileURL: undefined})),
  on(loadExitApplication, (FileURLState, {data}) => ({fileURL: data})),
  on(loadLogout, (FileURLState, {data}) => ({fileURL: data})),
);

export function fileURLReducer(FileURLState: FileURLState | undefined, action: Action) {
  return fileURLStateReducer(FileURLState, action);
}


