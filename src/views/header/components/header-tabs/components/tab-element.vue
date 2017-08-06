<template>
  <div :class="containerClass">
    <p><i :class="iconClass"></i>{{tabInfo.header}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import TabElementData from "./TabElementData";
import {Prop} from "vue-property-decorator";
@Component({})
export default class TabElement extends Vue{
  @Prop()
  public tabInfo: TabElementData;

  @Prop()
  public selected: boolean;

  public get iconClass():string{
    return this.tabInfo.iconClass;
  }

  public get containerClass():string{
    return "component-root-tab-element" + (this.selected ? " selected":"");
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-tab-element
  margin 0px 0px -4px 0px
  height calc(100% - 4px)
  color $col("default","color")
  background-color $col("default")
  border-bottom 4px solid $col("default","base")
  cursor default
  &:hover
    background-color $col("default","dark")
    border-bottom 4px solid $col("default","dark")
    cursor pointer
  &.selected
    color $col("primary","base")
    border-bottom 4px solid $col("primary","base")
  >p
    padding 2px 10px 0px 0px
    margin 0px
    height 100%
    user-select none
    >i
      margin 0px 10px
</style>
