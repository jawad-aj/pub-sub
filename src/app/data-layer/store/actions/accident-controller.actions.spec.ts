import * as AccidentControllerActions from './accident-controller.actions';
import {error} from '@angular/compiler/src/util';

describe('AccidentController', () => {
  it('should create an instance', () => {
    expect( AccidentControllerActions.loadAccidentBrief).toBeTruthy();
  });
});
