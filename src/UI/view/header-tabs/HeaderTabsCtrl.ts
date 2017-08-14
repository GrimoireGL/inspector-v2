import Vue from 'vue'
import Component from 'vue-class-component'
import TabElementData from "./components/TabElementData";
import TabElement from "./components/tab-element.vue";
@Component({components:{TabElement}})
export default class HeaderTabs extends Vue{
  public tabs: TabElementData[] = [
    {
      header:"Elements",
      iconClass:"fa fa-code"
    },
    {
      header:"Declarations",
      iconClass:"fa fa-cubes"
    },
    {
      header:"Animations",
      iconClass:"fa fa-magic"
    }
  ];
}
