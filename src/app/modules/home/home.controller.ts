import {Component, OnInit} from '@angular/core';
import {CMSEvents} from '../../business-layer/models/CMSEvents';
import {StoreService} from '../../business-layer/services/store.service';
import {NgIdleService} from '../../business-layer/services/NgIdle.service';

@Component({
  selector: 'app-home',
  templateUrl: './HomeComponent.html'
})
export class HomeController implements OnInit {

  constructor(private storeService: StoreService, private ngIdleService: NgIdleService) {
    this.eventHandler();

  }

  /**
   *  Angular Life Hook Cycles
   */
  ngOnInit(): void {
    this.ngIdleService.startSessionTimeout();
  }

  /**
   *  Event Handlers
   */
  eventHandler() {
    let event: CMSEvents = new CMSEvents();
    event.code = 'loadHeaderComboData';
    event.data = 'home';
    this.storeService.eventDispatcher(event);
  }
}
