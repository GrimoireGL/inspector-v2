import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import InspectionAttributeData from "./InspectionAttributeData";
import AttributeDescriptionTooltip from "./AttributeDescriptionTooltip.vue";
import ValueTypeRegistry from "../../../common/ValueTypeRegistry";
import ValueTypeHandler from "../../../common/ValueTypeHandler";
import UIConnectorProvider from "../../model/UIConnectorProvider";
@Component({components:{AttributeDescriptionTooltip}})
export default class InspectorAttribute extends Vue{
  @Prop()
  public target:InspectionAttributeData;

  @Prop()
  public componentId:string;

  public open:boolean = false;

  public popupOpen:boolean = false;

  public hasErrorOnMutation:boolean = false;

  public get noError():boolean{
    return this.target.errorText === void 0;
  }

  public get attributeName():string{
    const names = this.target.attributeFQN.split(".");
    return names[names.length - 1];
  }

  public get handler():ValueTypeHandler<any,any,any,any,any>{
    return ValueTypeRegistry.get(this.target.converterType);
  }

  public get editorComponent():typeof Vue{
    return this.handler.editor!;
  }

  public get editorModel():any{
    return this.handler.editorModelFromConvertible!(this.target.obtainedAttributeValue);
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
  
  public onEditorInput(input:any):void{
    if(this.handler.isValidInputOnEditor!(input)){
      const convertible = this.handler.editorModelTOJSONConvertible!(input,this.editorModel);
      UIConnectorProvider.nodeObserver.sendAttributeModification(this.componentId,this.target.attributeFQN,convertible);
      this.hasErrorOnMutation = false;
    }else{
      this.hasErrorOnMutation = true;
    }
  }
}
