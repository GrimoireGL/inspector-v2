import Vue from 'vue'
import Component from 'vue-class-component'
import ElementTreeStore from "../ElementTreeStore";

@Component({})
export default class NodeSearchBox extends Vue{
  public get query():string {
    return this.$store.state.query;
  }

  public queryChanged():void{
    const input = this.$refs.input as HTMLInputElement;
    this.$store.commit("changeQuery",input.value);
  }

  public setQueryModeComponentName():void{
    this.$store.commit("setQueryMode","componentname");
  }

  public setQueryModeNodeName():void{
    this.$store.commit("setQueryMode","nodename");
  }

  public get nodeNameModeClass():string[]{
    return ["search-mode",this.$store.state.queryMode === "nodename" ? "selected":"unselected"];
  }

  public get componentNameModeClass():string[]{
    return ["search-mode",this.$store.state.queryMode === "componentname" ? "selected":"unselected"];
  }
}
