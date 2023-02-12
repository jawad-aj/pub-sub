import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MatNativeDateModule} from "@angular/material/core";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {MatRadioModule} from "@angular/material/radio";
import {WjGridFilterModule} from '@grapecity/wijmo.angular2.grid.filter';
import {WjGridModule} from '@grapecity/wijmo.angular2.grid';
import {WjInputModule} from '@grapecity/wijmo.angular2.input';
import {WjGridGrouppanelModule} from '@grapecity/wijmo.angular2.grid.grouppanel';
import {GridFilterPipe} from "../../data-layer/api-services/util/Grid-Filter.pipe";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DialogController} from "../../view-layer/dialog/DialogController";
import {MatExpansionModule} from "@angular/material/expansion";
import {FirstLetterCapital} from "../../view-layer/directives/FirstLetterUpperCase";
import {DecimalNumber} from "../../view-layer/directives/DecimalNumber";
import {MatTableModule} from "@angular/material/table";
import {CompanyParameterUtil} from "../../data-layer/api-services/util/CompanyParameterUtil";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ValidNumber} from "../../view-layer/directives/ValidNumber";
import {AlphabetsOnly} from "../../view-layer/directives/AlphabetsOnly";
import {Uppercase} from "../../view-layer/directives/Uppercase";
import {AlphaNumeric} from "../../view-layer/directives/AlphaNumeric";
import {MaxNumber} from "../../view-layer/directives/MaxNumber";
import {InputMask} from "../../view-layer/directives/InputMask";
import {PhoneNumber} from "../../view-layer/directives/PhoneNumber";
import {InputDate} from "../../view-layer/directives/InputDate";
import {CoplDatetime} from "../../data-layer/api-services/util/CoplDatetime";
import {DateTime} from "../../view-layer/directives/DateTime";
import {DateFormat} from "../../business-layer/services/date-format";
import {DateValidators} from "../../view-layer/directives/DateValidators";
import {SnackBarService} from "../../business-layer/services/SnackBarServices";
import {TextAreaAutoResize} from "../../view-layer/directives/TextAreaAutoResize";
import {ChangePasswordSmartComponent} from "../../smartComponents/change-password-smart/change-password-smart.component";
import {ChangePasswordController} from "../../view-layer/changepassword/ChangePasswordController";

@NgModule({
  declarations: [GridFilterPipe, DialogController, DecimalNumber, AlphaNumeric, MaxNumber, ValidNumber,
    Uppercase, AlphabetsOnly, FirstLetterCapital, InputMask, PhoneNumber, CoplDatetime, InputDate, DateTime, DateValidators,TextAreaAutoResize,
    ChangePasswordSmartComponent,ChangePasswordController,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, WjGridModule, WjInputModule, WjGridFilterModule, WjGridGrouppanelModule,
    MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatMenuModule,
    MatIconModule, MatDialogModule, MatSidenavModule, MatSnackBarModule, MatExpansionModule, MatButtonModule, MatToolbarModule,
    MatListModule, MatStepperModule, MatTableModule, MatCardModule, MatDatepickerModule,
    MatNativeDateModule, _MatMenuDirectivesModule,
  ],
  providers: [DecimalPipe, DatePipe, CompanyParameterUtil, SnackBarService,
    {
      provide: DateAdapter,
      useClass: DateFormat
    }],
  exports: [ReactiveFormsModule, WjGridModule, WjInputModule, WjGridFilterModule, WjGridGrouppanelModule,
    MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatMenuModule,
    MatIconModule, MatDialogModule, MatSidenavModule, MatSnackBarModule, MatExpansionModule, MatButtonModule, MatToolbarModule,
    MatListModule, MatStepperModule, MatTableModule, MatCardModule, GridFilterPipe, DialogController, DecimalNumber, AlphaNumeric, DateValidators,
    MaxNumber, ValidNumber, Uppercase, AlphabetsOnly, FirstLetterCapital, _MatMenuDirectivesModule, InputMask, PhoneNumber, InputDate, CoplDatetime,
    DateTime, TextAreaAutoResize, ChangePasswordSmartComponent,ChangePasswordController,]
})

export class SharedModule {
}
