import * as fromServiceProviders from './service-providers.actions';

describe('loadServiceProviderss', () => {
  it('should return an action', () => {
    expect(fromServiceProviders.loadServiceProviderss().type).toBe('[ServiceProviders] Load ServiceProviderss');
  });
});
