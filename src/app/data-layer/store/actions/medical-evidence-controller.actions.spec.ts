import * as fromMedicalEvidenceController from './medical-evidence-controller.actions';

describe('loadMedicalEvidenceControllers', () => {
  it('should return an action', () => {
    expect(fromMedicalEvidenceController.loadMedicalEvidenceControllers().type).toBe('[MedicalEvidenceController] Load MedicalEvidenceControllers');
  });
});
