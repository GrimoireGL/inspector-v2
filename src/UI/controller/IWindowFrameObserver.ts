import FrameWindowSchema from "../view/root-selector/FrameWIndowSchema";
import SingleNodeSocketAdapter from "./SingleNodeSocketAdapter";
interface IWindowFrameObserver{
    getModel():FrameWindowSchema[];
    getNodeSocket():SingleNodeSocketAdapter;
    setTarget(windowId:string|null,rootId:string|null):void;
    getCurrentWindowId():string|null;
    getCurrentRootId():string|null;
    onWindowHighlight(windowId:string):void;
    offWindowHighlight(windowId:string):void;
    onCanvasHighlight(windowId:string,rootId:string): void;
    offCanvasHighlight(windowId:string,rootId:string): void;
}

export default IWindowFrameObserver;