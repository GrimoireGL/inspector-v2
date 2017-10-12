<template>
  <div class="component-root-dropdown-list">
    <component :is="elementComponent" v-for="(d,index) in data" :key="index" :data="data" :isSelected="selectedIndex === index" @select="onElementSelected(index)"/>
  </div>
</template>

<script src="./DropdownListCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-dropdown-list

</style>
