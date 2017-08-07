import Vue from 'vue'
import Component from 'vue-class-component'
import InspectorSearchbox from "./InspectorSearchbox.vue";
import InspectionData from "./InspectionData";
import {Prop} from "vue-property-decorator";
@Component({components:{InspectorSearchbox}})
export default class InspectorHeader extends Vue{
  @Prop()
  public target:InspectionData;

  public showSearchbox:boolean = false;

  public get searchBoxToggleClass():string[]{
    return ["fa fa-search fa-fw search-box-toggle",this.showSearchbox?"shown":"invisible"]
  }

  public get nodeName():string{
    const names = this.target.nodeFQN.split('.');
    return names[names.length - 1];
  }

  public toggleSearchbox(){
    this.showSearchbox = !this.showSearchbox;
    this.$store.commit("setQuery","");
  }
}
