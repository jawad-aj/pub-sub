import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GlobalState} from "../reducers";
import * as fromMedicalEvidenceController from "../reducers/medical-evidence-controller.reducer";
import * as _ from 'lodash-es';

/**
 * MedicalEvidenceBrief Selector
 */

export const selectMedicalEvidenceBrief = createFeatureSelector<GlobalState, fromMedicalEvidenceController.MedicalEvidenceBriefState>(fromMedicalEvidenceController.medicalEvidenceBriefFeatureKey);
export const medicalEvidenceBriefSelector = createSelector(selectMedicalEvidenceBrief, (medicalEvidenceBriefState: fromMedicalEvidenceController.MedicalEvidenceBriefState) => _.cloneDeep(medicalEvidenceBriefState.medicalEvidenceBrief));
/**
 * MedicalEvidenceComboData Selector
 */

export const selectMedicalEvidenceComboData = createFeatureSelector<GlobalState, fromMedicalEvidenceController.MedicalEvidenceComboDataState>(fromMedicalEvidenceController.medicalEvidenceComboDataFeatureKey);
export const medicalEvidenceComboDataSelector = createSelector(selectMedicalEvidenceComboData, (medicalEvidenceComboDataState: fromMedicalEvidenceController.MedicalEvidenceComboDataState) => _.cloneDeep(medicalEvidenceComboDataState.medicalEvidenceComboData));
