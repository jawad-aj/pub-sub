import {SummaryFilter} from "../../../business-layer/models/SummaryFilter";

export class SearchAccidentUtil {


  static checkRequiredFields(summaryFilter: SummaryFilter): boolean {
    for (let summaryFilterKey in summaryFilter) {
      if (summaryFilter[summaryFilterKey] !== '' && summaryFilter[summaryFilterKey] !== 0 && summaryFilter[summaryFilterKey] !== null
        && summaryFilterKey !== 'vehicleAtFault' && summaryFilterKey !== 'exactMatch' && summaryFilterKey !== 'viewType' &&
        summaryFilterKey !== 'claimTypeCode') {
        return true;
      } else if (summaryFilterKey === 'vehicleAtFault' && summaryFilter[summaryFilterKey] != false && summaryFilter[summaryFilterKey] !== null) {
        return true;
      }
    }
  }
  static contextMenuItemSource(array: any[]){
    let obj={
      id: 0,
      name: 'Open Accident'
    };
    array.push(obj);
  }
}
