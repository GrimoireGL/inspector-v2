import BasicSocket from "../common/socket/BasicSocket";

export default class BrowserDevtoolSocket extends BasicSocket {
  constructor() {
    super("browser-mode");
    window.addEventListener("message", message => {
      this.__onReceive(message.data);
    });
  }

  protected __send(args: Object): void {
    window.postMessage(args, "*");
  }

  protected __receiveFilter(args: any): boolean {
    return args.$fromBackend !== true;
  }

  protected __sendTransform(args: Object): Object {
    return Object.assign({
      $fromBackend: true
    }, args);
  }
}
