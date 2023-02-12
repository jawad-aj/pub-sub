import {LoginController} from "../../view-layer/login/LoginController";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginSmartController} from "../../smartComponents/login-smart/loginSmartController";


@NgModule({
  declarations: [LoginController, LoginSmartController],
  imports: [
    CommonModule, SharedModule, LoginRoutingModule
  ],
  providers: [],
  exports: [LoginController, LoginSmartController]
})
export class LoginModule {
}
