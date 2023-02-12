import {Injectable, OnDestroy} from '@angular/core';
import {StoreService} from './store.service';
import {BrokerList} from '../brokerage/ngrx-stubs/brokerlist';
import {CMSEvents} from '../models/CMSEvents';
import {EventsMappingService} from './events-mapping.service';
import {EventHandlerParams} from '../models/EventHandlerParams';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {RemoteService} from './remote-services.service';
import {LoginDataService} from './login-data.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogController} from '../../view-layer/dialog/DialogController';
import {IsDirtyService} from './isDirty.service';
import {SelectedRowDataService} from './selected-row.service';
import {ClaimAccidentSummaryService} from './claimAccidentSummary.service';
import {ClaimSummaryService} from './claim-summary.service';
import {VehicleSummaryService} from './vehicle-summary.service';
import {HeaderDataService} from './HeaderData.service';
import {AccidentService} from './accident.service';
import {ApplicationSmartDialogController} from '../../view-layer/applictionsmartdialog/ApplictionSmartDialogController';
import {HomeSmartDialogController} from '../../view-layer/homesmartdialog/HomeSmartDialogController';
import {PdfCodeService} from './pdf-code.service';
import {AccidentPdfCodeService} from './accident-pdf-code.service';
import {ClaimCoversheetPdfCodeService} from './claim-coversheet-pdf-code.service';
import {AccidentCoversheetPdfCodeService} from './accident-coversheet-pdf-code.service';
import {LINVPdfCodeService} from './linv-pdf-code.service';
import {FooterStatusService} from './footerStatus.service';
import {SystemAdminApplicationSmartDialogComponent} from '../../view-layer/system-admin/system-admin-appliction-smart-dialog/system-admin-appliction-smart-dialog.component';
import {DynamicFormDataService} from './dynamic-form-data.service';
import {SystemAdminPaymentFilterService} from './SystemAdmin-PaymentFilter.service';
import {SystemAdminGenericPayloadService} from './SystemAdmin-GenericPayload.service';
import {IsActiveService} from './isActive.service';
import {IdleTimeDialogComponent} from '../../view-layer/idle-time-dialog/idle-time-dialog.component';

@Injectable()
export class StreamHandlerService implements OnDestroy {
  broker: EventHandlerParams;
  subscription: Subscription = new Subscription();

  constructor(private storeService: StoreService, private router: Router, private dialog: MatDialog,
              private loginDataService: LoginDataService, private selectedRowService: SelectedRowDataService,
              private remoteService: RemoteService, private eventsMappingService: EventsMappingService,
              private isDirtyService: IsDirtyService, private claimAccidentSummaryService: ClaimAccidentSummaryService,
              private claimSummaryService: ClaimSummaryService, private vehicleSummaryService: VehicleSummaryService,
              private headerService: HeaderDataService, private accidentService: AccidentService, private pdfCode: PdfCodeService,
              private accidentPdfCodeService: AccidentPdfCodeService, private claimCoversheetPdfCodeService: ClaimCoversheetPdfCodeService,
              private accidentCoversheetPdfCodeService: AccidentCoversheetPdfCodeService, private pdfLINVCodeService: LINVPdfCodeService,
              private footerService: FooterStatusService, private dynamicFormDataService: DynamicFormDataService,private isActive: IsActiveService,
              private paymentFilterService: SystemAdminPaymentFilterService, private genericPayloadService: SystemAdminGenericPayloadService,) {
    this.selectorSubscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   *  Selector Subscription
   */
  selectorSubscription() {
    /**
     *  Event Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).eventHandler$.subscribe((event: CMSEvents) => {
      this.broker = this.eventsMappingService.getEvent(event.code);
      if (this.broker) {
        if (this.broker.remoteServiceName) {
          this.storeService.actionDispatcher(this.broker.actionName, this.broker.brokerType, event.data, this.remoteService.getServiceUtilParam(this.broker.remoteServiceName));
        } else if (this.broker.navigateTo) {
          this.storeService.actionDispatcher(this.broker.actionName, this.broker.brokerType, this.broker.navigateTo);
        } else if (this.broker.dialogName) {
          if (this.broker.isSmart) {
            if (this.broker.isSmart === 'application') {
              this.openApplicationSmartDialog(this.broker.dialogName, this.broker.dialogTitle);
            } else if (this.broker.isSmart === 'home') {
              this.openHomeSmartDialog(this.broker.dialogName, this.broker.dialogTitle);
            } else if (this.broker.isSmart === 'systemAdminApplication') {
              this.openSystemAdminApplicationSmartDialog(this.broker.dialogName, this.broker.dialogTitle);
            }
          } else if (!this.broker.dialogDescription) {
            this.openDialog(this.broker.dialogTitle, this.broker.dialogName, event.data);
          } else if (this.broker.eventCode) {
            if (this.broker.dialogName === 'NGIDLE') {
              this.openIdleDialog(this.broker.dialogTitle, this.broker.dialogName, event.data, this.broker.eventCode);

            } else {
              this.openDialog(this.broker.dialogTitle, this.broker.dialogName, event.data, '', this.broker.eventCode);
            }
          } else {
            this.openDialog(this.broker.dialogTitle, this.broker.dialogName, this.broker.dialogDescription);
          }
        } else {
          this.storeService.actionDispatcher(this.broker.actionName, this.broker.brokerType, event.data);
        }
      }
    }));
    /**
     *  Notification Success Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).notificationSuccess$.subscribe(value => {
      let versionUpdated: boolean = true;
      if (this.loginDataService.getLoginData() && value.actionName === 'loadHeadersSuccess') {
        if (!this.versionHandler()) {
          versionUpdated = false;
          this.broker = this.eventsMappingService.getEvent('loadVersionOutDated');
          const resp = this.openDecisionDialog(this.broker.dialogTitle, this.broker.dialogName, this.broker.dialogDescription);
          resp.subscribe(value => {
            if (value) {
              document.location.reload();
            }
          });
          this.broker = null;
        }
      }
      if (versionUpdated) {
        if (this.loginDataService.getLoginData() && this.loginDataService.getProperty('logonCode') === '00100' && value.actionName === 'loadHeadersSuccess') {
          value.actionName = 'routeSearchAccident';
          this.broker = this.eventsMappingService.getEvent(value.actionName);
        } else if (this.loginDataService.getLoginData() && this.loginDataService.getProperty('logonCode') === '00010' && value.actionName === 'loadHeadersSuccess') {
          this.dispatchEvent('loadHeaderComboData', 'systemAdmin');
          this.dispatchEvent('routeSystemAdminHome', '/systemadmin/home');
          this.broker = null;
        } else {
          this.broker = this.eventsMappingService.getEvent(value.actionName);
        }
        if (this.broker) {
          if (this.broker.dialogName && this.broker.navigateTo) {
            this.openDialog(this.broker.dialogTitle, this.broker.dialogName, this.broker.dialogDescription, this.broker.navigateTo);
          } else if (this.broker.navigateTo) {
            this.storeService.actionDispatcher(this.broker.actionName, this.broker.brokerType, this.broker.navigateTo);
          } else {
            this.dispatchEvent(value.actionName, value.success);
          }
        }
      }
    }));
    /**
     *  Notification Failure Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).notificationFailure$.subscribe(value => {
      if (value.actionName === 'loadVehicleRequestFailure' || value.actionName === 'loadLoginsFailure'
        || value.actionName === 'loadForgotPasswordFailure' || value.actionName === 'loadChangePasswordFailure') {
        this.broker = this.eventsMappingService.getEvent(value.actionName);
        if (this.broker) {
          this.openDialog(this.broker.dialogTitle, this.broker.dialogName, this.broker.dialogDescription);
        }
      } else {
        this.broker = this.eventsMappingService.getEvent(value.failure);
        if (this.broker) {
          this.openDialog(this.broker.dialogTitle, this.broker.dialogName, value.actionName);
        }
      }
    }));
    /**
     *  HTTP Failure Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).httpFailure$.subscribe(value => {
      this.broker = this.eventsMappingService.getEvent('alertHttpFailure');
      if (this.broker) {
        this.openDialog(this.broker.dialogTitle, this.broker.dialogName, value);
      }
    }));
    /**
     *  Router Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).router$.subscribe(value => {
      this.router.navigateByUrl(value);
      this.dispatchEvent('routeUndefined', undefined);
    }));
    /**
     *  ActionLog Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).actionLog$.subscribe(value => {
    }));
    /**
     *  SelectedRow Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).selectedRow$.subscribe(value => {
      this.selectedRowService.setSelectedRow(value);
    }));
    /**
     *  claimSummary Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).claimSummary$.subscribe(value => {
      this.claimSummaryService.setClaimSummary(value);
    }));
    /**
     *  vehicleSummary Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).vehicleSummary$.subscribe(value => {
      this.vehicleSummaryService.setVehicleSummary(value);
    }));
    /**
     *  ClaimAccidentSummary Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).claimAccidentSummary$.subscribe(value => {
      this.claimAccidentSummaryService.setClaimAccidentSummary(value);
    }));
    /**
     *  pdfCode Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).pdfCode$.subscribe(value => {
      this.pdfCode.setCode(value);
    }));
    /**
     *  pdfCode Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).accidentPDFCode$.subscribe(value => {
      this.accidentPdfCodeService.setCodeObj(value);
    }));
    /**
     *  pdfLINVCode Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).pdfLINVCode$.subscribe(value => {
      this.pdfLINVCodeService.setCode(value);
    }));
    /**
     *  claimCoverSheetPDFCode Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).claimCoverSheetPDFCode$.subscribe(value => {
      this.claimCoversheetPdfCodeService.setCode(value);
    }));
    /**
     *  accidentCoverSheetPDFCode Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).accidentCoverSheetPDFCode$.subscribe(value => {
      this.accidentCoversheetPdfCodeService.setCode(value);
    }));
    /**
     *  Accident Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).accident$.subscribe(value => {
      this.accidentService.setAccident(value);
    }));
    /**
     *  isDirty Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_IS_DIRTY_STORE).isDirty$.subscribe(value => {
      this.isDirtyService.setIsDirty(value);
    }));
    /**
     *  isActive Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).isActive$.subscribe(value => {
      this.isActive.setIsActive(value);
    }));
    /**
     *  File URL Selector
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_FILE_URL_STORE).fileURL$.subscribe(value => {
      window.open(value);
      this.dispatchEvent('fileURLUndefined', undefined);
    }));
    /**
     *  Global Injectable Selectors
     */
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_LOGIN_STORE).loginData$.subscribe(value => {
      this.loginDataService.setLoginData(value);
      if (value) {
        this.dispatchEvent('loadWebsocketConnect', true);
      }
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_REMOTESERVICES_STORE).remoteServices$.subscribe(value => {
      this.remoteService.setRemoteServices(value);
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENT_HANDLER_STORE).footerBrief$.subscribe(value => {
      console.log('WEB SOCKET STATUS', value['websocketStatus']);
      this.footerService.setFooter(value);
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_HEADER_CONTROLLER_STORE).headerData$.subscribe(value => {
      this.headerService.setMenu(value);
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_SYSTEM_ADMIN_DYNAMIC_FORMS_STORE).dynamicFormSelector$.subscribe(value => {
      this.dynamicFormDataService.setDynamicForms(value);
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_SYSTEM_ADMIN_PAYMENT_STORE).paymentFilter$.subscribe(value => {
      this.paymentFilterService.setFilter(value);
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_SYSTEM_ADMIN_GENERIC_RETRIEVE_STORE).retrievePayload$.subscribe(value => {
      this.genericPayloadService.setPayload(value);
    }));
    this.subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_EVENTS_MAPPING_STORE).eventsMapping$.subscribe(value => {
      this.eventsMappingService.setEventsMapping(value);
      this.dispatchEvent('loadApplication', 'remoteservices.json');
    }));
  }

  /**
   *  Dialog Box
   */
  openDialog(dialogTitle, dialogName, description, navigateTo?, eventCode?): void {
    this.dialog.open(DialogController, {
      width: '35%',
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle,
        dialogDescription: description
      }
    }).afterClosed().subscribe(value => {
      if (navigateTo && value) {
        this.dispatchEvent('route', navigateTo);
      }
      if (eventCode === 'NgIdleSmartDialogHandler' && value) {
        this.dispatchEvent(eventCode, value);
      }
    });
  }

  openIdleDialog(dialogTitle, dialogName, description, eventCode): void {
    this.dialog.open(IdleTimeDialogComponent, {
      width: '35%',
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle,
        dialogDescription: description
      }
    }).afterClosed().subscribe(value => {
      if (eventCode === 'NgIdleSmartDialogHandler' && value) {
        this.dispatchEvent(eventCode, value);
      }
    });
  }

  /**
   *  Dialog Box
   */
  openDecisionDialog(dialogTitle, dialogName, description): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogController, {
      width: '35%',
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle,
        dialogDescription: description,
      }
    });
    return dialogRef.afterClosed();
  }

  openApplicationSmartDialog(dialogName, dialogTitle) {
    const dialogRef = this.dialog.open(ApplicationSmartDialogController, {
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle
      }
    });
    return dialogRef.afterClosed();
  }

  openSystemAdminApplicationSmartDialog(dialogName, dialogTitle) {
    const dialogRef = this.dialog.open(SystemAdminApplicationSmartDialogComponent, {
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle
      }
    });
    return dialogRef.afterClosed();
  }

  openHomeSmartDialog(dialogName, dialogTitle) {
    const dialogRef = this.dialog.open(HomeSmartDialogController, {
      disableClose: true,
      data: {
        dialogName: dialogName,
        dialogTitle: dialogTitle
      }
    });
    return dialogRef.afterClosed();
  }

  dispatchEvent(code, data) {
    let event: CMSEvents = new CMSEvents();
    event.code = code;
    event.data = data;
    this.storeService.eventDispatcher(event);
  }

  /**
   * Version Check Handling
   */
  versionHandler(): boolean {
    let dbVersion = this.getCPValue();
    let footerVersion = this.footerService.getFooter().version;
    return dbVersion === footerVersion;
  }

  getCPValue(): string {
    return this.loginDataService.getLoginData().companyParameters.find(value => value.category === 'codetables' && value.group === 'main_html' && value.code === 'version').value;
  }
}
