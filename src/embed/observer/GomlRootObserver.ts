import ISocket from "../../common/socket/ISocket";
import GrimoireInterfaceImpl from "grimoirejs/ref/Interface/GrimoireInterfaceImpl";
import ElementHighlighter from "../ElementHighlighter";
export default class GomlRootObserver {
    constructor(public socket: ISocket, public gr: GrimoireInterfaceImpl) {
        socket.on("fetch-root-node", (args: Object) => {
            this.notifyGomlNodes();
        });
        this._registerCanvasHiglighter();
        this._registerBodyHighlighter();
    }

    public notifyGomlNodes(): void {
        const rootNodes = [];
        for (let key in this.gr.rootNodes) {
            const node = this.gr.rootNodes[key];
            const scriptElement = this._getScriptTagFromId(node.id);
            if (scriptElement) {
                rootNodes.push({
                    id: key,
                    src: scriptElement.src,
                    class: scriptElement.className,
                    tagId: scriptElement.id
                });
            }
        }
        this.socket.send("notify-rootnodes", {
            nodes: rootNodes
        });
    }

    private _registerCanvasHiglighter(): void {
        const eh = new ElementHighlighter(0.7);
        this.socket.on("highlight-canvas", (args: any) => {
            const scriptTag = this._getScriptTagFromId(args.rootNodeId);
            if (!scriptTag) {
                return;
            }
            const node = this.gr.getRootNode(scriptTag);
            if (node) {
                const container = node!.companion.get("canvasContainer") as HTMLDivElement;
                eh.highlight(container);
            }
        });
        this.socket.on("remove-highlight-canvas", (args: any) => {
            eh.disable();
        });
    }

    private _registerBodyHighlighter(): void {
        const eh = new ElementHighlighter(0.2);
        this.socket.on("highlight-frame", () => {
            eh.highlight("body");
        });
        this.socket.on("remove-highlight-frame", () => {
            eh.disable();
        });
    }

    private _getScriptTagFromId(id: string): HTMLScriptElement | null {
        const elems = document.querySelectorAll(`script[type="text/goml"][x-rootNodeId="${id}"]`);
        if (elems.length === 1) {
            return elems.item(0) as HTMLScriptElement;
        } else {
            return null;
        }
    }
}