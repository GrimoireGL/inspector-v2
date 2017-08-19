import ISocket from "../../common/socket/ISocket";
import GrimoireInterfaceImpl from "grimoirejs/ref/Interface/GrimoireInterfaceImpl";
import IGrimoireNodeMessage from "../../common/messages/IGrimoireNodeMessage";
import GrimoireToViewModelConverter from "../../common/GrimoireToViewModelConverter";
import GomlNode from "grimoirejs/ref/Node/GomlNode";
export default class NodeObserver {
    constructor(public socket: ISocket, public gr: GrimoireInterfaceImpl) {
        socket.on("start-inspect-node", (args: any) => {
            const node = gr.nodeDictionary[args.nodeId];
            socket.send("notify-inspect-node", {
                nodeInfo: GrimoireToViewModelConverter.convertInspectionData(node)
            });
        });
    }
}