<template>
  <div class="component-root-inspector-component">
    <p class="component-title"><i class="fa fa-caret-down fa-fw"/><i class="fa fa-cube fa-fw"/>{{componentName}}</p>
    <Attribute v-for="(attr,index) in target.attributes" :target="attr" :key="index"/>
  </div>
</template>

<script src="./InspectorComponentCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-component
  .component-title
    margin 0px
    color $col("default","color")
  border-bottom 1px solid $col("default","dark")
</style>
