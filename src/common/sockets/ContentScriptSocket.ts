import BasicSocket from "./BasicSocket";

export default class ContentScriptSocket extends BasicSocket{
  constructor(public frameId:string){
    super();
    chrome.runtime.onMessage.addListener(this.__onReceive.bind(this));
  }
  protected __send(args:Object):void{
    chrome.runtime.sendMessage(args);
  }

  protected __sendTransform(args:Object):Object{
    return Object.assign({$frameId:this.frameId},args);
  }

  protected __receiveFilter(args:Object):boolean{
    if((args as any).$frameId !== void 0 && (args as any).$frameId !== this.frameId){
      return false;
    }else{
      return true;
    }
  }

  /**
   * Pass through to window
   * @param {Object} args [description]
   */
  protected __onNonRegisteredMessage(args:Object):void{
    window.postMessage(args,"*");
  }
}
