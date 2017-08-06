<template>
  <div class="component-root-inspector-header">
    <p class="node-name-header"><i class="fa fa-cubes fa-fw"/><span class="bracket">&lt;</span><span class="node-name">{{nodeName}}</span><span class="bracket">&gt;</span></p>
    <div class="node-tools">
      <p class="node-name-fqn">{{target.nodeFQN}}</p>
      <p><i :class="searchBoxToggleClass" @click="toggleSearchbox"/></p>
    </div>
    <InspectorSearchbox v-if="showSearchbox"/>
  </div>
</template>

<script src="./InspectorHeaderCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-header
  user-select none
  cursor default
  border-bottom 1px solid $col("default","darker")
  padding 3px 3px
  i
    font-size font-size-default
    color $col("primary")
    display inline-block
    margin 0px 5px 0px 3px
  .node-name-header
    margin 0px
    font-size font-size-larger
  .node-name-fqn
    flex 1
    margin 0px
    font-size font-size-smaller
    padding 0px 10px
    color $col("default","darker")
  .bracket
    color $col("default","darker")
  .node-name
    color $col("primary")
  .node-tools
    display flex
    flex-direction row
    p
      margin 0px
      font-size font-size-smaller
      .search-box-toggle
        &:hover
          cursor pointer
        &.shown
          color $col("primary")
        &.invisible
          color $col("default","darker")
</style>
