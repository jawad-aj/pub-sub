import {createAction, props} from '@ngrx/store';

/** ********************************PDF Code********************************************* **/
/**
 * PDFCode
 */
export const loadPDFCode = createAction(
  '[PDF] Load PDFCode',
  props<{ data: any }>()
);

export const loadPDFCodeSuccess = createAction(
  '[PDF] Load PDFCode Success',
  props<{ data: any }>()
);
/** ********************************LINVPDFCode ********************************************* **/
/**
 * LINVPDFCode
 */
export const loadLINVPDFCode = createAction(
  '[PDF] Load LINVPDFCode',
  props<{ data: any }>()
);

export const loadLINVPDFCodeSuccess = createAction(
  '[PDF] Load LINVPDFCode Success',
  props<{ data: any }>()
);
/** ********************************ClaimCoverSheetPDFCode********************************************* **/
/**
 * ClaimCoverSheetPDFCode
 */
export const loadClaimCoverSheetPDFCode = createAction(
  '[PDF] Load ClaimCoverSheetPDFCode',
  props<{ data: any }>()
);

export const loadClaimCoverSheetPDFCodeSuccess = createAction(
  '[PDF] Load ClaimCoverSheetPDFCode Success',
  props<{ data: any }>()
);
/** ********************************AccidentPDF Code********************************************* **/
/**
 * AccidentPDFCode
 */
export const loadAccidentPDFCode = createAction(
  '[AccidentPDF] Load AccidentPDFCode',
  props<{ data: any }>()
);

export const loadAccidentPDFCodeSuccess = createAction(
  '[AccidentPDF] Load AccidentPDFCode Success',
  props<{ data: any }>()
);
/** ********************************AccidentCoverSheetPDFCode********************************************* **/
/**
 * AccidentCoverSheetPDFCode
 */
export const loadAccidentCoverSheetPDFCode = createAction(
  '[PDF] Load AccidentCoverSheetPDFCode',
  props<{ data: any }>()
);

export const loadAccidentCoverSheetPDFCodeSuccess = createAction(
  '[PDF] Load AccidentCoverSheetPDFCode Success',
  props<{ data: any }>()
);
/** ********************************Claim Letter********************************************* **/
/**
 *  ImplicitSaveClaimLetterPDFApplication
 */

export const loadImplicitSaveClaimLetterPDFApplication = createAction(
  '[Application] Load ImplicitSaveClaimLetterPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveClaimLetterPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimLetterPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveClaimLetterPDFApplication
 */

export const loadImplicitRetrieveClaimLetterPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveClaimLetterPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveClaimLetterPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveClaimLetterPDFApplication Success',
  props<{ data: any }>()
);
/**
 * GenerateClaimPDF
 */
export const loadGenerateClaimPDF = createAction(
  '[PDF] Load GenerateClaim PDF',
  props<{ data: any }>()
);

export const loadGenerateClaimPDFSuccess = createAction(
  '[PDF] Load GenerateClaim PDF Success',
  props<{ data: any }>()
);
/** ********************************Claim Offer Letter********************************************* **/
/**
 *  ImplicitSaveClaimOfferLetterPDFApplication
 */

export const loadImplicitSaveClaimOfferLetterPDFApplication = createAction(
  '[Application] Load ImplicitSaveClaimOfferLetterPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveClaimOfferLetterPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimOfferLetterPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveClaimOfferLetterPDFApplication
 */

export const loadImplicitRetrieveClaimOfferLetterPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveClaimOfferLetterPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveClaimOfferLetterPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveClaimOfferLetterPDFApplication Success',
  props<{ data: any }>()
);
/**
 * GenerateClaimOfferLetterPDF
 */
export const loadGenerateClaimOfferLetterPDF = createAction(
  '[PDF] Load GenerateClaimOfferLetter PDF',
  props<{ data: any }>()
);

export const loadGenerateClaimOfferLetterPDFSuccess = createAction(
  '[PDF] Load GenerateClaimOfferLetter PDF Success',
  props<{ data: any }>()
);

/** ********************************Claim LINV Letter********************************************* **/
/**
 *  ImplicitSaveClaimLINVPDFApplication
 */

export const loadImplicitSaveClaimLINVPDFApplication = createAction(
  '[Application] Load ImplicitSaveClaimLINVPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveClaimLINVPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimLINVPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveClaimLINVPDFApplication
 */

export const loadImplicitRetrieveClaimLINVPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveClaimLINVPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveClaimLINVPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveClaimLINVPDFApplication Success',
  props<{ data: any }>()
);
/**
 * GenerateClaimLINVPDF
 */
export const loadGenerateClaimLINVPDF = createAction(
  '[PDF] Load GenerateClaim LINVPDF',
  props<{ data: any }>()
);

export const loadGenerateClaimLINVPDFSuccess = createAction(
  '[PDF] Load GenerateClaim LINVPDF Success',
  props<{ data: any }>()
);
/** ********************************Claim Grid********************************************* **/
/**
 *  ImplicitSaveClaimGridPDFApplication
 */

export const loadImplicitSaveClaimGridPDFApplication = createAction(
  '[Application] Load ImplicitSaveClaimGridPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveClaimGridPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimGridPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveClaimGridPDFApplication
 */

export const loadImplicitRetrieveClaimGridPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveClaimGridPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveClaimGridPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveClaimGridPDFApplication Success',
  props<{ data: any }>()
);
/**
 * GenerateClaimGridPDF
 */
export const loadGenerateClaimGridPDF = createAction(
  '[PDF] Load GenerateClaim Grid PDF',
  props<{ data: any }>()
);

export const loadGenerateClaimGridPDFSuccess = createAction(
  '[PDF] Load GenerateClaim Grid PDF Success',
  props<{ data: any }>()
);
/** ********************************Claim Revisions********************************************* **/
/**
 *  ImplicitSaveClaimRevisionPDFApplication
 */

export const loadImplicitSaveClaimRevisionPDFApplication = createAction(
  '[Application] Load ImplicitSaveClaimRevisionPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveClaimRevisionPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimRevisionPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveClaimRevisionPDFApplication
 */

export const loadImplicitRetrieveClaimRevisionPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveClaimRevisionPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveClaimRevisionPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveClaimRevisionPDFApplication Success',
  props<{ data: any }>()
);
/**
 * GenerateClaimRevisionPDF
 */
export const loadGenerateClaimRevisionPDF = createAction(
  '[PDF] Load GenerateClaim Revision PDF',
  props<{ data: any }>()
);

export const loadGenerateClaimRevisionPDFSuccess = createAction(
  '[PDF] Load GenerateClaim Revision PDF Success',
  props<{ data: any }>()
);

/** ********************************Accident Letter********************************************* **/

/**
 *  ImplicitSaveAccidentLetterPDFApplication
 */

export const loadImplicitSaveAccidentLetterPDFApplication = createAction(
  '[Application] Load ImplicitSaveAccidentLetterPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveAccidentLetterPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveAccidentLetterPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveAccidentLetterPDFApplication
 */

export const loadImplicitRetrieveAccidentLetterPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveAccidentLetterPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveAccidentLetterPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveAccidentLetterPDFApplication Success',
  props<{ data: any }>()
);
/**
 * GenerateAccidentPDF
 */
export const loadGenerateAccidentPDF = createAction(
  '[PDF] Load GenerateAccident PDF',
  props<{ data: any }>()
);

export const loadGenerateAccidentPDFSuccess = createAction(
  '[PDF] Load GenerateAccident PDF Success',
  props<{ data: any }>()
);
/** ********************************Claim CoverSheet********************************************* **/

/**
 *  ImplicitSaveClaimCoverSheetPDFApplication
 */

export const loadImplicitSaveClaimCoverSheetPDFApplication = createAction(
  '[Application] Load ImplicitSaveClaimCoverSheetPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveClaimCoverSheetPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveClaimCoverSheetPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveClaimCoverSheetPDFApplication
 */

export const loadImplicitRetrieveClaimCoverSheetPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveClaimCoverSheetPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveClaimCoverSheetPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveClaimCoverSheetPDFApplication Success',
  props<{ data: any }>()
);
/**
 * ClaimCoverSheetPDF
 */
export const loadClaimCoverSheetPDF = createAction(
  '[PDF] Load ClaimCoverSheet PDF',
  props<{ data: any }>()
);

export const loadClaimCoverSheetPDFSuccess = createAction(
  '[PDF] Load ClaimCoverSheet PDF Success',
  props<{ data: any }>()
);
/** ********************************Accident CoverSheet********************************************* **/

/**
 *  ImplicitSaveAccidentCoverSheetPDFApplication
 */

export const loadImplicitSaveAccidentCoverSheetPDFApplication = createAction(
  '[Application] Load ImplicitSaveAccidentCoverSheetPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitSaveAccidentCoverSheetPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitSaveAccidentCoverSheetPDFApplication Success',
  props<{ data: any }>()
);
/**
 *  ImplicitRetrieveAccidentCoverSheetPDFApplication
 */

export const loadImplicitRetrieveAccidentCoverSheetPDFApplication = createAction(
  '[Application] Load ImplicitRetrieveAccidentCoverSheetPDFApplication',
  props<{ data: any }>()
);

export const loadImplicitRetrieveAccidentCoverSheetPDFApplicationSuccess = createAction(
  '[Application] Load ImplicitRetrieveAccidentCoverSheetPDFApplication Success',
  props<{ data: any }>()
);
/**
 * AccidentCoverSheetPDF
 */
export const loadAccidentCoverSheetPDF = createAction(
  '[PDF] Load AccidentCoverSheet PDF',
  props<{ data: any }>()
);

export const loadAccidentCoverSheetPDFSuccess = createAction(
  '[PDF] Load AccidentCoverSheet PDF Success',
  props<{ data: any }>()
);
