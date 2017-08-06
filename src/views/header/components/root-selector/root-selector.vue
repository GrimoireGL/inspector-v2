<template>
  <div class="component-root-selector">
    <div class="control-root" @click.stop="clicked">
      <div class="selected-container">
        <p>#canvas.holo1</p>
      </div>
      <div class="spinner-container">
        <i class="fa fa-caret-down fa-fw"></i>
      </div>
    </div>
    <div class="popup-root" v-if="expand">
      <div class="popup-container">
        <WindowElement v-for="window in windows" :key="window.windowName" :windowInfo="window"/>
      </div>
    </div>
  </div>
</template>

<script src="./RootSelectorCtrl">
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-selector
  max-width 200px
  height tool-bar-height-include-border
  border-left 1px solid $col("default","darker")
  border-right 1px solid $col("default","darker")
  .control-root
    display flex
    height 100%
    &:hover
      background-color $col("default","dark")
      cursor pointer
  .popup-root
    position relative
    .popup-container
      position absolute
      z-index popup-z-index
      width 300px
      max-height 300px
      overflow-y scroll
  .selected-container
    flex 1
    overflow-x hidden
    p
      height 100%
      margin 0px
      padding 0 10px
      color $col("default","color")
  .spinner-container
    padding 0px 5px
</style>
