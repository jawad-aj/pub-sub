import {ClaimWQSummary} from "../../../business-layer/models/ClaimWQSummary";

export class WorkBasketUtil {
//searchByDay


  /*░░░░░░░░░░░░░░░░░░░░░░Search By Today ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static todayFiltration(arrayForFiltration: ClaimWQSummary[]): ClaimWQSummary[] {
    let arrayToBeFiltered = arrayForFiltration.filter(
      date => new Date(String(date.accidentDate)).toLocaleDateString() === new Date().toLocaleDateString()
    );
    return arrayToBeFiltered;
  }

  /*░░░░░░░░░░░░░░░░░░░░░░Search By Current Week░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static currentWeekFiltration(arrayForFiltration: ClaimWQSummary[], currentDate: Date): ClaimWQSummary[] {
    let firstDayOfWeek = currentDate.getDate() - currentDate.getDay(); // First searchByDay is the searchByDay of the month - the searchByDay of the week
    let arrayToBeFiltered = arrayForFiltration.filter(
      date => new Date(String(date.accidentDate)).toLocaleDateString() >= new Date(currentDate.setDate(firstDayOfWeek)).toLocaleDateString() && new Date(String(date.accidentDate)).toLocaleDateString() <= new Date().toLocaleDateString()
    );
    return arrayToBeFiltered;
  }

  /*░░░░░░░░░░░░░░░░░░░░░░Search By Current Week░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  static currentMonthFiltration(arrayForFiltration: ClaimWQSummary[], currentDate: Date): ClaimWQSummary[] {
    let firstDayOfMonth = currentDate.getMonth() + 1 + '/' + '01' + '/' + currentDate.getFullYear();
    let arrayToBeFiltered = arrayForFiltration.filter(
      date => new Date(String(date.accidentDate)).toLocaleDateString() >= new Date(firstDayOfMonth).toLocaleDateString() && new Date(String(date.accidentDate)).toLocaleDateString() <= currentDate.toLocaleDateString()
    );
    return arrayToBeFiltered;
  }

  //filterByRange
  static filtrationByRange(arrayForFiltration: ClaimWQSummary[], fromDate, toDate): ClaimWQSummary[] {
    if (fromDate != '' && toDate != '') {
      let arrayToBeFiltered = arrayForFiltration.filter(date => new Date(String(date.accidentDate)).toISOString() >= new Date(fromDate).toISOString() && new Date(String(date.accidentDate)).toISOString() <= new Date(toDate).toISOString()
      );
      return arrayToBeFiltered;
    } else {
      return arrayForFiltration;
    }
  }

  //Status filtration
  static statusFiltration(arrayForFiltration: ClaimWQSummary[], status: string): ClaimWQSummary[] {
    if (status === 'TDL') {
    let arrayToBeFiltered = arrayForFiltration.filter(item=> (item.status === 'In Progress' || item.status === 'New' || item.status === 'Under Investigation' ) && item.classCode !== '0');
      return arrayToBeFiltered;
    }
    else{
      return arrayForFiltration;
    }
  }

  static menuArrayHandler(menuItemsNames, menuItems) {
    menuItemsNames.push('Open Claim');
    menuItemsNames.push('Take Control');
    menuItemsNames.push('ReAssign');
    menuItemsNames.push('Assign');
    for (let i = 0; i < 4; i++) {
      let item = {
        id: i,
        name: menuItemsNames[i]
      };
      menuItems.push(item);
    }
  }

  static menuItemsHandler(selectedObject, menuItemOriginalArray: any[]): any[] {
    let menuItems: any [] = [];
    if (selectedObject.CMSAssignee !== null) {
      menuItemOriginalArray.forEach(value => {
        if (value.name != 'Assign') {
          menuItems.push(value);
        }
      });
    } else {
      menuItemOriginalArray.forEach(value => {
        if (value.name == 'Open Claim' || value.name == 'Assign') {
          menuItems.push(value);
        }
      });
    }
    return menuItems;
  }

}
