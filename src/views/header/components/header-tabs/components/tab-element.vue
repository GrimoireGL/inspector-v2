<template>
  <div :class="containerClass" @click="selectCurrentTab">
    <p><i :class="iconClass"></i>{{tabInfo.header}}</p>
  </div>
</template>

<script src="./TabElementCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-tab-element
  margin 0px 0px -4px 0px
  height calc(100% - 4px)
  color $col("default","color")
  background-color $col("default")
  border-bottom 4px solid $col("default","base")
  cursor default
  &:hover
    background-color $col("default","dark")
    border-bottom 4px solid $col("default","dark")
    cursor pointer
  &.selected
    color $col("primary","base")
    border-bottom 4px solid $col("primary","base")
  >p
    padding 2px 10px 0px 0px
    margin 0px
    height 100%
    user-select none
    >i
      margin 0px 10px
</style>
