import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ClaimWQSummary} from '../../business-layer/models/ClaimWQSummary';
import {FormBuilder, FormGroup} from '@angular/forms';
import {fromEvent, Subscription} from 'rxjs';
import {WorkBasketParam} from '../../business-layer/models/workBasketParam';
import {WorkBasketComboData} from '../../business-layer/models/WorkBasketComboData';
import * as wjGrid from '@grapecity/wijmo.grid';
import {distinctUntilChanged} from 'rxjs/operators';
import * as input from '@grapecity/wijmo.input';
import {LookUpModel} from '../../business-layer/models/LookupModel';
import {CMSEvents} from '../../business-layer/models/CMSEvents';
import {WorkBasketBrief} from '../../business-layer/models/brief/WorkBasket.brief';
import {JsonData} from '../../business-layer/models/JsonData';
import {CmsParams} from '../../business-layer/models/CmsParams';
import {AssignParams} from '../../business-layer/models/AssignParams';
import {AssignBrief} from '../../business-layer/models/brief/AssignBrief';
import {ApplicationHeaderInfo} from '../../business-layer/models/ApplicationHeaderInfo';
import * as wjCore from '@grapecity/wijmo';
import {SummaryFilterBrief} from '../../business-layer/models/brief/SummaryFilter.brief';

@Component({
  selector: 'app-workbasket',
  templateUrl: './WorkBasketComponent.html'
})
export class WorkBasketController implements OnInit, OnChanges, OnDestroy {
  @Input() wqSummary: ClaimWQSummary[];
  @Input() comboData: WorkBasketComboData;
  @Input() brief: WorkBasketBrief;
  @Input() claimTypeWQSummary: string;
  @ViewChild('grdWorkBasket', {static: true}) flexGridWorkBasket: wjGrid.FlexGrid;
  @Output() eventHandler: EventEmitter<CMSEvents> = new EventEmitter();
  workBasketForm: FormGroup;
  workBasketParams: WorkBasketParam = new WorkBasketParam();
  subscription: Subscription = new Subscription();
  gridSelectedItem: ClaimWQSummary;
  ctxItemSource: LookUpModel[];
  itemSource: ClaimWQSummary[] = [];
  titlePopup: string = '';
  eventName: string = '';
  searchClaim: boolean = false;
  clearFilters: boolean = false;
  summaryFilterBrief: SummaryFilterBrief = new SummaryFilterBrief();

  constructor(private formBuilder: FormBuilder) {
  }

  /**
   *  Angular Life Hook Cycles
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.wqSummary && !changes.wqSummary.firstChange) {
      if (changes.wqSummary.currentValue) {
        this.itemSource = this.wqSummary;
        if (this.clearFilters && this.itemSource.length === 0) {
          this.noRecordFound();
        }
      }
    }
  }

  ngOnInit() {
    this.itemSource = this.wqSummary;
    this.summaryFilterBriefHandler();
    this.ctxItemSource = this.comboData.menuItemSource;
    this.setWorkBasketForm();
    this.valueChanges();
    this.contextMenuHandler();
    this.clickEvents();
    this.doubleClickHandler();
  }

  ngOnDestroy(): void {
    this.searchClaim = false;
    this.subscription.unsubscribe();
  }

  /**
   *  Set Work Basket Form
   */
  setWorkBasketForm() {
    this.workBasketForm = this.formBuilder.group(new WorkBasketParam());
    if (this.claimTypeWQSummary === 'BPC') {
      this.workBasketForm.get('bpcIndicator').patchValue(true, {emitEvent: false});
    } else {
      this.workBasketForm.get('bpcIndicator').patchValue(false, {emitEvent: false});
    }
  }

  /**
   *  Value Change Work Basket Form
   */
  valueChanges() {
    this.subscription.add(this.workBasketForm.get('bpcIndicator').valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
      if (value) {
        this.workBasketEventHandler('loadBPCWQSummary', this.payloadHandler(value));
      } else {
        this.workBasketEventHandler('loadCLWQSummary', this.payloadHandler(value));
      }
    }));
  }

  /**
   *  Wijmo Wrapping Header Text
   */
  wrappingHeaderText() {
    this.flexGridWorkBasket.autoSizeRow(0, true);
    this.flexGridWorkBasket.columnFooters.rows.push(new wjGrid.GroupRow());
    this.flexGridWorkBasket.bottomLeftCells.setCellData(0, 0, 'Σ');
    this.flexGridWorkBasket.itemFormatter = this.itemFormatter;
    this.fgInit(this.flexGridWorkBasket);
  }

  fgInit(fg: wjGrid.FlexGrid) {
    // to only display the value
    fg.formatItem.addHandler((s, e) => {
      if (s.cells === e.panel && s.columns[e.col].binding === 'accidentDate' || s.cells === e.panel && s.columns[e.col].binding === 'receivedDate') {
        let data = e.panel.getCellData(e.row, e.col, false) as Date;
        if (data) {
          let utcDate = this.toUTC(data);
          e.cell.innerHTML = wjCore.Globalize.formatDate(utcDate, 'dd-MM-yyyy');
        }
      }
    });
  }

  /**
   *  Wijmo Item Formatter
   */
  itemFormatter(panel, r, c, cell) {
    if (panel.cellType == wjGrid.CellType.Cell) {
      cell.style.backgroundColor = '';
      if (panel.rows[r].dataItem.status === 'Under Investigation') {
        cell.style.color = '#ff0000';
        cell.style.fontWeight = 'bold';
      } else if (panel.rows[r].dataItem.status === 'Under Negotiation') {
        cell.style.color = '#ff9900';
        cell.style.fontWeight = 'bold';
      } else if (panel.rows[r].dataItem.status === 'New') {
        cell.style.color = '#006699';
        cell.style.fontWeight = 'bold';
      } else if (panel.rows[r].dataItem.status === 'Under Trial') {
        cell.style.color = '#990000';
        cell.style.fontWeight = 'bold';
      } else if (panel.rows[r].dataItem.status === 'Offer Accepted') {
        cell.style.color = '#006600';
        cell.style.fontWeight = 'bold';
      } else {
        cell.style.color = 'black';
        cell.style.fontWeight = 'bold';
      }
    }
  }

  setSelectedRow() {
    this.gridSelectedItem = this.flexGridWorkBasket.selectedItems[0];
    if (this.gridSelectedItem) {
      this.loadOpenClaimHandler();
    }
  }

  /**
   *  Click Events
   */
  clickEvents() {
    this.subscription.add(fromEvent(document.querySelectorAll('#grdWorkBasket'), 'dblclick').subscribe(x => {
      this.setSelectedRow();
    }));
    this.subscription.add(fromEvent(document.querySelector('#searchClaim'), 'click').subscribe(x => {
      this.searchClaim = !this.searchClaim;
    }));
    this.subscription.add(fromEvent(document.querySelector('#clearSearch'), 'click').subscribe(x => {
      this.workBasketEventHandler('loadCLWQSummary', this.payloadHandler(false));
      this.clearFilters = false;
    }));
    this.subscription.add(fromEvent(document.querySelector('#refreshGrid'), 'click').subscribe(x => {
      let claimType = this.workBasketForm.get('bpcIndicator').value;
      if (claimType) {
        this.workBasketEventHandler('loadBPCWQSummary', this.payloadHandler(claimType));
      } else {
        this.workBasketEventHandler('loadCLWQSummary', this.payloadHandler(claimType));
      }
    }));
  }

  /**
   *  Context Menu Handler & Events
   */
  menuItemClicked(ctxMenu: input.Menu) {
    this.assignViewHandler(ctxMenu);
  }

  doubleClickHandler() {
    this.flexGridWorkBasket.hostElement.addEventListener('dblclick', (event) => {
      let ht = this.flexGridWorkBasket.hitTest(event);
      let h = this.flexGridWorkBasket.select(ht.row, ht.col);
      this.gridSelectedItem = this.flexGridWorkBasket.selectedItems[0];
      if (ht.cellType === wjGrid.CellType.ColumnHeader || ht.cellType === wjGrid.CellType.ColumnFooter) {
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, true);
  }

  contextMenuHandler() {
    this.flexGridWorkBasket.hostElement.addEventListener('contextmenu', (event) => {
      let ht = this.flexGridWorkBasket.hitTest(event);
      let h = this.flexGridWorkBasket.select(ht.row, ht.col);
      this.gridSelectedItem = this.flexGridWorkBasket.selectedItems[0];
      if (ht.cellType === wjGrid.CellType.ColumnHeader || ht.cellType === wjGrid.CellType.ColumnFooter) {
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
      this.contextMenuItemSourceHandler();
    }, true);
  }

  contextMenuItemSourceHandler() {
    if (this.brief.logonCode === '00020' && this.gridSelectedItem && this.gridSelectedItem.claimTypeCode === 'CL') {
      if (!this.gridSelectedItem.CMSAssigneeID) { // If CMSAssigneeID is null
        this.ctxItemSource = this.comboData.menuItemSource.filter(value => {
          return value.data === 'loadOpenClaim' || value.data === 'loadAssign';
        });
      } else {
        this.ctxItemSource = this.comboData.menuItemSource.filter(value => {
          return value.data !== 'loadAssign';
        });
      }
    } else if (this.brief.logonCode === '00030' && this.gridSelectedItem && this.gridSelectedItem.claimTypeCode === 'CL' && !this.gridSelectedItem.independantReviewer) {
      this.ctxItemSource = this.comboData.menuItemSource.filter(value => value.data === 'loadOpenClaim' || value.data === 'loadReAssign');
    } else if (this.brief.logonCode === '00030' && this.gridSelectedItem && this.gridSelectedItem.claimTypeCode === 'CL' && this.gridSelectedItem.independantReviewer) {
      this.ctxItemSource = this.comboData.menuItemSource.filter(value => value.data !== 'loadAssign');
    } else {
      this.ctxItemSource = this.comboData.menuItemSource.filter(value => value.data === 'loadOpenClaim');
    }
  }

  /**
   *  Claim WQ Summary Payload Handler
   */
  payloadHandler(value: boolean, searchPayload?) {
    let jsonData: JsonData = new JsonData();
    jsonData.paramInt1 = this.brief.userID;
    jsonData.paramStr = this.brief.logonCode;
    if (value && !searchPayload) {
      for (let key in jsonData.summaryFilter) {
        if (key === 'claimTypeCode' || key === 'exactMatch'
          || key === 'vehicleAtFault' || key === 'archiveIndicator') {
          jsonData.summaryFilter.claimTypeCode = 'BPC';
          jsonData.summaryFilter.exactMatch = true;
          jsonData.summaryFilter.vehicleAtFault = false;
          jsonData.summaryFilter.archiveIndicator = false;
        } else {
          jsonData.summaryFilter[key] = null;
        }
      }

    } else if (searchPayload) {
      jsonData.summaryFilter = searchPayload;
    } else {
      jsonData.summaryFilter = null;
    }
    return jsonData;
  }

  /**
   *  loadOpenClaim Handler & Retrieve Claim Call
   */

  loadOpenClaimHandler() {
    this.workBasketEventHandler('loadOpenClaim', this.retrieveClaim());
    let event: ApplicationHeaderInfo = new ApplicationHeaderInfo();
    event.accidentNumber = this.gridSelectedItem.accidentNumber;
    event.claimNumber = this.gridSelectedItem.claimNumber;
    event.claimOfficer = this.gridSelectedItem.CMSAssignee;
    this.workBasketEventHandler('loadApplicationHeaderInfo', event);
    this.workBasketEventHandler('loadSelectedRow', this.gridSelectedItem);
  }

  retrieveClaim() {
    let cmsParams: CmsParams = new CmsParams();
    cmsParams.paramLong1 = this.gridSelectedItem.accidentID;
    cmsParams.paramLong2 = this.gridSelectedItem.vehicleID;
    cmsParams.paramLong3 = this.gridSelectedItem.claimID;
    cmsParams.paramLong4 = this.brief.userID;
    cmsParams.paramStr1 = this.brief.loginCompleteName;
    return cmsParams;
  }

  /**
   *  Wijmo Popup Handlers
   */
  assignViewHandler(ctxMenu) {
    this.eventName = ctxMenu.selectedValue;
    if (this.eventName !== 'loadOpenClaim') {
      this.workBasketEventHandler('loadSelectedRow', this.gridSelectedItem);
      const brief: AssignBrief = new AssignBrief();
      brief.cMsEvent.data = {selectedRow: this.gridSelectedItem, loginDetail: this.brief};
      brief.cMsEvent.code = this.eventName;
      this.workBasketEventHandler('SetAssignBrief', brief);
    } else if (this.eventName === 'loadOpenClaim') {
      this.loadOpenClaimHandler();
    }
    this.titlePopup = this.comboData.popupTitles.find(value => value.data === this.eventName).label;
  }

  /**
   *  Assign Claim Output Handler & Service Call
   */
  assignEventHandler(event) {
    this.assignClaimHandler(event);
  }

  assignClaimHandler(param: AssignParams) {
    let cmsParam: CmsParams = new CmsParams();
    cmsParam.paramLong1 = this.brief.userID;
    cmsParam.paramStr1 = this.brief.loginCompleteName;
    cmsParam.paramLong2 = param.claimID;
    if (param.assignYourself) {
      cmsParam.paramLong3 = this.brief.userID;
    } else {
      cmsParam.paramLong3 = Number(param.assignedTo);
    }
    cmsParam.paramStr2 = param.assigneeType;
    cmsParam.paramStr3 = param.operationType;
    cmsParam.paramStr4 = '00011';
    this.workBasketEventHandler(this.eventName, cmsParam);
  }

  /**
   * workBasketEventHandler
   */
  workBasketEventHandler(code: string, data: any) {
    let event: CMSEvents = new CMSEvents();
    event.code = code;
    event.data = data;
    this.eventHandler.emit(event);
  }

  /**
   * searchClaimEventHandler
   */
  searchClaimEventHandler(event) {
    if (event.code === 'loadSearchAccident') {
      this.workBasketEventHandler('loadSearchWQSummary', this.payloadHandler(false, event.data));
      this.searchClaim = !this.searchClaim;
      this.clearFilters = true;
    } else if (event.code == 'resetForm') {
      this.workBasketEventHandler('loadCLWQSummary', this.payloadHandler(false));
    } else if (event.code == 'alertSearchAccidentFromDate') {
      this.workBasketEventHandler('alertSearchAccidentFromDate', null);
    }
  }


  summaryFilterBriefHandler() {
    this.summaryFilterBrief.applicationType = 'claim';
    this.summaryFilterBrief.logonCode = this.brief.logonCode;
    this.summaryFilterBrief.loginID = this.brief.userID;
  }

  /**
   * No Record Found
   */
  noRecordFound() {
    let event: CMSEvents = new CMSEvents();
    event.code = 'loadNoRecordFound';
    this.eventHandler.emit(event);
  }

  private toUTC(date: Date) {
    return new Date(new Date(date).getTime() + new Date(date).getTimezoneOffset() * 60000);
  }

}
