<template>
  <div class="component-root-plugin-content-list">
      <div v-for="(content,index) in contents" v-if="isVisible(content)" :key="index" class="plugin-content-container">
          <p><i :class="['fa fa-fw',getIcon(content.type)]"/></p><p class="name-label">{{getName(content.fqn)}}</p><p class="fqn-label">{{content.fqn}}</p>
      </div>
  </div>
</template>

<script src="./PluginContentListCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-plugin-content-list
    flex 1
    height 100%
    overflow-y scroll
    .plugin-content-container
        display flex
        margin 3px 10px
        border-radius 3px
        &:hover
            background-color $col("info")
            cursor pointer
        p
            margin 0px 5px
            &.name-label
                color $col("primary")
            &.fqn-label
                font-size font-size-smaller
                display flex
                align-items center
                color $col("default","darker")
</style>
