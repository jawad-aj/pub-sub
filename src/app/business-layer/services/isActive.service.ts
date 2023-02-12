import {Injectable} from '@angular/core';

@Injectable()
export class IsActiveService {
  private isActive: boolean;

  constructor() {
  }

  public setIsActive(param: boolean) {
    this.isActive = param;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }
}
