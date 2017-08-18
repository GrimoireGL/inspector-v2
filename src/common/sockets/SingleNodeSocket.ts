import ISocket from "./ISocket";
export default class SingleNodeSocket implements ISocket{
    public frameId:string;

    public rootNodeId:string;

    constructor(public socket:ISocket){
        
    }

    public send(messageType: string, args: any): void {
        this.socket.send(messageType,Object.assign({$frameId:this.frameId,$rootNodeId:this.rootNodeId},args));
    }

    public on(messageType: string, func: (args: Object) => void): void {
        this.socket.on(messageType,func);
    }
    public off(messageType: string): void {
        this.socket.off(messageType);
    }
}