import {Observable, of, Subscription} from "rxjs";
import {Footer} from "../../business-layer/models/Footer";
import {BrokerList} from "../../business-layer/brokerage/ngrx-stubs/brokerlist";
import {StoreService} from "../../business-layer/services/store.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FooterService {
  constructor(private storeService: StoreService) {
  }

  setFooterBrief(data: any): Observable<Footer> {
    let footer: Footer = new Footer();
    const subscription: Subscription = new Subscription();
    subscription.add(this.storeService.selectorDispatcher(BrokerList.BROKER_FOOTER_CONTROLLER_STORE).footerBrief$.subscribe((value: Footer) => {
      footer = value;
    }));
    footer.websocketStatus = data;
    subscription.unsubscribe();
    return of(footer);
  }
}
