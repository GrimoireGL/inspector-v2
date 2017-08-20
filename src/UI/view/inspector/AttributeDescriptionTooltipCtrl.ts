import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import InspectionAttributeData from "./InspectionAttributeData";
import ValueTypeRegistry from "../../../common/ValueTypeRegistry";
@Component({})
export default class InspectorDescriptionTooltip extends Vue{
  @Prop()
  public target:InspectionAttributeData;

  public get readerModel():any{
    return ValueTypeRegistry.get(this.target.converterType).readerModelFromConvertible!(this.target.defaultValue);
  }

  public get reader():typeof Vue{
    return ValueTypeRegistry.get(this.target.converterType).reader!;
  }
}
