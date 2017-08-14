import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator"
import BodyTools from "./BodyToolRegistry";
@Component({})
export default class ToolBody extends Vue{
  @Prop()
  public currentTab: string;

  public get currentBody():typeof Vue {
    return BodyTools[this.currentTab];
  }
}
