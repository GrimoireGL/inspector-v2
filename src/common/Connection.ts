import IConnectorSocket from "./IConnectorSocket";
import {Packet} from "./Packet";
import { Serializable, Serialize, SerializeProperty } from "ts-serializer";
export enum ConnectionType {
  Server,
  Client
}
export class Connector {
  public type: ConnectionType;

  public socket: IConnectorSocket;

  public id: string;

  constructor(){
    this.id = Math.random() + "";
    this.socket = ConnectorFactory.defaultFactory.socket;
    this.type = ConnectorFactory.defaultFactory.constructedConnectorType;
  }

  public initialize(): void {

  }

  public subscribeToSocket(): void{
    this.socket.on(this,(packet)=>{
      if((this as any)[packet.targetKey]){
        (this as any)[packet.targetKey](packet.content);
      }
    });
  }

  public getTypeName():string{
    const funcNameRegex = /function (.{1,})\(/;
    const result = (funcNameRegex).exec((this).constructor.toString());
    return (result && result.length > 1) ? result[1] : "";
  }
}

export class ConnectorFactory {
  public static defaultFactory:ConnectorFactory = new ConnectorFactory();

  public static connectors:{[key:string]:new ()=>Connector} = {};

  public socket: IConnectorSocket;

  public generatedConnectorType: ConnectionType = ConnectionType.Server;

  public constructedConnectorType: ConnectionType = ConnectionType.Client;

  public generateConnector(type:string,id:string): Connector {
    if(ConnectorFactory.connectors[type]){
      const connector = new ConnectorFactory.connectors[type]();
      connector.type = this.generatedConnectorType;
      connector.id = id;
      connector.socket = this.socket;
      connector.subscribeToSocket();
      connector.initialize();
      return connector;
    }else{
      throw new Error("Connector was not registered yet");
    }
  }
}



export function RegisterConnector<Constructor extends { new(...args: any[]): Connector }>(ctor: Constructor) {
  const funcNameRegex = /function (.{1,})\(/;
  const result = (funcNameRegex).exec(ctor.toString());
  const ctorName = (result && result.length > 1) ? result[1] : "";
  if (!ConnectorFactory.connectors[ctorName]) {
    ConnectorFactory.connectors[ctorName] = ctor;
  } else {
    throw new Error(`Dupelicated identifier for ConnectorFactory class named ${ctorName}`);
  }
  return ctor;
}



function proxyCall(type: ConnectionType) {
  return <T extends Serializable>(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    if (target instanceof Connector) {
      const original: (...args: any[]) => any = descriptor.value;
      descriptor.value = function(this: Connector, ...args: any[]) {
        if (args.length > 1) {
          throw new Error("@Server,@Client method cannot accept 2 or more arguments");
        }
        if (this.type === type) { // If this connection is same as specified type.
          return original.apply(this, args);
        }
        this.socket.send(Packet.fromContent(this.id,this.getTypeName(),key,args[0] as T));
      };
      return descriptor;
    } else {
      throw new Error(`@Server,@Client cannot apply to non Connector classes`);
    }
  };
}

export function Server() {
  return proxyCall(ConnectionType.Server);
}

export function Client() {
  return proxyCall(ConnectionType.Client);
}
