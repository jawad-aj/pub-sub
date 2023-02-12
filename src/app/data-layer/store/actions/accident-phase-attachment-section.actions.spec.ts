import * as fromAccidentPhaseAttachmentSection from './accident-phase-attachment-section.actions';

describe('loadAccidentPhaseAttachmentSections', () => {
  it('should return an action', () => {
    expect(fromAccidentPhaseAttachmentSection.loadAccidentPhaseAttachmentSections().type).toBe('[AccidentPhaseAttachmentSection] Load AccidentPhaseAttachmentSections');
  });
});
