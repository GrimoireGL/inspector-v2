import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import InspectionAttributeData from "./InspectionAttributeData";
import ValueTypeRegistry from "../../../../../../../../common/ValueTypeRegistry";
@Component({})
export default class InspectorAttribute extends Vue{
  @Prop()
  public target:InspectionAttributeData;

  public open:boolean = false;

  public get attributeName():string{
    const names = this.target.attributeFQN.split(".");
    return names[names.length - 1];
  }

  public get converterTypeName():string{
    const names = this.target.converterType.split(".");
    return names[names.length - 1];
  }

  public get readerComponent():typeof Vue{
    return ValueTypeRegistry.get(this.target.converterType).reader!;
  }

  public get readerModel():any{
    return ValueTypeRegistry.get(this.target.converterType).readerModelFromConvertible!(this.target.obtainedAttributeValue);
  }

  public get defaultValueReaderModel():any{
    return ValueTypeRegistry.get(this.target.converterType).readerModelFromConvertible!(this.target.defaultValue);
  }

  public get editorComponent():typeof Vue{
    return ValueTypeRegistry.get(this.target.converterType).editor!;
  }

  public get editorModel():any{
    return ValueTypeRegistry.get(this.target.converterType).editorModelFromConvertible!(this.target.obtainedAttributeValue);
  }

  public get visibleByFilter():boolean{
    const noQuery = !this.$store.getters.hasQuery;
    const filtered = this.target.attributeFQN.indexOf(this.$store.state.query) > -1;
    return noQuery || filtered;
  }

  public toggle():void{
    this.open = !this.open;
  }
}
