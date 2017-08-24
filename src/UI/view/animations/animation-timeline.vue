<template>
  <div class="component-root-animation-timeline" @scroll="onScroll" ref="scrollTarget">
      <div class="horizontal-grid-container">
          <div v-for="(h,index) in horizontalDividers" :key="h.left" :style="{left:h.left+'px'}" :class="['horizontal-divider','importance-' + h.importance]"/>
      </div>
  </div>
</template>

<script src="./AnimationTimelineCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-timeline
    position relative
    overflow-x scroll
    height 100%
    >.horizontal-grid-container
        position absolute
        left 0px
        right 0px
        bottom 0px
        top 0px
        >.horizontal-divider
            position absolute
            top 0px
            bottom 0px
            border-left 1px solid $col("default","dark")
            &.importance-1
                border-left 2px solid $col("default","darker")
            &.importance-2
                border-left 1px solid $col("primary")
            &.importance-3
                border-left 2px solid $col("error","color")
</style>
