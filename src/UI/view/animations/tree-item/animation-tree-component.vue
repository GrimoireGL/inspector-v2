<template>
  <div class="component-root-animation-component-query">
      <p class="header"><i class="fa fa-fw fa-cube"/>{{componentName}}</p>
      <AnimationTreeAttribute v-for="(timeline,attributeName,attributeIndex) in component" :key="attributeName" :attributeName="attributeName" :timeline="timeline" :queryIndex="queryIndex" :componentIndex="componentIndex" :attributeIndex="attributeIndex"/>
  </div>
</template>

<script src="./AnimationTreeComponentCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-component-query
    margin 0px -1px -1px 10px
    border 1px solid $col("default","darker")
    >p
        margin 0px 3px
</style>
