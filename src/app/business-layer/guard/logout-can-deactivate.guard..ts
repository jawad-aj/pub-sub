import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {IsDirtyService} from '../services/isDirty.service';
import {Observable} from 'rxjs';
import {IsActiveService} from "../services/isActive.service";

@Injectable()
export class LogoutCanDeactivateGuard implements CanDeactivate<any> {

  constructor(private isDirtyService: IsDirtyService, private isActiveService: IsActiveService) {
  }

  canDeactivate(component: any,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean> | boolean {
    if (nextState.url === '/application' || nextState.url === '/application/accidentApplication') {
      return true;
    } else if (!this.isActiveService.getIsActive()) {
      this.isDirtyService.logout();
      return true;
    } else {
      const resp = this.isDirtyService.openDialog('Confirmation', 'confirmation', 'Are you sure, you want to logout?');
      resp.subscribe(value => {
        if (value) {
          this.isDirtyService.logout();
        }
      });
      return resp;
    }
  }

}
