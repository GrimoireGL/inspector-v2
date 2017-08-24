<template>
  <div class="component-root-animations">
    <div v-if="!hasAnimationPlugin" class="notfound-container">
      <!--Only shown when grimoirejs-animation is not loaded on current context-->
      <p class="notfound-paragraph"><i class="fa fa-fw fa-exclamation"/><span>grimoirejs-animation plugin was not found on current context.</span></p>
    </div>
    <div v-else class="animations-divider-root">
      <!--grimoirejs-animation was loaded-->
      <div class="divider-header">
        <VerticalSeparator :lengthFromLeft="fromLeft" rightMinSize="400" leftMinSize="300" @resize="onResize">
          <AnimationTools slot="left"/>
          <AnimationTimelineHeader slot="right" @timeline-scroll="onTimelineScroll" :scrollLeft="timelineScroll"/>
        </VerticalSeparator>
      </div>
      <div class="divider-body">
        <VerticalSeparator :lengthFromLeft="fromLeft" rightMinSize="400" leftMinSize="300" @resize="onResize">
          <AnimationTree slot="left"/>
          <AnimationTimeline slot="right" :width="fromLeft"  @timeline-scroll="onTimelineScroll" :scrollLeft="timelineScroll"/>
        </VerticalSeparator>
      </div>
    </div>
  </div>
</template>

<script src="./AnimationsCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animations
    height 100%
    background-color $col("default")
    >.notfound-container
      display flex
      height 100%
      flex-direction column
      justify-content space-around
      >.notfound-paragraph
        text-align center
        font-size font-size-larger
        >i
          color $col("error","color")
    >.animations-divider-root
      display flex
      flex-direction column
      height 100%
      >.divider-header
        height 40px
        border-bottom 1px solid $col("default","darker")
      >.divider-body
        height calc(100% - 40px)
        flex 1
        overflow-y scroll
</style>
