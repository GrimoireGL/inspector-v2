import { EventEmitter } from "eventemitter3";
import IDGenerator from "../common/IDGenerator";
import ContentScriptSocket from "./ContentScriptSocket";
export default class FrameObserver extends EventEmitter {

  public windowId: string;

  constructor(public css: ContentScriptSocket) {
    super();
    if (!this._inIframe()) {
      this.windowId = "(root)";
    } else {
      this.windowId = IDGenerator.generate();
    }
    css.on("cs-fetch-windows", (args) => {
      this._notifyWindowState();
    });
    css.frameId = this.windowId;
    this._notifyWindowState();
    // TODO Send unload event to detect iframe removing. unload event not work for this purpose
    //window.addEventListener("unload",()=>this._onunload.bind(this));
  }

  private _inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  private _notifyWindowState(): void {
    this.css.send("cs-notify-window", {
      windowId: this.windowId,
      windowLocation:window.location.href
    });
  }

  private _onunload() {
    this.css.send("cs-window-unload", {
      windowId: this.windowId
    });
  }
}
