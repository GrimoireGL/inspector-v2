/**
 * Primitive functions to co-work with devtool window and actual browser window.
 * These args should be JSON convertible objects.
 */
interface ISocket{
  send(messageType:string,args:any):void;
  on(messageType:string,func:(args:Object)=>void):void;
  off(messageType:string):void;
}

export default ISocket;
