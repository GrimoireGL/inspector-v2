<template>
  <div class="component-root-tool-body">
    <component :is="currentBody"/>
  </div>
</template>

<script src="./ToolBodyCtrl">

</script>

<style lang="stylus">
.component-root-tool-body
  flex 1
  overflow-y scroll
</style>
