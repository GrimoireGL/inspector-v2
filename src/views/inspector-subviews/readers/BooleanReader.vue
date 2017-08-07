<template>
  <span class="component-root-boolean-reader"><i class="fa fa-check-square-o fa-fw" v-if="value.value"/><i class="fa fa-square-o fa-fw" v-else/></span>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
@Component({})
export default class BooleanReader extends Vue{
  @Prop()
  public value:{value:boolean};
}
</script>

<style lang="stylus">
.component-root-boolean-reader
</style>
