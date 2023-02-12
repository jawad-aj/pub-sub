import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ChangePasswordController} from "../../view-layer/changepassword/ChangePasswordController";
import {WorkBasketController} from "../../view-layer/workbasket/WorkBasketController";
import {SearchAccidentController} from "../../view-layer/searchaccident/SearchAccidentController";
import {SummaryFilterController} from "../../view-layer/summaryfilter/SummaryFilterController";
import {WorkBasketSmartController} from "../../smartComponents/workbasket-smart/workBasketSmartController";
import {HomeController} from "./home.controller";
import {HomeRoutingModule} from "./home-routing.module";
import {AssignController} from "../../view-layer/assign/AssignController";
import {SearchAccidentSmartComponent} from '../../smartComponents/search-accident-smart/search-accident-smart.component';
import {HomeSmartDialogController} from "../../view-layer/homesmartdialog/HomeSmartDialogController";
import {AssignSmartController} from "../../smartComponents/assignsmart/AssignSmartController";


@NgModule({
  declarations: [
    AssignSmartController,
    HomeSmartDialogController,
    WorkBasketController,
    SearchAccidentController,
    SummaryFilterController,
    WorkBasketSmartController,
    HomeController,
    AssignController,
    SearchAccidentSmartComponent,

  ],
  imports: [
    CommonModule, SharedModule, HomeRoutingModule,
  ],
  providers: [],
  exports: [
    ChangePasswordController
  ]
})
export class HomeModule {
}
