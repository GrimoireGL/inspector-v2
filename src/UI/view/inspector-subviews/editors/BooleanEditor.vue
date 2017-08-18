<template>
  <div class="component-root-boolean-editor">
    <p><i class="fa fa-check-square-o fa-fw" v-if="value"/><i class="fa fa-square-o fa-fw" v-else/></p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator';
@Component({})
export default class BooleanEditor extends Vue{
  @Prop()
  public value:boolean;
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-boolean-editor
  height 24px
  color $col("primary")
  p
    margin 0px
  p:hover
    background-color $col("primary")
    color $col("primary","color")
    cursor pointer
</style>
