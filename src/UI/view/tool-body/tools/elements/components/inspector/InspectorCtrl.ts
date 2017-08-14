import Vue from 'vue'
import Component from 'vue-class-component'
import InspectorHeader from "./components/InspectorHeader.vue";
import InspectorComponent from "./components/InspectorComponent.vue";
import InspectionData from "./components/InspectionData";
import InspectorStore from "./InspectorStore";
import StringSerializable from "../../../../../../../common/serializables/StringSerializable";
import BooleanSerializable from "../../../../../../../common/serializables/BooleanSerializable";

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
            obtainedAttributeValue:new StringSerializable("test"),
            defaultValue:new StringSerializable("default"),
            converterType:"core.String"
          },
          {
            attributeFQN:"core.GrimoireComponent.class",
            obtainedAttributeValue:new StringSerializable("test2"),
            defaultValue:new StringSerializable("default"),
            converterType:"core.String"
          },
          {
            attributeFQN:"core.GrimoireComponent.enabled",
            obtainedAttributeValue:new BooleanSerializable(true),
            defaultValue:new BooleanSerializable(false),
            converterType:"core.Boolean"
          }
        ]
      }
    ]
  };
}
