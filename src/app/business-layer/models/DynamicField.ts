import {Lookup} from './Lookup';

export class DynamicField {
  public value: any;
  public key: string = '';
  public label: string = '';
  public placeholder: string = '';
  public hint: string = '';
  public required: boolean;
  public order: number;
  public type: string = '';
  public validationType: string = '';
  public structureValidationType: string = '';
  public validationMessage: string = '';
  public messageDuration: number;
  public messageAction: string = '';
  public maxlength: string = '';
  public minlength: string = '';
  public options: Lookup[] = [];
  public group: string = '';
  public category: string = '';
  public code: string = '';
  public isSort: boolean;
}
