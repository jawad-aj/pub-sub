import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemAdminRoutingModule} from './system-admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from '../../view-layer/system-admin/home/home.component';
import {MainMenuComponent} from '../../view-layer/system-admin/main-menu/main-menu.component';
import {MainMenuSmartComponent} from '../../smartComponents/system-admin/main-menu-smart/main-menu-smart.component';
import {PaymentsSmartComponent} from '../../smartComponents/system-admin/payments-smart/payments-smart.component';
import {ParametersSmartComponent} from '../../smartComponents/system-admin/parameters-smart/parameters-smart.component';
import {ServiceProvidersSmartComponent} from '../../smartComponents/system-admin/service-providers-smart/service-providers-smart.component';
import {SystemUserSmartComponent} from '../../smartComponents/system-admin/system-user-smart/system-user-smart.component';
import {BulkAssignmentSmartComponent} from '../../smartComponents/system-admin/bulk-assignment-smart/bulk-assignment-smart.component';
import {ApplicationSmartComponent} from '../../smartComponents/system-admin/application-smart/application-smart.component';
import {PaymentComponent} from '../../view-layer/system-admin/payment/payment.component';
import {ParametersComponent} from '../../view-layer/system-admin/parameters/parameters.component';
import {ServiceProvidersComponent} from '../../view-layer/system-admin/service-providers/service-providers.component';
import {SystemUsersComponent} from '../../view-layer/system-admin/system-users/system-users.component';
import {BulkAssignmentComponent} from '../../view-layer/system-admin/bulk-assignment/bulk-assignment.component';
import {PaymentsService} from '../../data-layer/api-services/system-admin/payments.service';
import {EffectsModule} from '@ngrx/effects';
import {PaymentsEffects} from '../../data-layer/store/effects/system-admin/payments.effects';
import {StoreModule} from '@ngrx/store';
import {
  paymentBatchReducer,
  paymentFilterReducer,
  paymentsReducer,
  paymentTypesReducer,
  unBatchedPaymentsReducer
} from '../../data-layer/store/reducers/system-admin/payments.reducer';
import {ParametersEffects} from '../../data-layer/store/effects/system-admin/parameters.effects';
import {companyParametersReducer, parameterCategoriesReducer} from '../../data-layer/store/reducers/system-admin/parameters.reducer';
import {ParametersService} from '../../data-layer/api-services/system-admin/parameters.service';
import {SystemUserService} from '../../data-layer/api-services/system-admin/system-user.service';
import {ServiceProvidersEffects} from '../../data-layer/store/effects/system-admin/service-providers.effects';
import {ServiceProvidersService} from '../../data-layer/api-services/system-admin/service-providers.service';
import {serviceProvidersReducer, serviceProviderTypesReducer} from '../../data-layer/store/reducers/system-admin/service-providers.reducer';
import {SystemUserEffects} from '../../data-layer/store/effects/system-admin/system-user.effects';
import {systemUsersReducer, systemUserTypesReducer} from '../../data-layer/store/reducers/system-admin/system-user.reducer';
import {BulkAssignmentService} from '../../data-layer/api-services/system-admin/bulk-assignment.service';
import {BulkAssignmentEffects} from '../../data-layer/store/effects/system-admin/bulk-assignment.effects';
import {bulkAssignmentAccidentsReducer, userLookupReducer} from '../../data-layer/store/reducers/system-admin/bulk-assignment.reducer';
import {BatchDialogComponent} from '../../view-layer/system-admin/batch-dialog/batch-dialog.component';
import {PaymentGridComponent} from '../../view-layer/system-admin/payment-grid/payment-grid.component';
import {PaymentGridSmartComponent} from '../../smartComponents/system-admin/payment-grid-smart/payment-grid-smart.component';
import {SystemAdminApplicationSmartDialogComponent} from '../../view-layer/system-admin/system-admin-appliction-smart-dialog/system-admin-appliction-smart-dialog.component';
import {SystemAdminDynamicFormComponent} from '../../view-layer/system-admin/system-admin-dynamic-form/system-admin-dynamic-form.component';
import {DynamicFormEffects} from '../../data-layer/store/effects/system-admin/dynamic-form.effects';
import {dynamicFormReducer} from '../../data-layer/store/reducers/system-admin/dynamic-form.reducer';
import {DynamicFormService} from '../../data-layer/api-services/system-admin/dynamic-form.service';
import {retrievePayloadReducer} from '../../data-layer/store/reducers/system-admin/retrieve-call.reducer';
import {SystemAdminController} from './system-admin.controller';


@NgModule({
  declarations: [
    HomeComponent,
    MainMenuComponent,
    MainMenuSmartComponent,
    PaymentsSmartComponent,
    ParametersSmartComponent,
    ServiceProvidersSmartComponent,
    SystemUserSmartComponent,
    BulkAssignmentSmartComponent,
    ApplicationSmartComponent,
    PaymentComponent,
    ParametersComponent,
    ServiceProvidersComponent,
    SystemUsersComponent,
    BulkAssignmentComponent,
    BatchDialogComponent,
    PaymentGridComponent,
    PaymentGridSmartComponent,
    SystemAdminApplicationSmartDialogComponent,
    SystemAdminDynamicFormComponent,
    SystemAdminController,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemAdminRoutingModule,
    StoreModule.forFeature('payments', paymentsReducer),
    StoreModule.forFeature('paymentFilter', paymentFilterReducer),
    StoreModule.forFeature('unBatchedPayments', unBatchedPaymentsReducer),
    StoreModule.forFeature('paymentTypes', paymentTypesReducer),
    StoreModule.forFeature('paymentBatch', paymentBatchReducer),
    StoreModule.forFeature('parameterCategories', parameterCategoriesReducer),
    StoreModule.forFeature('companyParameters', companyParametersReducer),
    StoreModule.forFeature('dynamicForm', dynamicFormReducer),
    StoreModule.forFeature('serviceProviderTypes', serviceProviderTypesReducer),
    StoreModule.forFeature('serviceProviders', serviceProvidersReducer),
    StoreModule.forFeature('systemUsers', systemUsersReducer),
    StoreModule.forFeature('systemUserTypes', systemUserTypesReducer),
    StoreModule.forFeature('userLookup', userLookupReducer),
    StoreModule.forFeature('bulkAssignmentAccidents', bulkAssignmentAccidentsReducer),
    StoreModule.forFeature('retrievePayload', retrievePayloadReducer),
    EffectsModule.forFeature([PaymentsEffects, ParametersEffects, ServiceProvidersEffects, ServiceProvidersService, SystemUserEffects, BulkAssignmentEffects, DynamicFormEffects]),
  ],
  providers: [PaymentsService, ParametersService, SystemUserService, BulkAssignmentService, DynamicFormService]
})
export class SystemAdminModule {
}
