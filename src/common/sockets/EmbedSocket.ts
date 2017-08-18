import BasicSocket from "./BasicSocket";

export default class EmbedSocket extends BasicSocket{
  constructor(){
    super();
    window.addEventListener("message",message=>{
        this.__onReceive(message.data);
    });
  }

  protected __send(args:Object):void{
    window.postMessage(args,"*");
  }

  protected __receiveFilter(args:any):boolean{
    return args.$fromBackend !== false;
  }

  protected __sendTransform(args:Object):Object{
    return Object.assign({
      $fromBackend:false
    },args);
  }
}
