<template>
  <div class="component-root-unsupported-editor">
    <p>There are no compatible editor for this converter.</p>
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
  font-size font-size-small
  color $col("default","color")
</style>
