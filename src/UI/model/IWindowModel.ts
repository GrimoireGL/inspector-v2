import FrameWindowSchema from "../view/root-selector/FrameWIndowSchema";
import SingleNodeSocketAdapter from "./SingleNodeSocketAdapter";
import IPluginContentData from "../view/declarations/IPluginContentData";
interface IWindowModel{
    getModel():FrameWindowSchema[];
    getDeclarationModel():IPluginContentData[];
    getNodeSocket():SingleNodeSocketAdapter;
    setTarget(windowId:string|null,rootId:string|null):void;
    getCurrentWindowId():string|null;
    getCurrentRootId():string|null;
    onWindowHighlight(windowId:string):void;
    offWindowHighlight(windowId:string):void;
    onCanvasHighlight(windowId:string,rootId:string): void;
    offCanvasHighlight(windowId:string,rootId:string): void;
}

export default IWindowModel;