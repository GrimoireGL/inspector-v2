<template>
  <div class="component-root-element-tree">
    <SearchBox/>
    <div class="node-container">
      <ElementsTreeNodeElement :node="root" :indentLevel="0"/>
    </div>
  </div>
</template>

<script src="./ElementTreeCtrl">

</script>

<style lang="stylus">
.component-root-element-tree
  display flex
  flex-direction column
  height 100%
  width 100%
  overflow scroll
  .node-container
    padding 5px
</style>
