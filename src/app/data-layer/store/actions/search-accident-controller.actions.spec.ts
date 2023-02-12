import * as fromSearchAccidentController from './search-accident-controller.actions';

describe('loadSearchAccidentControllers', () => {
  it('should return an action', () => {
    expect(fromSearchAccidentController.loadSearchAccidentControllers().type).toBe('[SearchAccidentController] Load SearchAccidentControllers');
  });
});
