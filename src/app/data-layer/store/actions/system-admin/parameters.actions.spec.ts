import * as fromParameters from './parameters.actions';

describe('loadParameterss', () => {
  it('should return an action', () => {
    expect(fromParameters.loadParameterss().type).toBe('[Parameters] Load Parameterss');
  });
});
