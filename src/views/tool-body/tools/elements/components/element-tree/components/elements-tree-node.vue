<template>
  <div :class="rootClass">
    <p @click="selectNode" v-if="shown"><span v-if="filterEnabled" class="indent" :style="indentStyle"/><i @click.stop="toggleOpenState" v-if="filterEnabled" :style="caretStyle" :class="caretClass"></i><span class="bracket">&lt; </span><span class="node-name">{{node.nodeName}}</span><span class="bracket"> &gt;</span></p>
    <ElementsTreeNode v-if="open"  v-for="(child,index) in node.children" :structureId="structureId + '-' + index"  :node="child" :indentLevel="indentLevel + 1" :key="index"/>
  </div>
</template>

<script src="./ElementsTreeNodeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-elements-tree-node
  &.unselected
    >p
      color $col("default","color")
      &:hover
        background-color $col("info","base")
      .node-name
        color $col("primary","base")
  &.selected
    >p
      color $col("primary","color")
      background-color $col("primary")
      .node-name
        color $col("primary","color")
  p
    margin 0px
    border-radius 3px
    i
      font-size 20px
    &:hover
      cursor pointer
  .bracket
    color $col("default","darker")
  .node-name
    font-size 20px
  .indent
    display inline-block
</style>
