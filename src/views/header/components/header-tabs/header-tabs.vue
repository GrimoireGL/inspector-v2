<template>
  <div class="component-root-header-tabs">
    <div v-for="(tab,index) in tabs">
      <TabElement :tabInfo="tab" :selected="index === 0"/>
    </div>
  </div>
</template>

<script src="./HeaderTabsCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-header-tabs
  display flex
  height tool-bar-height-include-border
</style>
