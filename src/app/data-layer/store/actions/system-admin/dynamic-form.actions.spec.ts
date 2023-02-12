import * as fromDynamicForm from './dynamic-form.actions';

describe('loadDynamicForms', () => {
  it('should return an action', () => {
    expect(fromDynamicForm.loadDynamicForms().type).toBe('[DynamicForm] Load DynamicForms');
  });
});
