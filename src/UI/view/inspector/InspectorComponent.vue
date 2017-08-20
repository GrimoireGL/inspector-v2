<template>
  <div class="component-root-inspector-component">
    <p class="component-title"><i :class="caretClass" @click="toggle"/><i class="fa fa-cube fa-fw"/>{{componentName}}</p>
    <Attribute v-if="open" v-for="(attr,index) in target.attributes" :target="attr" :key="attr.attributeFQN" :componentId="target.id"/>
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
    .toggle-caret
      &:hover
        cursor pointer
  border-bottom 1px solid $col("default","dark")
</style>
