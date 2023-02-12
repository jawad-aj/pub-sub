export class PaymentFilter {
  public batchID: number = null;
  public batch: string = ''; // For Form
  public filterType: string = '';
  public fromDate: string = '';
  public toDate: string = '';
  public paymentType: string = '';
  public fromAmount: number = null;
  public toAmount: number = null;
}
