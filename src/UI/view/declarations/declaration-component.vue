<template>
    <div class="component-root-declaration-component">
        <p class="defined-label-container">in <span class="package-fqn" @click="openByFQN(packageFQN)">{{packageFQN}}</span></p>
        <p class="description-header">Default attributes</p>
        <p v-for="attribute in target.defaultAttributes" class="attribute-paragraph"><i class="fa fa-fw fa-quote-right"/><span class="attribute-name">{{attribute.fqn}}<span class="converter-name">{{attribute.converter}}</span></span></p>
    </div>
</template>

<script src="./DeclarationComponentCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declaration-component
    height 100%
    overflow scroll
    p.description-header
        font-weight 800
        margin 3px 5px
    p.attribute-paragraph
        margin 3px 10px
        .attribute-name
            display inline-block
            margin 0px 10px
        .converter-name
            display inline-block
            margin 0px 10px
            color $col("default","darkest")

</style>
