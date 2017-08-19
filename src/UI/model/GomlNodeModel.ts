import ISocket from "../../common/socket/ISocket";
import TreeElement from "../view/element-tree/TreeElement";
import InspectionData from "../view/inspector/InspectionData";
export default class GomlNodeModel {

    public readonly rootElement: TreeElement = { nodeFQN: "empty", attributes: [], children: [], id: "(empty)" };

    public readonly currentNode: InspectionData = { nodeFQN: "empty", components: [] };

    private _idCache: { [id: string]: TreeElement } = {};

    constructor(public socket: ISocket) {
        socket.on("notify-node-structure", (args: any) => {
            this.rootElement.nodeFQN = args.root.nodeFQN;
            this.rootElement.attributes = args.root.attributes;
            this.rootElement.children = args.root.children;
            this.rootElement.id = args.root.id;
            this._idCache = {};
            this._cacheRecursive(this.rootElement);
            this.setInspectionTarget(this.rootElement.id);
        });
        socket.on("notify-node-added", (args: any) => {
            this._addNode(args.parentId, args.node);
        });
        socket.on("notify-node-removed", (args: any) => {
            this._removeNode(args.parentId, args.nodeId);
        });
        socket.on("notify-inspect-node",(args:any)=>{
            const inspectionData = args.nodeInfo as InspectionData;
            this.currentNode.nodeFQN = inspectionData.nodeFQN;
            this.currentNode.components = inspectionData.components;
        });
    }

    public setInspectionTarget(id: string): void {
        this.socket.send("start-inspect-node", { $rootNodeId: this.rootElement.id, nodeId: id });
    }

    public disconenctInspectionTarget(): void {
        this.socket.send("end-inspect-node", {});
    }

    private _cacheRecursive(element: TreeElement): void {
        this._idCache[element.id] = element;
        for (let i = 0; i < element.children.length; i++) {
            this._cacheRecursive(element.children[i]);
        }
    }

    private _removeRecursive(element: TreeElement): void {
        delete this._idCache[element.id];
        for (let i = 0; i < element.children.length; i++) {
            this._removeRecursive(element.children[i]);
        }
    }

    private _addNode(parentId: string, element: TreeElement): void {
        // TODO This should consider order
        this._idCache[parentId]!.children.push(element);
        this._cacheRecursive(element);
    }

    private _removeNode(parentId: string, nodeId: string): void {
        const siblings = this._idCache[parentId].children;
        for (let i = 0; i < siblings.length; i++) {
            if (siblings[i].id === nodeId) {
                siblings.splice(i, 1);
                break;
            }
        }
        this._removeRecursive(this._idCache[nodeId]);
    }
}