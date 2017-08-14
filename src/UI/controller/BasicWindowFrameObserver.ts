import IWindowFrameObserver from "./IWindowFrameObserver";
import ISocket from "../../common/sockets/ISocket";
import FrameWindowSchema from "../view/root-selector/FrameWindowSchema";

export default abstract class BasicWindowFrameObserver implements IWindowFrameObserver {
    protected readonly __windows: FrameWindowSchema[] = [];

    constructor(public socket: ISocket) {
        socket.on("meta-tab-reload", this.__tabReload.bind(this));
        socket.on("notify-window", this.__onWindowLoad.bind(this));
        socket.on("window-unload", this.__onWindowUnload.bind(this));
        socket.on("notify-rootnodes", this.__onNotifyRootNodes.bind(this));
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

    public onCanvasHighlight(windowId:string,rootId:string): void{
        this.socket.send("highlight-canvas", { $frameId: windowId,rootNodeId:rootId });
    }

    public offCanvasHighlight(windowId:string,rootId:string): void{
        this.socket.send("remove-highlight-canvas", { $frameId: windowId,rootNodeId:rootId });
    }

    protected abstract __tabReload(): void;
    protected abstract __onWindowLoad(args:any):void;
    protected abstract __onWindowUnload(args:any):void;
    protected abstract __onNotifyRootNodes(args:any):void;
}