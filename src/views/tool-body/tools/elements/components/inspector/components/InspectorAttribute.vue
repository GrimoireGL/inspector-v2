<template>
  <div class="component-root-inspector-attribute">
    <p v-if="visibleByFilter"><span class="attribute-name">{{attributeName}}</span><span class="separator">:</span><span class="attribute-value">{{target.stringifiedValue}}</span></p>
  </div>
</template>

<script src="./InspectorAttributeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-attribute
  p
    margin 0 10px
    &:hover
      .visibility-toggle
        visibility visible
        color $col("default","darker")
        &:hover
          color $col("default","color")
          cursor pointer
  .attribute-name
    color $col("default","darker2")
    &:hover
      text-decoration underline
      cursor pointer
      color $col("default","darkest")
  .attribute-value
    color $col("primary")
  .separator
    display inline-block
    margin 0px 10px 0px 5px
</style>
