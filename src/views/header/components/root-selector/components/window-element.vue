<template>
  <div class="component-root-window-element">
    <p class="window-title"><i class="fa fa-window-maximize fa-fw"></i>{{windowInfo.windowName}}</p>
    <div v-for="root in windowInfo.roots" class="root-selector-container">
      <RootSelector :selectorInfo="root"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import WindowSelectorInfo from "./WindowSelectorInfo"
import RootSelector from "./root-element.vue";
import {Prop} from "vue-property-decorator";
@Component({components:{RootSelector}})
export default class WindowElement extends Vue{
  @Prop()
  windowInfo:WindowSelectorInfo
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
  .root-selector-container
    padding-left 10px
    margin-bottom -2px
    margin-right -2px
  &:hover
    color $col("primary","color")
    background-color $col("primary","darker")
</style>
