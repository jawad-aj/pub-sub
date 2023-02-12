import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../view-layer/system-admin/home/home.component';
import {PaymentsSmartComponent} from '../../smartComponents/system-admin/payments-smart/payments-smart.component';
import {ParametersSmartComponent} from '../../smartComponents/system-admin/parameters-smart/parameters-smart.component';
import {ServiceProvidersSmartComponent} from '../../smartComponents/system-admin/service-providers-smart/service-providers-smart.component';
import {SystemUserSmartComponent} from '../../smartComponents/system-admin/system-user-smart/system-user-smart.component';
import {BulkAssignmentSmartComponent} from '../../smartComponents/system-admin/bulk-assignment-smart/bulk-assignment-smart.component';
import {ApplicationSmartComponent} from '../../smartComponents/system-admin/application-smart/application-smart.component';
import {ChangePasswordSmartComponent} from '../../smartComponents/change-password-smart/change-password-smart.component';
import {SystemAdminController} from './system-admin.controller';
import {LogoutCanDeactivateGuard} from '../../business-layer/guard/logout-can-deactivate.guard.';


const routes: Routes = [

  {
    path: '', component: SystemAdminController, canDeactivate: [LogoutCanDeactivateGuard],
    children: [
      {path: 'changePassword', component: ChangePasswordSmartComponent},
      {path: 'home', component: HomeComponent},
      {
        path: 'application', component: ApplicationSmartComponent,
        children: [
          {path: 'payments', component: PaymentsSmartComponent},
          {path: 'parameters', component: ParametersSmartComponent},
          {path: 'serviceProviders', component: ServiceProvidersSmartComponent},
          {path: 'systemUsers', component: SystemUserSmartComponent},
          {path: 'bulkAssignment', component: BulkAssignmentSmartComponent},
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule {
}
