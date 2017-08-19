import BasicSocket from "../common/socket/BasicSocket";

export default class DevtoolSocket extends BasicSocket{
  private _bpc:chrome.runtime.Port;
  constructor(){
    super();
    this._bpc = chrome.runtime.connect({name:"grimoirejs-inspector-v2"});
    this._bpc.onMessage.addListener((m)=>{
      this.__onReceive(m);
    });
  }
  protected __send(args:Object):void{
    this._bpc.postMessage(args);
  }

  protected __sendTransform(args:Object):Object{
    return Object.assign({$tabId:chrome.devtools.inspectedWindow.tabId},args);
  }
}
