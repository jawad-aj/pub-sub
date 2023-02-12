import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'login', loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)},
  {
    path: 'home',
    loadChildren: () => import(`src/app/modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'application',
    loadChildren: () => import(`src/app/modules/application/application.module`).then(m => m.ApplicationModule)
  },
  {
    path: 'systemadmin',
    loadChildren: () => import(`src/app/modules/system-admin/system-admin.module`).then(m => m.SystemAdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
