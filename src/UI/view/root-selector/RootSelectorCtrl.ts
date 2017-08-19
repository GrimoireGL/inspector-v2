import Vue from 'vue'
import Component from 'vue-class-component'
import WindowElement from './window-element.vue';
import FrameWindowSchema from "./FrameWindowSchema";
import { WindowEvent } from "../../../common/WindowEvent";
import UIConnectorProvider from "../../model/UIConnectorProvider";
import RootNodeSchema from "./RootNodeSchema";
import ClassIdNotationConverter from "../../../common/ClassIdNotationConverter";
import RootSelectorStore from "./RootSelectorStore";
@Component({
  components: { WindowElement },
  store: RootSelectorStore
})
export default class RootSelector extends Vue {
  public windows: FrameWindowSchema[] = [];
  public expand: boolean = false
  public mounted(): void {
    this.windows = UIConnectorProvider.windowObserver.getModel();
    this.$watch(() => this.visibleWindows, () => {
      // Select first window if there were no element selected
      if (this.visibleWindows.length > 0) {
        this.$store.commit("select", {
          windowId: this.visibleWindows[0].id,
          rootId: this.visibleWindows[0].roots[0].id
        })
      } else {
        this.$store.commit("select", {
          windowId: null,
          rootId: null
        })
      }
      UIConnectorProvider.windowObserver.setTarget(this.$store.state.windowId, this.$store.state.rootId);
    });
  }

  public get visibleWindows(): FrameWindowSchema[] {
    return this.windows.filter(w => w.roots.length > 0);
  }

  public get selectedLabel(): string {
    if (this.currentRoot === null) {
      return "(No context found)";
    } else {
      return ClassIdNotationConverter.convert(this.currentRoot.tagId, this.currentRoot.class);
    }
  }

  public get currentWindow(): FrameWindowSchema | null {
    if (this.$store.state.windowId === null) {
      return null;
    } else {
      for (let i = 0; i < this.windows.length; i++) {
        if (this.windows[i].id === this.$store.state.windowId) {
          return this.windows[i];
        }
      }
      return null;
    }
  }

  public get currentRoot(): RootNodeSchema | null {
    if (this.currentWindow === null || this.$store.state.rootId === null) {
      return null;
    } else {
      for (let i = 0; i < this.currentWindow.roots.length; i++) {
        if (this.currentWindow.roots[i].id === this.$store.state.rootId) {
          return this.currentWindow.roots[i];
        }
      }
      return null;
    }
  }

  @WindowEvent("expand")
  public clicked(): void {
    this.expand = !this.expand;
  }

  public windowSelectorHover(id: string): void {
    UIConnectorProvider.windowObserver.onWindowHighlight(id);
  }

  public windowSelectorOut(id: string): void {
    UIConnectorProvider.windowObserver.offWindowHighlight(id);
  }

  public rootSelectorMouseover(args: any): void {
    UIConnectorProvider.windowObserver.onCanvasHighlight(args.windowId, args.rootId);
  }

  public rootSelectorMouseout(args: any): void {
    UIConnectorProvider.windowObserver.offCanvasHighlight(args.windowId, args.rootId);
  }

  public rootSelectorClick(args: any): void {
    this.$store.commit("select",{windowId:args.windowId,rootId:args.rootId});
    UIConnectorProvider.windowObserver.setTarget(args.windowId, args.rootId);
    UIConnectorProvider.windowObserver.offWindowHighlight(args.windowId);
    UIConnectorProvider.windowObserver.offCanvasHighlight(args.windowId, args.rootId);
  }
}
