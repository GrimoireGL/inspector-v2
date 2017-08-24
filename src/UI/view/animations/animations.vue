<template>
  <div class="component-root-animations">
    <div v-if="!hasAnimationPlugin" class="notfound-container">
      <!--Only shown when grimoirejs-animation is not loaded on current context-->
      <p class="notfound-paragraph"><i class="fa fa-fw fa-exclamation"/><span>grimoirejs-animation was not found on current context.</span></p>
    </div>
    <div v-else>
      <!--grimoirejs-animation was loaded-->
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
</style>
