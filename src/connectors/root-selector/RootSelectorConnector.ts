import { Connector, RegisterConnector, ConnectionType, Server, Client } from "../../common/Connection";
import { PacketContent } from "../../common/Packet";
import { Serialize, SerializeProperty, Serializable } from "ts-serializer";
import GrimoireWindow from "../../common/GrimoireWindow";
import _ from "lodash"
@PacketContent
@Serialize({})
export class GrimoireRootNodeInfo extends Serializable {
  constructor(public nodeId?: string,public contextId?: string,public parentFrame?: string) {
    super();
  }
}

@PacketContent
@Serialize({})
export class ContextDetectedPacketContent extends Serializable {
  constructor(public rootNodes?:GrimoireRootNodeInfo[]){
    super()
  }
}

@RegisterConnector
export default class RootSelectorConnector extends Connector {
  public initialize() {
    if (this.type === ConnectionType.Server) {
      const gr = (window as GrimoireWindow).GrimoireJS;
      if (gr) {
        this.contextDetected(
          new ContextDetectedPacketContent(
            _.map(gr.rootNodes,(node:any,key:string)=>new GrimoireRootNodeInfo(node.id,node.id,key))));
      }else{
        console.log("Could not find context");
      }
    }
  }

  @Server()
  public contextDetected(packet:ContextDetectedPacketContent) {
    console.log(packet);
  }

  @Server()
  public connect() {

  }
}
