import * as fromHeaderController from './header-controller.actions';

describe('loadHeaderControllers', () => {
  it('should return an action', () => {
    expect(fromHeaderController.loadHeaderControllers().type).toBe('[HeaderController] Load HeaderControllers');
  });
});
