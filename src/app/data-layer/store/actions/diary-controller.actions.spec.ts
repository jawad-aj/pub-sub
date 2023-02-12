import * as fromDiaryController from './diary-controller.actions';

describe('loadDiaryControllers', () => {
  it('should return an action', () => {
    expect(fromDiaryController.loadDiaryBrief.type).toBe('[DiaryController] Load DiaryControllers');
  });
});
