import * as fromVehicleController from './vehicle-controller.actions';

describe('loadVehicleControllers', () => {
  it('should return an action', () => {
    expect(fromVehicleController.loadVehicleControllers().type).toBe('[VehicleController] Load VehicleControllers');
  });
});
