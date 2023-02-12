import * as fromInitialAssessmentController from './initial-assessment-controller.actions';

describe('loadInitialAssessmentControllers', () => {
  it('should return an action', () => {
    expect(fromInitialAssessmentController.loadInitialAssessmentControllers().type).toBe('[InitialAssessmentController] Load InitialAssessmentControllers');
  });
});
