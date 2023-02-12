import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gridFilter'
})
export class GridFilterPipe implements PipeTransform {
  transform(myvalue: any, searchTerm: any): any {
    if (myvalue) {
      return myvalue.filter(function (search) {
        if (myvalue.length === 0) {
          return myvalue;
        } else {
          return search.accidentNumber != null && search.accidentNumber.indexOf(searchTerm) > -1
            || search.accidentDate != null && search.accidentDate.indexOf(searchTerm) > -1
            || search.registrationNumber != null && search.registrationNumber.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            || search.claimNumber != null && search.claimNumber.indexOf(searchTerm) > -1
            || search.receivedDate != null && search.receivedDate.indexOf(searchTerm) > -1
            || search.claimantName.toLowerCase() != null && search.claimantName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            || search.roleType != null && search.roleType.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            || (search.CMSAssignee != null && search.CMSAssignee.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
            || search.status != null && search.status.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            || search.estimatedAmount != null && search.estimatedAmount == searchTerm
            || search.reservedAmount != null && search.reservedAmount == searchTerm
            || search.claimantPaidAmount != null && search.claimantPaidAmount == searchTerm
            || search.totalPaidAmount != null && search.totalPaidAmount == searchTerm;
        }
      })

    }
  }
}
