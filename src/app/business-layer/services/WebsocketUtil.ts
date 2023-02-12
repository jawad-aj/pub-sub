import {Injectable} from '@angular/core';
import {StoreService} from './store.service';
import {CMSEvents} from "../models/CMSEvents";

@Injectable()
export class WebsocketUtil {
  private socket: any;

  constructor(public storeService: StoreService) {
  }

  /**
   * Connect Web Socket.
   */
  public connect(serviceEndpoint: string) {
    try {
          console.log('Service EndPoint:',serviceEndpoint)
      this.socket = new WebSocket(serviceEndpoint);
       console.log('socket',this.socket)
      this.onOpen();
    } catch {
      console.log('Catch Error Of Connection ');
      return true;
    }
  }

  /**
   * For Closing Web Socket Manually.
   */
  public disconnect(code = 'logout') {
    if (this.socket) {
      this.socket.close(1000, code);
    }
  }

  /**
   * For Sending Web Socket Message To Server.
   */
  public send(payLoad) {
    if (this.socket) {
      this.socket.send(payLoad);
    }
  }

  /**
   * Web Socket On Message Method For Receiving Data From Server.
   */
  public getMessages() {
    if (this.socket) {
      this.socket.onmessage = (message) => {
        const response = JSON.parse(message.data);
        if (response.action === 'identity') {
          this.dispatchEvent(response.action, 'WS: Connected');
        } else {
          response.payLoad = JSON.parse(response.payLoad);
          console.log('Message Received :', response);
          this.dispatchEvent(response.payLoad.actionName, response);
        }
      };
    }
  }

  /**
   * Web Socket On Open Method For Handshake.
   */
  public onOpen() {
    if (this.socket) {
      this.socket.onopen = () => {
        console.log('On Open');
        this.onCLose();
        this.onError();
        this.getMessages();
        this.dispatchEvent('loadWebsocketAuthentication', true);
      };
    }
  }

  /**
   * Web Socket on close Method.
   */
  public onCLose() {
    if (this.socket) {
      this.socket.onclose = (event) => {
        console.log(`[close] Connection closed cleanly, code= ${event.code} reason= ${event.reason}`);
        this.dispatchEvent('disconnectWebsocket', 'WS: Disconnected');
        this.socket = undefined;
        if (!event.wasClean || event.reason !== 'logout') {
          this.reconnectWebsocket();
        } else {
          this.dispatchEvent('disconnectWebsocket', '');
        }
      };
    }
  }

  reconnectWebsocket() {
    setTimeout(() => {
      this.socket = undefined;
      this.dispatchEvent('loadWebsocketConnect', true);
    }, 60000);
  }

  /**
   * Web Socket on error Method.
   */
  public onError() {
    if (this.socket) {
      this.socket.onerror = (error) => {
        console.log(`WebSocket Custom error: ${error}`);
        this.reconnectWebsocket();
      };
    }
  }

  dispatchEvent(code, data) {
    const cMSEvent: CMSEvents = new CMSEvents();
    cMSEvent.code = code;
    cMSEvent.data = data;
    this.storeService.eventDispatcher(cMSEvent);
  }
}
