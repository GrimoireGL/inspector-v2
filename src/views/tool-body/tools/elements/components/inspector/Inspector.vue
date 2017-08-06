<template>
  <div class="component-root-inspector">
    <InspectorHeader :target="target"/>
    <div class="components">
      <InspectorComponent v-for="(component,index) in target.components" :target="component" :key="index"/>
    </div>
  </div>
</template>

<script src="./InspectorCtrl">

</script>

<style lang="stylus">
.component-root-inspector
  height 100%
  display flex
  overflow-x scroll
  flex-direction column
  .components
    flex 1
    overflow scroll
</style>
