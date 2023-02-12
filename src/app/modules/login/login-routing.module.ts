import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginSmartController} from "../../smartComponents/login-smart/loginSmartController";

const routes: Routes = [
  {
    path: '', component: LoginSmartController,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
