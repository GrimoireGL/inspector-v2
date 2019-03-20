import ISocket from "../../common/socket/ISocket";
import GrimoireInterfaceImpl from "grimoirejs/ref/Core/GrimoireInterfaceImpl";
import IGrimoireNodeMessage from "../../common/messages/IGrimoireNodeMessage";
import GrimoireToViewModelConverter from "../../common/GrimoireToViewModelConverter";
import GomlNode from "grimoirejs/ref/Core/GomlNode";
import Component from "grimoirejs/ref/Core/Component";
import Attribute from "grimoirejs/ref/Core/Attribute";
import InspectionData from "../../UI/view/inspector/InspectionData";
import { IChangedAttribute } from "../../common/messages/IAttributeNotifyMessage"
export default class NodeObserver {
    private _currentNode: GomlNode;

    private _watchingAttributes: Attribute[] | null;

    private _changedAttributes: Set<Attribute> = new Set<Attribute>();

    constructor(public socket: ISocket, public gr: GrimoireInterfaceImpl) {
        socket.on("start-inspect-node", (args: any) => {
            this._purgeWatchers();
            const node = gr.nodeDictionary[args.nodeId];
            this._watch(node);
            socket.send("notify-inspect-node", {
                nodeInfo: GrimoireToViewModelConverter.convertInspectionData(node)
            });
        });
        socket.on("modify-attribute", (args: any) => {
            const component = this.gr.componentDictionary[args.componentId] as Component;
            component.setAttribute(args.attributeFQN, args.data);
        });
        setInterval(this._update.bind(this), 200);
    }

    private _update(): void {
        if (this._currentNode && this._changedAttributes.size !== 0) {
            const mutations = [] as IChangedAttribute[];
            this._changedAttributes.forEach(attribute => {
                mutations.push({
                    attributeFQN: attribute.name.fqn,
                    componentId: attribute.component.id,
                    attributeData: GrimoireToViewModelConverter.convertInspectionAttributeData(attribute)
                });
            });
            this.socket.send("notify-attribute-changed", {
                mutations: mutations
            });
            this._changedAttributes.clear();
        }
    }

    private _purgeWatchers(): void {
        if (this._currentNode) {
            const components = this._currentNode.getComponents(Component);
            for (let attribute of this._watchingAttributes!) {
                attribute.unwatch(this._onAttributeChange);
            }
            this._watchingAttributes = null;
        }
    }

    private _watch(node: GomlNode): void {
        this._currentNode = node;
        this._watchingAttributes = [];
        const components = this._currentNode.getComponents(Component);
        for (let c of components) {
            c.attributes.forEach((attribute) => {
                attribute.watch(this._onAttributeChange, false, true);
                this._watchingAttributes!.push(attribute);
            });
        }
    }

    private _onAttributeChange: (n: any, o: any, a: Attribute) => void = ((n: any, o: any, a: Attribute) => this._changedAttributes.add(a)).bind(this);
}