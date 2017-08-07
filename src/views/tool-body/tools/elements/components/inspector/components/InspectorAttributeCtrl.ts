import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import InspectionAttributeData from "./InspectionAttributeData";
@Component({})
export default class InspectorAttribute extends Vue{
  @Prop()
  public target:InspectionAttributeData;

  public get attributeName():string{
    const names = this.target.attributeFQN.split(".");
    return names[names.length - 1];
  }

  public get visibleByFilter():boolean{
    const noQuery = !this.$store.getters.hasQuery;
    const filtered = this.target.attributeFQN.indexOf(this.$store.state.query) > -1;
    return noQuery || filtered;
  }
}
