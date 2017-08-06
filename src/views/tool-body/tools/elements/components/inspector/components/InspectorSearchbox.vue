<template>
  <div class="component-root-inspector-searchbox">
    <p><i class="fa fa-search fa-fw"/></p>
    <input type="text" placeholder="Filter attributes"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class InspectorSearchbox extends Vue{
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-searchbox
  display flex
  height 25px
  p
    margin 0px
  i
    color $col("default","darker")
    display inline-block
    margin 0px 5px
  input
    flex 1
    textApparanceClear()
</style>
