<template>
  <span class="component-root-inspector-reader-string">
    {{value}}
  </span>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
@Component({})
export default class StringReader extends Vue{
  @Prop()
  public value:string;
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
</style>
