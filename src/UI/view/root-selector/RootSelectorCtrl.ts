import Vue from 'vue'
import Component from 'vue-class-component'
import WindowElement from './window-element.vue';
import FrameWindowSchema from "./FrameWindowSchema";
import {WindowEvent} from "../../../common/WindowEvent";
import RootSelectorConnectorProvider from "../../controller/RootSelectorConnectorProvider";
@Component({
  components:{WindowElement}
})
export default class RootSelector extends Vue{
  public windows:FrameWindowSchema[] = [];
  public expand:boolean = false
  public mounted():void{
    this.windows = RootSelectorConnectorProvider.windowObserver.getModel();
  }
  @WindowEvent("expand")
  public clicked():void{
    this.expand = !this.expand;
  }

  public windowSelectorHover(id:string):void{
    RootSelectorConnectorProvider.windowObserver.onWindowHighlight(id);
  }

  public windowSelectorOut(id:string):void{
    RootSelectorConnectorProvider.windowObserver.offWindowHighlight(id);
  }

  public rootSelectorMouseover(args:any):void{
    RootSelectorConnectorProvider.windowObserver.onCanvasHighlight(args.windowId,args.rootId);
  }

  public rootSelectorMouseout(args:any):void{
    RootSelectorConnectorProvider.windowObserver.offCanvasHighlight(args.windowId,args.rootId);
  }
}
