import {Injectable} from '@angular/core';
import {PaymentFilter} from '../models/PaymentFilter';

@Injectable()
export class SystemAdminPaymentFilterService {
  private filter: PaymentFilter;

  public setFilter(filter: PaymentFilter) {
    this.filter = filter;
  }

  public getFilter(): PaymentFilter {
    return this.filter;
  }

}
