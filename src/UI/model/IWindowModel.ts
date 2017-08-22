import FrameWindowSchema from "../view/root-selector/FrameWindowSchema";
import SingleNodeSocketAdapter from "./SingleNodeSocketAdapter";
import IGrimoireSymbol from "../view/declarations/IGrimoireSymbol";
interface IWindowModel{
    getModel():FrameWindowSchema[];
    getDeclarationModel():IGrimoireSymbol[];
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