import Vue from 'vue'
import Component from 'vue-class-component'
import TreeElement from "../TreeElement";
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
    return !this.$store.getters.hasQuery || this.node.nodeFQN.indexOf(this.$store.state.query) > -1
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
    this.$store.commit("selectNode",this.structureId);
  }
}
