import {Injectable} from "@angular/core";
import {LoginData} from "../models/LoginData";
import {Lookup} from '../models/Lookup';

@Injectable()
export class LoginDataService {
  private loginData: LoginData;

  public setLoginData(loginData: LoginData) {
    this.loginData = loginData;
  }

  public getLoginData(): LoginData {
    return this.loginData;
  }

  public getProperty(property: string) {
    return this.loginData[property];
  }

  public getCompleteLoginName() {
    return this.loginData.firstName + ' ' + this.loginData.lastName;
  }
}
