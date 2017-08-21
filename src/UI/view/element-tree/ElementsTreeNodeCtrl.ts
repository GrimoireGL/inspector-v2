import Vue from 'vue'
import Component from 'vue-class-component'
import TreeElement from "./TreeElement";
import {Prop} from "vue-property-decorator";
@Component({})
export default class ElementsTreeNode extends Vue{

  @Prop()
  public node:TreeElement;

  @Prop()
  public indentLevel:number;

  @Prop()
  public structureId:string;

  public openByCaret:boolean = false;

  public mounted(){
    this.openByCaret = this.indentLevel < 4;
  }

  public get displayName():string{
    const names = this.node.nodeFQN.split(".");
    return names[names.length - 1];
  }

  public get rootClass():string[]{
    return ["component-root-elements-tree-node",this.selected ? "selected":"unselected"];
  }

  public get filterEnabled():boolean{
    return !this.$store.getters.hasQuery;
  }

  public get open():boolean{
    let flag = this.openByCaret;
    flag = this.$store.getters.hasQuery || flag;
    return flag;
  }

  public get selected():boolean{
    return this.structureId === this.$store.state.selectedNodeId
  }

  public get hasChildren():boolean{
    return this.node.children.length !== 0;
  }

  public get indentStyle():{[key:string]:any}{
    return {
      "width":`${this.indentLevel * 15}px`
    };
  }

  public get shown():boolean{
    if(!this.$store.getters.hasQuery){
      return true;
    }else{
      if(this.$store.state.queryMode === "nodename"){
        return this.node.nodeFQN.indexOf(this.$store.state.query) > -1;
      }else{
        return this.node.componentFQNs.filter(fqn=>fqn.indexOf(this.$store.state.query) > -1).length > 0;
      }
    }
  }

  public get caretStyle():{[key:string]:any}{
    return {
      visibility:this.hasChildren?"visible":"hidden"
    };
  }

  public get caretClass():string[]{
    return ["fa","fa-fw",this.openByCaret?"fa-caret-down":"fa-caret-right"];
  }

  public toggleOpenState():void{
    this.openByCaret = !this.openByCaret;
  }

  public selectNode():void{
    this.$store.commit("selectNode",{structureId:this.structureId,nodeId:this.node.id});
  }
}
