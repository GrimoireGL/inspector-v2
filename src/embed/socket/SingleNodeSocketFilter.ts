import ISocket from "../../common/socket/ISocket";
import GrimoireInterfaceImpl from "grimoirejs/ref/Core/GrimoireInterfaceImpl";
export default class SingleNodeSocketFilter implements ISocket {

    constructor(public socket: ISocket, public gr: GrimoireInterfaceImpl) {

    }

    public send(messageType: string, args: any): void {
        this.socket.send(messageType, args);
    }

    public on(messageType: string, func: (args: Object) => void): void {
        this.socket.on(messageType, (args: any) => {
            let targetRoot;
            if (args.$rootNodeId) {
                const targetScript = this._getScriptTagFromId(args.$rootNodeId);
                if (targetScript === null) {
                    return;
                }
                targetRoot = this.gr.getRootNode(targetScript);
            }
            func(Object.assign({ $targetRoot: targetRoot }, args));
        });
    }

    public off(messageType: string): void {
        this.socket.off(messageType);
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