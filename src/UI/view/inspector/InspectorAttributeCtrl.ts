import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import InspectionAttributeData from "./InspectionAttributeData";
import AttributeDescriptionTooltip from "./AttributeDescriptionTooltip.vue";
import ValueTypeRegistry from "../../../common/ValueTypeRegistry";
@Component({components:{AttributeDescriptionTooltip}})
export default class InspectorAttribute extends Vue{
  @Prop()
  public target:InspectionAttributeData;

  public open:boolean = false;

  public popupOpen:boolean = false;

  public get noError():boolean{
    return this.target.errorText === void 0;
  }

  public get attributeName():string{
    const names = this.target.attributeFQN.split(".");
    return names[names.length - 1];
  }

  public get editorComponent():typeof Vue{
    return ValueTypeRegistry.get(this.target.converterType).editor!;
  }

  public get editorModel():any{
    return ValueTypeRegistry.get(this.target.converterType).editorModelFromConvertible!(this.target.obtainedAttributeValue);
  }

  public get visibleByFilter():boolean{
    const noQuery = !this.$store.getters.hasQuery;
    const filtered = this.target.attributeFQN.toLowerCase().indexOf(this.$store.state.query.toLowerCase()) > -1;
    return noQuery || filtered;
  }

  public openPopup():void{
    this.popupOpen = true;
  }

  public closePopup():void{
    this.popupOpen = false;
  }
}
