import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator"
import Elements from "../elements/elements.vue";
import Declarations from "../declarations/declaration.vue";
@Component({})
export default class ToolBody extends Vue{
  @Prop()
  public currentTab: string;

  public get currentBody():typeof Vue|null {
    switch(this.currentTab){
      case "elements":
        return Elements;
      case "declarations":
        return Declarations;
      default:
        return null;
    }
  }
}
