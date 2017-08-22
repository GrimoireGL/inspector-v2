<template>
  <div class="component-root-plugin-content-list">
      <div v-for="(content,index) in symbols" v-if="isVisible(content)" :key="index" :class="['plugin-content-container',{selected:isHighlighted(content)}]" @click="select(index)">
          <p ><i :class="['fa fa-fw',getIcon(content.type)]"/></p><p class="name-label">{{getName(content)}}</p><p class="fqn-label">{{content.fqn}}</p>
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
        &.selected
            background-color $col("primary")
            i
                color white
            p
                &.name-label
                    color white
                &.fqn-label
                     color $col("default","darkest")
        p
            margin 0px 5px
            &.name-label
                color $col("primary")
            &.fqn-label
                font-size font-size-smaller
                display flex
                align-items center
                color $col("default","darkest")
</style>
