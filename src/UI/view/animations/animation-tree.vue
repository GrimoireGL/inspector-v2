<template>
  <div class="component-root-animation-tree">
    <AnimationTreeQuery v-for="(queried,query,index) in alignedAnimation" :key="query" :queried="queried" :query="query" :queryIndex="index"/>
  </div>
</template>

<script src="./AnimationTreeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-tree
  position relative
</style>
