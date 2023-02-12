import {RouterModule, Routes} from '@angular/router';
import {HomeController} from './home.controller';
import {WorkBasketSmartController} from '../../smartComponents/workbasket-smart/workBasketSmartController';
import {NgModule} from '@angular/core';
import {SearchAccidentSmartComponent} from '../../smartComponents/search-accident-smart/search-accident-smart.component';
import {LogoutCanDeactivateGuard} from '../../business-layer/guard/logout-can-deactivate.guard.';
import {ChangePasswordSmartComponent} from '../../smartComponents/change-password-smart/change-password-smart.component';


const routes: Routes = [
  {
    path: '', component: HomeController, canDeactivate: [LogoutCanDeactivateGuard],
    children: [
      {path: 'workbasket', component: WorkBasketSmartController},
      {path: 'changePassword', component: ChangePasswordSmartComponent},
      {path: 'searchAccident', component: SearchAccidentSmartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
