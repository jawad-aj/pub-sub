import {Action, createReducer, on} from '@ngrx/store';
import {loadLogout} from '../actions/logout.actions';
import {loadMedicalEvidenceBriefSuccess, loadMedicalEvidenceComboDataSuccess} from '../actions/medical-evidence-controller.actions';
import {loadExitApplication} from '../actions/exit-application.actions';
import {MedicalEvidenceComboData} from '../../../business-layer/models/MedicalEvidenceComboDta';
import {MedicalEvidenceBrief} from '../../../business-layer/models/brief/MedicalEvidence.brief';

/**
 * MedicalEvidenceBrief Reducer
 */
export const medicalEvidenceBriefFeatureKey = 'medicalEvidenceBrief';


export interface MedicalEvidenceBriefState {
  readonly medicalEvidenceBrief: MedicalEvidenceBrief;
}


export const medicalEvidenceBriefInitialState: MedicalEvidenceBriefState = {
  medicalEvidenceBrief: undefined,
};


const medicalEvidenceBriefStateReducer = createReducer(
  medicalEvidenceBriefInitialState,
  on(loadMedicalEvidenceBriefSuccess, (medicalEvidenceBriefState, {data}) => ({medicalEvidenceBrief: data.medicalEvidenceBrief})),
  on(loadExitApplication, (medicalEvidenceBriefState, {data}) => ({medicalEvidenceBrief: data})),
  on(loadLogout, (medicalEvidenceBriefState, {data}) => ({medicalEvidenceBrief: data})),
  );


export function medicalEvidenceBriefReducer(medicalEvidenceBriefState: MedicalEvidenceBriefState | undefined, action: Action) {
  return medicalEvidenceBriefStateReducer(medicalEvidenceBriefState, action);
}

/**
 * MedicalEvidenceComboData Reducer
 */
export const medicalEvidenceComboDataFeatureKey = 'medicalEvidenceComboData';


export interface MedicalEvidenceComboDataState {
  readonly medicalEvidenceComboData: MedicalEvidenceComboData;
}


export const medicalEvidenceComboDataInitialState: MedicalEvidenceComboDataState = {
  medicalEvidenceComboData: undefined,
};


const medicalEvidenceComboDataStateReducer = createReducer(
  medicalEvidenceComboDataInitialState,
  on(loadMedicalEvidenceComboDataSuccess, (medicalEvidenceComboDataState, {data}) => ({medicalEvidenceComboData: data.medicalEvidenceComboData})),
  on(loadExitApplication, (medicalEvidenceComboDataState, {data}) => ({medicalEvidenceComboData: data})),
  on(loadLogout, (medicalEvidenceComboDataState, {data}) => ({medicalEvidenceComboData: data})),
  );


export function medicalEvidenceComboDataReducer(medicalEvidenceComboDataState: MedicalEvidenceComboDataState | undefined, action: Action) {
  return medicalEvidenceComboDataStateReducer(medicalEvidenceComboDataState, action);
}
