<template>
  <div class="component-root-elements-tool">
    <VerticalSeparator leftMinSize="300" rightMinSize="450">
      <ElementTree slot="left"/>
      <Inspector slot="right"/>
    </VerticalSeparator>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import VerticalSeparator from "../common/vertical-separator.vue";
import ElementTree from "../element-tree/element-tree.vue";
import Inspector from "../inspector/Inspector.vue";
@Component({components:{VerticalSeparator,ElementTree,Inspector}})
export default class ElementsToolBody extends Vue{
}
</script>

<style lang="stylus">
.component-root-elements-tool
  height 100%
</style>
