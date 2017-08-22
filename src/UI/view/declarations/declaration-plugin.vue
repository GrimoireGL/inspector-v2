<template>
    <div class="component-root-declaration-plugin">
        <p><a :href="repositoryURL" target="_blank" class="topLink"><i class="fa fa-fw fa-github"/>Repositry</a></p>
        <p v-if="apiReference"><a :href="apiReference" target="_blank" class="topLink"><i class="fa fa-fw fa-book"/>API Reference</a></p>
        <Markdown :source="readme"></Markdown>
    </div>
</template>

<script src="./DeclarationPluginCtrl">
    
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declaration-plugin
    height calc(100% - 60px)
    overflow scroll
    .topLink
        color $col("default","darkest")
        text-decoration none
        &:hover
            text-decoration underline
</style>
