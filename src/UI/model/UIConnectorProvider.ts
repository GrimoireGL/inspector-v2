import IWindowModel from "./IWindowModel";
import GomlNodeModel from "./GomlNodeModel";
/**
 * Provides connector of windows and roots
 */
export default class UIConnectorProvider{
    public static get windowObserver():IWindowModel{
        return this._windowObserver;
    }

    public static set windowObserver(observer:IWindowModel){
        this._windowObserver = observer;
        this.nodeObserver = new GomlNodeModel(observer.getNodeSocket());
    }

    private static _windowObserver:IWindowModel;

    public static nodeObserver:GomlNodeModel;
}