import {Injectable} from "@angular/core";
import {DynamicFieldMap} from '../models/DynamicFieldMap';

@Injectable()
export class DynamicFormDataService {
  private forms: DynamicFieldMap[];

  public setDynamicForms(forms: DynamicFieldMap[]) {
    this.forms = forms;
  }

  public getDynamicForms(groupCode: string): DynamicFieldMap[] {
    return this.forms.filter(value => value.group === groupCode);
  }
}
