<template>
  <div class="component-root-vertical-separator">
    <div class="left-side-component-container">
      <slot name="left"/>
    </div>
    <div class="separator" @mousedown="separatorMouseDown"></div>
    <div class="right-side-component-container" :style="rightStyle">
      <slot name="right"/>
    </div>
    <div class="mouse-move-detector" :style="detectorStyle" @mousemove="separatorMouseMove" @mouseup="separatorMouseUp">

    </div>
  </div>
</template>

<script src="./VerticalSeparatorCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-vertical-separator
  display flex
  height 100%
  .left-side-component-container
    background-color $col("default")
    flex 1
  .right-side-component-container
    background-color $col("default")
  >.separator
    width 2px
    background-color $col("default","darker")
    &:hover
      cursor col-resize
  .mouse-move-detector
    position absolute
    z-index 1000
    left 0px
    right 0px
    top 0px
    bottom 0px
    cursor col-resize
</style>
