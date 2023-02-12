import * as fromAccidentPhaseDiarySection from './accident-phase-diary-section.actions';

describe('loadAccidentPhaseDiarySections', () => {
  it('should return an action', () => {
    expect(fromAccidentPhaseDiarySection.loadAccidentPhaseDiarySections().type).toBe('[AccidentPhaseDiarySection] Load AccidentPhaseDiarySections');
  });
});
