import {Injectable} from "@angular/core";

@Injectable()
export class WSContextUtilService {

  private wsContext: string;

  setWSContext(context: string) {
    this.wsContext = context;
  }

  getWSContext() {
    return this.wsContext;
  }

}
