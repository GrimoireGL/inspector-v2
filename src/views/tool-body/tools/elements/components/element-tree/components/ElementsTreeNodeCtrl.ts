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

  public open:boolean = false;

  public selected:boolean = false;

  public get rootClass():string[]{
    return ["component-root-elements-tree-node",this.selected ? "selected":"unselected"];
  }

  public get hasChildren():boolean{
    return this.node.children.length !== 0;
  }

  public get indentStyle():{[key:string]:any}{
    return {
      "width":`${this.indentLevel * 15}px`
    };
  }

  public get caretStyle():{[key:string]:any}{
    return {
      visibility:this.hasChildren?"visible":"hidden"
    };
  }

  public get caretClass():string[]{
    return ["fa","fa-fw",this.open?"fa-caret-down":"fa-caret-right"];
  }

  public toggleOpenState():void{
    this.open = !this.open;
  }

  public selectNode():void{
    this.selected = true;
  }
}
