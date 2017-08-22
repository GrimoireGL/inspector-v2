<template>
    <div class="component-root-declaration-description" v-if="contentSelected">
        <DeclarationDescriptionHeader :target="currentContent"/>
        <component :is="contentViewer" :target="currentContent"/>
    </div>
</template>

<script src="./DeclarationDescriptionCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declaration-description
    display flex
    flex-direction column
    height 100%
    width 100%
</style>
