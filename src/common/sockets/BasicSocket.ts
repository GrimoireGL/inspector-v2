import ISocket from "./ISocket";

export default abstract class BasicSocket implements ISocket{
  private messageHandlers:{[messageType:string]:((args:Object)=>void)} = {};
  public send(messageType:string,args:any):void{
    const messageContent = Object.assign({
      $source:"grimoirejs-inspector-v2",
      $messageType:messageType
    },this.__sendTransform(args));
    this.__send(messageContent);
  }

  protected abstract __send(args:any):void;

  protected __sendTransform(args:Object):Object{
    return args;
  }
  protected __receiveFilter(args:Object):boolean{
    return true;
  }

  protected __onNonRegisteredMessage(args:Object):void{
    throw new Error(`Message handler for type '${(args as any).$messageType}' is not registered yet.`);
  }

  protected __onReceive(args:Object):void{
    if((args as any).$source !== "grimoirejs-inspector-v2")return;
    if(!this.__receiveFilter(args))return;
    if(!(args as any).$messageType)return;
    const type = (args as any).$messageType;
    if(this.messageHandlers[type]){
      this.messageHandlers[type](args);
    }else{
      this.__onNonRegisteredMessage(args);
    }
  }

  public on(messageType:string,func:(args:Object)=>void):void{
    if(this.messageHandlers[messageType]){
      throw new Error("Specified handler was already registered");
    }
    this.messageHandlers[messageType] = func;
  }

  public off(messageType:string):void{
    delete this.messageHandlers[messageType];
  }

}
