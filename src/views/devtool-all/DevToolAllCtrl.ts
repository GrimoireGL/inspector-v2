import Vue from 'vue'
import Component from 'vue-class-component'
import ToolHeader from "../header/header.vue";
import ToolBody from "../tool-body/tool-body.vue";
@Component({
  components:{
    ToolHeader,
    ToolBody
  }
})
export default class DevtoolAll extends Vue{
  public currentTab:string = "elements";

  public selectedTabChanged(tabName:string):void{
    this.currentTab = tabName;
  }
}
