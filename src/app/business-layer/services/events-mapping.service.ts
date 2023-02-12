import {Injectable} from "@angular/core";

@Injectable()
export class EventsMappingService {
  private eventsMapping: any;

  public setEventsMapping(mapping: any) {
    this.eventsMapping = mapping;
  }


  public getEvent(property: string): any {
    return this.eventsMapping.eventHandler.find(value => value.code === property);
  }


}
