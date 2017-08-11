import AddRemoveMutationObserverWrapper from "./AddRemoveMutationObserverWrapper";
import {EventEmitter} from "eventemitter3";
export default class FrameObserver extends EventEmitter{

  private _iframeObserver: AddRemoveMutationObserverWrapper<HTMLIFrameElement> = new AddRemoveMutationObserverWrapper<HTMLIFrameElement>("iframe");

  private frames: HTMLIFrameElement[] = [];

  constructor() {
    super();
    this._iframeObserver.on("added",this.onIFrameAdded.bind(this));
    this._iframeObserver.on("removed",this.onIFrameRemoved.bind(this));
    this._iframeObserver.observe();
  }

  public sendMessageToFrames(message: string): void {
    this.frames.forEach(f => f.contentWindow.postMessage(message, "*"));
  }

  public onIFrameAdded(iframe: HTMLIFrameElement): void {
    this.frames.push(iframe);
    this.emit("added",iframe);
  }

  public onIFrameRemoved(iframe: HTMLIFrameElement): void {
    const index = this.frames.indexOf(iframe);
    this.frames.splice(index, 1);
    this.emit("removed",iframe);
  }

  private _inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
}
