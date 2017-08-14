<template>
  <div class="component-root-dev-tool-all-view-root">
    <ToolHeader @selectedTabChanged="selectedTabChanged"/>
    <ToolBody :currentTab="currentTab"/>
  </div>
</template>

<script src="./DevToolAllCtrl">

</script>

<style lang="stylus">
.component-root-dev-tool-all-view-root
  height 100%
  display flex
  flex-direction column
  font-size 16px
  font-family "Arial, Helvetica, sans-serif"
</style>
