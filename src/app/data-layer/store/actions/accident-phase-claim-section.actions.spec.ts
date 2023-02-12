import * as fromAccidentPhaseClaimSection from './accident-phase-claim-section.actions';

describe('loadAccidentPhaseClaimSections', () => {
  it('should return an action', () => {
    expect(fromAccidentPhaseClaimSection.loadAccidentPhaseClaimSections().type).toBe('[AccidentPhaseClaimSection] Load AccidentPhaseClaimSections');
  });
});
