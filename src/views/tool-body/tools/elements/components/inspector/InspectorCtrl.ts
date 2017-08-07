import Vue from 'vue'
import Component from 'vue-class-component'
import InspectorHeader from "./components/InspectorHeader.vue";
import InspectorComponent from "./components/InspectorComponent.vue";
import InspectionData from "./components/InspectionData";
import InspectorStore from "./InspectorStore";
@Component({components:{InspectorHeader,InspectorComponent},store:InspectorStore})
export default class Inspector extends Vue{
  public target:InspectionData = {
    nodeFQN:"fundamental.goml",
    components:[
      {
        componentFQN:"core.GrimoireComponent",
        attributes:[
          {
            attributeFQN:"core.GrimoireComponent.id",
            stringifiedValue:"test"
          },
          {
            attributeFQN:"core.GrimoireComponent.class",
            stringifiedValue:"test2"
          },
          {
            attributeFQN:"core.GrimoireComponent.enabled",
            stringifiedValue:"True"
          }
        ]
      }
    ]
  };
}
