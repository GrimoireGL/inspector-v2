import Vue from 'vue'
import Component from 'vue-class-component'
import InspectorHeader from "./InspectorHeader.vue";
import InspectorComponent from "./InspectorComponent.vue";
import InspectionData from "./InspectionData";
import InspectorStore from "./InspectorStore";
import UIConnectorProvider from "../../model/UIConnectorProvider";
@Component({components:{InspectorHeader,InspectorComponent},store:InspectorStore})
export default class Inspector extends Vue{
  public target:InspectionData = {nodeFQN:"empty",components:[]};

  public mounted():void{
    this.target = UIConnectorProvider.nodeObserver.currentNode;
  }
}
