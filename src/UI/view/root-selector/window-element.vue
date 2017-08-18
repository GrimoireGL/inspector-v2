<template>
  <div class="component-root-window-element" @mouseover="mouseover" @mouseout="mouseout" @click="mouseout">
    <p class="window-title"><i v-if="isSelected" class="fa fa-fw fa-check"/><i class="fa fa-window-maximize fa-fw"></i>{{windowInfo.windowLocation}}</p>
    <div v-for="(root,index) in windowInfo.roots" :key="index" class="root-selector-container">
      <RootSelector :selectorInfo="root" @root-selector-mouseover="rootSelectorMouseover" @root-selector-mouseout="rootSelectorMouseout" @root-selector-click="rootSelectorClick"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import FrameWindowSchema from "./FrameWindowSchema"
import RootSelector from "./root-element.vue";
import {Prop} from "vue-property-decorator";
@Component({components:{RootSelector}})
export default class WindowElement extends Vue{
  @Prop()
  windowInfo:FrameWindowSchema

  public get isSelected():boolean{
    return this.$store.state.windowId === this.windowInfo.id;
  }

  public mouseover():void{
    this.$emit("window-selector-hover",this.windowInfo.id);
  }

  public mouseout():void{
    this.$emit("window-selector-out",this.windowInfo.id);
  }

  public rootSelectorMouseover(args:any):void{
    this.$emit("root-selector-mouseover",Object.assign(args,{windowId:this.windowInfo.id}));
  }

  public rootSelectorMouseout(args:any):void{
    this.$emit("root-selector-mouseout",Object.assign(args,{windowId:this.windowInfo.id}));
  }

  public rootSelectorClick(args:any):void{
    this.$emit("root-selector-click",Object.assign(args,{windowId:this.windowInfo.id}));
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-window-element
  margin 0px 0px -1px 0px
  color $col("default","color")
  background-color $col("default")
  border 2px solid $col("default","darker")
  .window-title
    margin 0
    padding 1px 10px
    i
      display inline-block
      margin 0px 4px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
  .root-selector-container
    padding-left 10px
    margin-bottom -2px
    margin-right -2px
  &:hover
    color $col("primary","color")
    background-color $col("primary","darker")
</style>
