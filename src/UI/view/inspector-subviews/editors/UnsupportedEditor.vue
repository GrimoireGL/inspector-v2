<template>
  <div class="component-root-unsupported-editor">
    <p><i class="fa fa-fw fa-exclamation-triangle"/>Unsupported type</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class UnsupportedEditor extends Vue{
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-unsupported-editor
  color orange
  p
    margin 0px
</style>
