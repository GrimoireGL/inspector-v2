<template>
  <div class="component-root-element">
    <p>{{selectorInfo.displayName}}</p>
    <p class="glayout"><i class="fa fa-file-code-o fa-fw"></i>{{selectorInfo.srcURL}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import RootSelectorInfo from "./RootSelectorInfo";

@Component({})
export default class RootSelectorElement extends Vue{
  @Prop()
  public selectorInfo: RootSelectorInfo;
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
