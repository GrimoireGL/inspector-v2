<template>
  <div class="component-root-search-node-box">
    <p><i class="fa fa-search fa-fw"/></p>
    <input ref="input" type="text" placeholder="Filter nodes" :value="query" @input="queryChanged"/>
    <p :class="nodeNameModeClass" @click="setQueryModeNodeName"><i class="fa fa-cubes fa-fw"/></p>
    <p :class="componentNameModeClass" @click="setQueryModeComponentName"><i class="fa fa-cube fa-fw"/></p>
  </div>
</template>

<script src="./SearchboxCtrl.ts">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-search-node-box
  height element-search-box-height
  border-bottom solid 1px $col("default","dark")
  display flex
  p
    margin 0px 10px
    color $col("default","darker")
  .search-mode
    margin 0px
    padding 0px 10px
    &.selected
      color $col("primary")
    &:hover
      background-color $col("default","dark")
      cursor pointer
  input
    textApparanceClear()
    flex 1
</style>
