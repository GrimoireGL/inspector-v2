<template>
    <div class="component-root-declaration-node">
        <p class="defined-label-container">in <span class="package-fqn" @click="openByFQN(packageFQN)">{{packageFQN}}</span></p>
        <p class="extend-label-container"><span class="extend-label">Extends<i class="fa fa-fw fa-level-down"/></span><span :class="['super-node',{hasExtend:hasExtend}]" @click="goToSuperNode">&lt;{{toShortName(superNode)}}&gt;</span></p>
        <p class="header">Default components</p>
        <p v-for="component in target.defaultComponents" :key="component"><i class="fa fa-fw fa-cube"/><span class="default-component-name" @click="openByFQN(component)">{{toShortName(component)}}</span><span class="default-component-fqn">{{component}}</span></p>
        <p v-for="component in defaultComponentByInheritence" :key="component.fqn"><i class="fa fa-fw fa-cube"/><span class="default-component-name" @click="openByFQN(component.fqn)">{{toShortName(component.fqn)}}</span><span class="default-component-fqn" @click="openByFQN(component.by)">{{component.fqn}}<span class="inheritence-label"><i class="fa fa-fw fa-level-down"/> by <span class="inheritence-fqn">{{component.by}}</span></span></span></p>
    </div>
</template>

<script src="./DeclarationNodeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declaration-node
    height 100%
    overflow scroll
    p
        &.defined-label-container
            text-align right
            font-size font-size-smaller
            .package-fqn
                color $col("default","darkest")
                &:hover
                    cursor pointer
                    text-decoration underline
        &.header
            font-weight 800
        margin 3px 10px
        &.extend-label-container
            text-align right
        .extend-label
            color $col("default","darkest")
        .super-node
            color $col("primary")
            display inline-block
            margin 3px 10px
            &.hasExtend:hover
                text-decoration underline
                cursor pointer
        .default-component-name
            display inline-block
            margin 3px 5px
            color $col("primary")
            &:hover
                text-decoration underline
                cursor pointer
        .default-component-fqn
            font-size font-size-smaller
            color $col("default","darker")
            .inheritence-label
                color $col("default","darkest")
            .inheritence-fqn:hover
                text-decoration underline
                cursor pointer
</style>
