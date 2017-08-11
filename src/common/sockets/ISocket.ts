/**
 * Server socket provide abstraction of connector instance used in inspecter.
 * This is browser window side instance to connect.
 */
interface ISocket{
  send(messageType:string,args:any):void;
  on(messageType:string,func:(args:Object)=>void):void;
  off(messageType:string):void;
}

export default ISocket;
