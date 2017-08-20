import IWindowModel from "./IWindowModel";
import ISocket from "../../common/socket/ISocket";
import FrameWindowSchema from "../view/root-selector/FrameWindowSchema";
import SingleNodeSocketAdapter from "./SingleNodeSocketAdapter";
import IPluginContentData from "../view/declarations/IPluginContentData";
export default abstract class BasicWindowModel implements IWindowModel {
    protected readonly __windows: FrameWindowSchema[] = [];

    protected readonly __declarationModel:IPluginContentData[] = [];

    private readonly _singleNodeSocket: SingleNodeSocketAdapter;

    private _currentWindowId: string | null;

    private _currentRootId: string | null;

    constructor(public socket: ISocket) {
        this._singleNodeSocket = new SingleNodeSocketAdapter(this.socket);
        socket.on("bs-tab-reload", this.__tabReload.bind(this));
        socket.on("cs-notify-window", this.__onWindowLoad.bind(this));
        socket.on("cs-window-unload", this.__onWindowUnload.bind(this));
        socket.on("notify-rootnodes", this.__onNotifyRootNodes.bind(this));
        socket.on("notify-declarations",this.__onNotifyDeclarations.bind(this));
    }

    public getNodeSocket(): SingleNodeSocketAdapter {
        return this._singleNodeSocket;
    }

    public getDeclarationModel():IPluginContentData[]{
        return this.__declarationModel;
    }
    
    public setTarget(windowId: string, rootId: string): void {
        if (windowId !== this._currentWindowId) {
            // should notify something changing
            this.socket.send("fetch-declarations",{$frameId:windowId});
        }
        if (rootId !== this._currentRootId) {
            // should notify something
            this.getNodeSocket().send("end-observe-node",{});
        }
        this._currentRootId = rootId;
        this._currentWindowId = windowId;
        this._singleNodeSocket.frameId = windowId;
        this._singleNodeSocket.rootNodeId = rootId;
        if(rootId !== null){
            this.getNodeSocket().send("start-observe-node",{});
        }
    }

    public getCurrentWindowId(): string | null {
        return this._currentWindowId;
    }

    public getCurrentRootId(): string | null {
        return this._currentRootId;
    }

    public getModel(): FrameWindowSchema[] {
        return this.__windows;
    }

    public onWindowHighlight(windowId: string): void {
        this.socket.send("highlight-frame", { $frameId: windowId });
    }

    public offWindowHighlight(windowId: string): void {
        this.socket.send("remove-highlight-frame", { $frameId: windowId });
    }

    public onCanvasHighlight(windowId: string, rootId: string): void {
        this.socket.send("highlight-canvas", { $frameId: windowId, rootNodeId: rootId });
    }

    public offCanvasHighlight(windowId: string, rootId: string): void {
        this.socket.send("remove-highlight-canvas", { $frameId: windowId, rootNodeId: rootId });
    }

    protected abstract __tabReload(): void;
    protected abstract __onWindowLoad(args: any): void;
    protected abstract __onWindowUnload(args: any): void;
    protected abstract __onNotifyRootNodes(args: any): void;
    protected abstract __onNotifyDeclarations(args:any):void;
}