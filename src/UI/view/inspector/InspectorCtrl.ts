import Vue from 'vue'
import Component from 'vue-class-component'
import InspectorHeader from "./InspectorHeader.vue";
import InspectorComponent from "./InspectorComponent.vue";
import InspectionData from "./InspectionData";
import InspectorStore from "./InspectorStore";
import StringSerializable from "../../../common/serializables/StringSerializable";
import BooleanSerializable from "../../../common/serializables/BooleanSerializable";
import UIConnectorProvider from "../../controller/UIConnectorProvider";
@Component({components:{InspectorHeader,InspectorComponent},store:InspectorStore})
export default class Inspector extends Vue{
  public target:InspectionData = {nodeFQN:"empty",components:[]};

  public mounted():void{
    this.target = UIConnectorProvider.nodeObserver.currentNode;
  }
}
