<template>
  <div class="component-root-inspector-attribute">
    <p><i class="visibility-toggle fa fa-eye-slash"/><span class="attribute-name">{{attributeName}}</span><span class="separator">:</span><span class="attribute-value">{{target.stringifiedValue}}</span></p>
  </div>
</template>

<script src="./InspectorAttributeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-attribute
  p
    margin 0px
    .visibility-toggle
      display inline-block
      margin 0px 3px 0px 3px
      visibility hidden
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
