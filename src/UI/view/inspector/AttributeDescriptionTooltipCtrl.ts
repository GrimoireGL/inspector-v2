import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import InspectionAttributeData from "./InspectionAttributeData";
import ValueTypeRegistry from "../../../common/ValueTypeRegistry";
@Component({})
export default class InspectorAttribute extends Vue{
  @Prop()
  public target:InspectionAttributeData;
}
