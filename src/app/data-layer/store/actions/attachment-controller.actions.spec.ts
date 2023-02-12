import * as fromAttachmentController from './attachment-controller.actions';

describe('loadAttachmentControllers', () => {
  it('should return an action', () => {
    expect(fromAttachmentController.loadAttachmentControllers().type).toBe('[AttachmentController] Load AttachmentControllers');
  });
});
