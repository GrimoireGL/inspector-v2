import {Serializable} from "ts-serializer";
import { ConnectionType,Connector,ConnectorFactory } from "./Connection";
import {Packet} from "./Packet";
/**
 * Abstraction of connection for server and client
 * @type {string}
 */
interface IConnectorSocket {
  socketId: string;
  send<T extends Serializable>(content: Packet<T>): void;
  on<T extends Serializable>(receiver:Connector,handler: (content: Packet<T>) => void): void;
}

export default IConnectorSocket;
