<template>
  <div class="component-root-header">
    <div class="root-selector">
      <p><img src="../../../resources/small-logo.png"/><p class="title">Grimoire.js</p></p>
      <RootSelector/>
    </div>
    <div class="middle">
      <component :is="currentTopTool"/>
    </div>
    <div class="header-tabs">
      <HeaderTabs/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import RootSelector from "../root-selector/root-selector.vue";
import HeaderTabs from "../header-tabs/header-tabs.vue";
import HeaderStore from "./HeaderStore";
import AnimationTopTool from "../animations/animation-top-tool.vue";
import {Prop} from "vue-property-decorator";
@Component({components:{RootSelector,HeaderTabs},store:HeaderStore})
export default class HeaderBelt extends Vue{
  @Prop({})
  public currentTab:string;
  
  public mounted(){
    this.$store.watch((state)=>state.currentTab,(tab)=>{
      this.$emit("selectedTabChanged",tab);
    });
  }

  public get currentTopTool(): typeof Vue|null{
    switch(this.currentTab){
      case "animations":
        return AnimationTopTool;
      default:
        return null;
    }
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-header
  display flex
  background-color $col("default")
  border-bottom solid 1px $col("default","darker")
  .root-selector
    display flex
    user-select none
    p
      margin 0px
      cursor default
    p.title
      margin 0px 40px 0px 30px
      line-height tool-bar-height
      vertical-align middle
      color $col("primary")
      font-size font-size-larger
    img
      height tool-bar-height
      margin 0px 0px 0px 10px
  .middle
    flex 1
    text-align center
</style>
