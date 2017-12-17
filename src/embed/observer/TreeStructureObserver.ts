import SingleNodeSocketFilter from "../socket/SingleNodeSocketFilter";
import IGrimoireNodeMessage from "../../common/messages/IGrimoireNodeMessage"
import GomlNode from "grimoirejs/ref/Core/GomlNode";
import GrimoireToViewModelConverter from "../../common/GrimoireToViewModelConverter";
import Constants from "grimoirejs/ref/Core/Constants";
export default class TreeStructureObserver {
    private _currentTargetRoot: GomlNode | null;

    private _mutationObserver: MutationObserver;

    constructor(public socket: SingleNodeSocketFilter) {
        socket.on("start-observe-node", this._onStartObserving.bind(this));
        socket.on("end-observe-node", this._onEndObserving.bind(this));
        this._mutationObserver = new MutationObserver(this._onMutation.bind(this));
    }

    private _onStartObserving(args: IGrimoireNodeMessage): void {
        this._currentTargetRoot = args.$targetRoot;
        this.socket.send("notify-node-structure", {
            root: GrimoireToViewModelConverter.convertNode(this._currentTargetRoot)
        });
        this._mutationObserver.observe(this._currentTargetRoot.element, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    }

    private _onEndObserving(): void {
        this._currentTargetRoot = null;
        this._mutationObserver.disconnect();
    }

    private _onMutation(mutations: MutationRecord[]): void {
        mutations.forEach(m => {
            if (m.target.nodeType === Node.ELEMENT_NODE) {
                m.addedNodes.forEach(n => {
                    if (n.nodeType === Node.ELEMENT_NODE) {
                        const element = n as HTMLElement;
                        const goml = GomlNode.fromElement(element);
                        this.socket.send("notify-node-added", {
                            parentId: goml.parent!.id,
                            node: GrimoireToViewModelConverter.convertNode(goml)
                        });
                    }
                });
                m.removedNodes.forEach(n => {
                    if (n.nodeType === Node.ELEMENT_NODE) {
                        const element = n as HTMLElement;
                        const parent = GomlNode.fromElement(m.target as HTMLElement);
                        this.socket.send("notify-node-removed", {
                            parentId: parent.id,
                            nodeId: element.getAttribute(Constants.x_gr_id)
                        });
                    }
                });
            }
        });
    }
}