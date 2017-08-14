import FrameWindowSchema from "../view/root-selector/FrameWIndowSchema";
interface IWindowFrameObserver{
    getModel():FrameWindowSchema[];
    onWindowHighlight(windowId:string):void;
    offWindowHighlight(windowId:string):void;
    onCanvasHighlight(windowId:string,rootId:string): void;
    offCanvasHighlight(windowId:string,rootId:string): void;
}

export default IWindowFrameObserver;