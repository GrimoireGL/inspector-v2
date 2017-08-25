<template>
  <div class="component-root-animation-tree-query">
       <p class="header" ref="header"><i class="fa fa-fw fa-tag"/>{{query}}</p>
       <AnimationTreeComponent v-for="(component,componentName,componentIndex) in queried" :key="componentName" :component="component" :componentName="componentName" :queryIndex="queryIndex" :componentIndex="componentIndex"/>
  </div>
</template>

<script src="./AnimationTreeQueryCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-tree-query
    border-bottom 1px solid $col("default","darker")
    >p
        margin 3px 10px
</style>
