<template>
  <div class="component-root-inspector-attribute">
    <p v-if="visibleByFilter"><span class="attribute-name" @click="toggle">{{attributeName}}</span><span class="separator">:</span><span class="attribute-value"><component :is="readerComponent" :value="readerModel"></component></span></p>
    <div class="editor-section" v-if="open">
      <p class="converter-type"><i class="fa fa-exchange fa-fw"/>{{converterTypeName}}<span class="separator"></span><i class="fa fa-paper-plane fa-fw"/><component :is="readerComponent" :value="defaultValueReaderModel"></component></p>
      <component :is="editorComponent" :value="editorModel"/>
    </div>
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
  .editor-section
    margin 0px 0px 0px 5px
    border-left solid 1px $col("default","dark")
  .converter-type
    font-size font-size-smaller
    color $col("info","dark")
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
