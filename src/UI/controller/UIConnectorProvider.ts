import IWindowFrameObserver from "./IWindowFrameObserver";
import GOMLNodeObserver from "./GOMLNodeObserver";
/**
 * Provides connector of windows and roots
 */
export default class UIConnectorProvider{
    public static get windowObserver():IWindowFrameObserver{
        return this._windowObserver;
    }

    public static set windowObserver(observer:IWindowFrameObserver){
        this._windowObserver = observer;
        this.nodeObserver = new GOMLNodeObserver(observer.getNodeSocket());
    }

    private static _windowObserver:IWindowFrameObserver;

    public static nodeObserver:GOMLNodeObserver;
}