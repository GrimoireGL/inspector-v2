<template>
  <div :class="['component-root-animation-attribute',{selected:isSelected}]" @click="select" ref="attributeRoot">
      <p class="header"><i class="fa fa-fw fa-quote-right"/>{{attributeName}}</p>
  </div>
</template>

<script src="./AnimationTreeAttributeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-attribute
    margin 0px -1px -1px 10px
    border 1px solid $col("default","darker")
    box-sizing border-box
    &:hover
        cursor pointer
        background-color $col("default","dark")
    &.selected
        background-color $col("info")
    >p
        margin 0px 3px
</style>
