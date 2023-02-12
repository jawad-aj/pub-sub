import * as fromEventsMapping from './events-mapping.actions';

describe('loadEventsMappings', () => {
  it('should return an action', () => {
    expect(fromEventsMapping.loadEventsMapping.type).toBe('[EventsMapping] Load EventsMappings');
  });
});
