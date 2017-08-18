<template>
  <div class="attribute-description-tooltip-root">
      <p><span class="label">Converter</span><span class="converter-name">{{target.converterType}}</span></p>
      <p><span class="label">Default</span><span></span></p>
  </div>
</template>

<script src="./AttributeDescriptionTooltipCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.attribute-description-tooltip-root
    background-color $col("default")
    border 1px solid $col("primary")
    .label
      color $col("primary")
      display inline-block
      margin 0 5px
      .converter-converterType
        color $col("default","color")
</style>
