import Vue from 'vue'
import Component from 'vue-class-component'
import TabElementData from "./TabElementData";
import {Prop} from "vue-property-decorator";
@Component({})
export default class TabElement extends Vue{
  @Prop()
  public tabInfo: TabElementData;

  public get selected():boolean{
    return this.$store.state.currentTab === this.tabInfo.header.toLowerCase();
  }

  public get iconClass():string{
    return this.tabInfo.iconClass;
  }

  public get containerClass():string{
    return "component-root-tab-element" + (this.selected ? " selected":"");
  }

  public selectCurrentTab():void{
    this.$store.commit("setCurrentTab",this.tabInfo.header.toLowerCase());
  }
}
