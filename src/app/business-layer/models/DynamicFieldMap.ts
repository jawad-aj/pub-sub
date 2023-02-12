import {DynamicField} from './DynamicField';

export class DynamicFieldMap {
  field: DynamicField = new DynamicField();
  isVisited: boolean;
  isReadOnly: boolean;
  isSkipped: boolean;
  isIgnore: boolean;
  parent: string = '';
  mapping: string = '';
  componentTitle: string = '';
  customField1: string = '';
  section: string = '';
  group: string = '';
  groupOrder: number;
  groupTitle: string = '';
  previousGroup: string = '';
  nextGroup: string = '';
}
