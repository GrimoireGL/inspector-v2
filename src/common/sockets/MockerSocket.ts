import IConnectorSocket from "../IConnectorSocket";
import { ConnectionType,Connector,ConnectorFactory } from "../Connection";
import {Packet} from "../Packet";
import {Serializable} from "ts-serializer";
/**
 * Mocked socket to communicate with server in current window context.
 * @return {[type]} [description]
 */
export default class MockerSocket implements IConnectorSocket {
  constructor() {
    this.socketId = Math.random()+"";
  }
  socketId: string;
  receivers: {[key:string]:(content: Packet<any>) => void} = {};
  send<T extends Serializable>(content: Packet<T>): void {
    setTimeout(()=>{
      this._receive<T>(JSON.stringify(content.serialize()));
    },0);
  }
  on<T extends Serializable>(receiver:Connector,handler: (content: Packet<T>) => void): void {
    if(this.receivers[receiver.id]){
      throw new Error(`receiver for specified connector was already registered`);
    }else{
      this.receivers[receiver.id] = handler;
    }
  }

  private _receive<T extends Serializable>(content: string):void{
    const p=Packet.fromJSON<T>(content);
    if(!this.receivers[p.connectorId]){
      ConnectorFactory.defaultFactory.generateConnector(p.connectorType,p.connectorId);
    }
    this.receivers[p.connectorId](p);
  }
}
