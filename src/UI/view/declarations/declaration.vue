<template>
    <div class="component-root-declaration">
        <DeclarationHeader/>
        <div class="declaration-body">
            <VerticalSeparator leftMinSize="200" rightMinSize="600">
                <PluginContentList slot="left"/>
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
    >.declaration-body
        flex 1
        height 100%
</style>
