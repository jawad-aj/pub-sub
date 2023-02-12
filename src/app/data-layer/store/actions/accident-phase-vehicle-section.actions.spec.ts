import * as fromAccidentPhaseVehicleSection from './accident-phase-vehicle-section.actions';

describe('loadAccidentPhaseVehicleSections', () => {
  it('should return an action', () => {
    expect(fromAccidentPhaseVehicleSection.loadAccidentPhaseVehicleSections().type).toBe('[AccidentPhaseVehicleSection] Load AccidentPhaseVehicleSections');
  });
});
