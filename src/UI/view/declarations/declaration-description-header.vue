<template>
    <div class="component-root-declaration-description-header">
        <p class="type-header"><i :class="['fa fa-fw',typeIcon]"/><span>{{typeName}}</span></p>
        <p><span class="display-label">{{displayName}}</span><span class="fqn-label">{{fqnName}}</span></p>
    </div>
</template>

<script src="./DeclarationDescriptionHeaderCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declaration-description-header
    display flex
    flex-shrink 0
    flex-direction column
    height 60px
    border-bottom 1px solid $col("default","dark")
    p
        margin 2px 10px
        span
            display inline-block
            margin 0px 3px
    .type-header
        font-size font-size-smaller
        color $col("default","darker")
    .display-label
        font-size font-size-large
        color $col("primary")
    .fqn-label
        font-size font-size-small
        color $col("default","darkest")
</style>
