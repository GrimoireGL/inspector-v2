<template>
  <div class="component-root-animation-top-tools">
    <div class="time-label-container vertical-center">
          <p>{{currentTimeLabel}}</p>
    </div>
    <div class="start-button vertical-center">
        <p><i class="fa fa-fw fa-play"/></p>
    </div>
  </div>
</template>

<script src="./AnimationTopToolCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-top-tools
    height 100%
    display flex
    justify-content center
    p
      margin 0px
    .vertical-center
      display flex
      flex-direction column
      justify-content center
    .time-label-container
      color $col("primary")
      font-size font-size-larger
    .start-button
      border-left 1px solid $col("default","darker")
      border-right 1px solid $col("default","darker")
      margin 0px 10px
      padding 0px 5px
</style>
