<template>
  <div class="component-root-element" @mouseover="mouseover" @mouseout="mouseout">
    <p>{{displayName}}</p>
    <p class="glayout"><i class="fa fa-file-code-o fa-fw"></i>{{selectorInfo.src}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import RootNodeSchema from "./RootNodeSchema";

@Component({})
export default class RootSelectorElement extends Vue{
  @Prop()
  public selectorInfo: RootNodeSchema;

  public get displayName():string{
    const classes = this.selectorInfo.class.split(' ');
    if(this.selectorInfo.tagId || this.selectorInfo.class){
      let classStr = "";
      for(let i = 0; i <classes.length; i++){
        classStr += `.${classes[i]} `;
      }
      return `#${this.selectorInfo.tagId}.${classStr}`;
    }else{
      return `(script tag)`;
    }
  }

  public mouseover():void{
    this.$emit("root-selector-mouseover",{rootId:this.selectorInfo.id});
  }
  
  public mouseout():void{
    this.$emit("root-selector-mouseout",{rootId:this.selectorInfo.id});
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-element
  color $col("default","color")
  border 2px solid $col("default","darker")
  background-color $col("default")
  &:hover
    color $col("primary","color")
    background-color $col("primary")
    cursor pointer
  p
    margin 0px
    padding 1px 10px
    &.glayout
      color $col("default","darker")
</style>
