import ISocket from "../common/socket/ISocket";
import IWindowModel from "../UI/model/IWindowModel";
import FrameWindowSchema from "../UI/view/root-selector/FrameWindowSchema";
import BasicWindowModel from "../UI/model/BasicWindowModel";
export default class DevtoolWindowFrameObserver extends BasicWindowModel {

    constructor(socket: ISocket) {
        super(socket);
        this.__tabReload();
    }

    protected __onNotifyRootNodes(args: any): void {
        for (let node of args.nodes) {
            this.__windows[this._getIndexById(args.$frameId)].roots.push(node)
        }
    }

    protected __onWindowLoad(args: any): void {
        const windowId = args.windowId;
        this.__windows.push({
            id: windowId,
            windowLocation: args.windowLocation,
            roots: []
        });
        this.socket.send("fetch-root-node", {
            $frameId:windowId
        });
    }

    protected __onWindowUnload(args: any): void {
        const windowId = args.windowId;
        this.__windows.splice(this._getIndexById(windowId), 1);
    }

    protected __tabReload(): void {
        this._removeAllWindow();
        this.socket.send("cs-fetch-windows", {});
    }

    private _getIndexById(id: string): number {
        for (let i = 0; i < this.__windows.length; i++) {
            if (this.__windows[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    private _removeAllWindow(): void {
        this.__windows.splice(0, this.__windows.length);
    }
}