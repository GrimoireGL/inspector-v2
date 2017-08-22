<template>
    <div class="component-root-declaration">
        <div class="declaration-header">
            <DeclarationHeader/>
        </div>
        <div class="declaration-body">
            <VerticalSeparator leftMinSize="200" rightMinSize="600">
                <PluginContentList slot="left" :symbols="symbols"/>
                <DeclarationDescription slot="right"/>
            </VerticalSeparator>
        </div>
    </div>
</template>

<script src="./DeclarationCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declaration
    display flex
    flex-direction column
    height 100%
    background-color $col("default")
    >.declaration-header
        flex-shrink 0
    >.declaration-body
        flex-grow 1
        flex-shrink 1
        height calc(100% - 40px)
</style>
