import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingBarService} from '@ngx-loading-bar/core';
import {NGRxBrokerRegistrationService} from "./business-layer/brokerage/registries/ngrx.broker.registration.service";
import * as EventsMappingActionTypes from "./business-layer/shared-types/actions/eventsMapping.action.types";
import {Subscription} from "rxjs";
import {BrokerList} from "./business-layer/brokerage/ngrx-stubs/brokerlist";
import {StoreService} from "./business-layer/services/store.service";
import {StreamHandlerService} from "./business-layer/services/stream-handler.service";
import {setLicenseKey} from '@grapecity/wijmo';

/**
 * Define wijmo license
 */
setLicenseKey('node2.coplsaas.com.au|dev.coplsaas.com.au|afa.coplsaas.com.au|node4.coplsaas.com.au|node1.coplsaas.com.au|dev04.coplsaas.com.au|dev01.coplsaas.com.au|geniussoftware.com.au|node3.coplsaas.com.au|61199cf733604ff2bb41207175bc7976.vfs.cloud9.ap-southeast-2.amazonaws.com|dev01ms.coplsaas.com.au|e12a7146ddc742eb9391aac1f0ded14d.vfs.cloud9.ap-southeast-2.amazonaws.com|mvil.coplsaas.com.au|twg.coplsaas.com.au|192.168.0.44|192.168.0.47|localhost,477519761399669#B0BHnw36YuITZk3mbiojIz5GRiwiIkRHTgkHdQByc4NWZqJ6TgQXakVmcDJiOiEmTDJCLikjN6kTOzEjN7kTM5czN4IiOiQWSiwSfiMjd9EDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPn9kQjBFNi5ERy2kUBNGN5lXa6ZmMrJWTOJmW6RUWpFjW9UncyJ6LQNlN5VFR5IkMlVUUy9kRyQ7YzhFMP3Ce8NHUWVnZEBDMuxGcWdTYDtyQadGWltCMrl7VthFdWdDa9cUbZVFOTJGeXl7QT3SSZdDOvdjd9tUcwR7YuxmVsx4SsdlWVBDcWZjSuRGMyxme4E4ZrkWds5WbkVGMpRkQJRWd53kd7EGa7FHeYtiW7RzYr4mWaR5a8lGVrsiNYJmTxZGRDtGcCN7QShHUlNzMRR5T8MjWvMFShlTWaxmTxcEeT54ahpUd4kFO9Aler2iaMNnTZ5WNihndxk6a0tUNJJmVZx4dklnVklUW8BjRjl6QC3GMFZUbXFDUHlFeiVVd6kGdvM5csp7SUV4bxRDMElEboVlUyRnZXxESMp4UBdkSz8WQRp4SIlWb9E7cP94bnpFdhZHbiojITJCLikTO7EzQwYTMiojIIJCL4EDO5MTN9ADN0IicfJye&Qf35VfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1tlOiQmcQJCLiQDN9UTOwAyNyITMwIDMyIiOiQncDJCLiQ7cvhGbhN6bsxyN48CMugjNx8iM9EDL4QjLw8CO6EjLykTMsUXYu46bj9ychF6csB7bj9yZ7RHL5FmLt36YuMXYhNHbw36YuwWa65GLt36YuM7dh96b0FWbh9iMtQ7chVGa4V7bz5Cch9SOkV7bsNmLzZmduQGNxQWZkBjZxMWYhFTOzkjYlJDN7MGZkZDNxcTYyETZsUXYu46bj9ychF6csB7bj9yctFDM6VGZs46bj9yc7FmbvpXYtFmLy4CdzFWZoRXdvNXLwFmL9QWdvx6YuMnZ69iN7kzNjJWN7EzNwITM4ImYyYmZ4AjNzMzNmNWO9ETM6wSdh9SbvNmLzFWYzxGcvNmLzUGZv9GL5FmLt36YuUmchdHdm36czVXauV6ZsUXYu46bj9ychF6csB7bj9SMwYXZkxSdh9SbvNmLzFWYzxGcvNmL4AjdlRGL5FmLt36YuMXYhNHbw36YuETZk3mbsUXYu46bj9ychF6csB7bj9CNlR6buxSdh9SbvNmLzFWYzxGcvNmLhZWYsUXYu46bj9ychF6csB7bj9idlRGL5FmLt36YuyXmh');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  disableBackgroundIndicator: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(public nGRxBrokerRegistrationService: NGRxBrokerRegistrationService,
              public loadingBarService: LoadingBarService, public router: Router,
              private storeService: StoreService, public eventHandlerService: StreamHandlerService) {

    this.loadingBarService.progress$.forEach((value) => {
      if (value == 0 || value == 100) {
        this.disableBackgroundIndicator = false;
      } else {
        this.disableBackgroundIndicator = true;
      }
    });
  }
  /**
   *  Angular Life Hook Cycles
   */
  ngOnInit(): void {
    this.getEventMapping();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  /**
  * Dispatch Action for events mapping json file & Set Events Mapping to DI
  */
  getEventMapping() {
    this.storeService.actionDispatcher(EventsMappingActionTypes.GET_EVENTS_MAPPING, BrokerList.BROKER_EVENTS_MAPPING_STORE, 'eventsmapping.json');
  }

}
