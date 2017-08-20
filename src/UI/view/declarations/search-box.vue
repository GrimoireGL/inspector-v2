<template>
    <div class="component-root-declarations-searchbox">
        <p>
            <i class="fa fa-search fa-fw" />
        </p>
        <input placeholder="Search by name" ref="searchBox" @input="onInput"/>
        <p v-for="(t,index) in toggleSwitches" :key="index" :class="{toggle:true,selected:t.selected}" @click="toggle(t.trigger)"><i :class="t.class"/></p>
    </div>
</template>

<script src="./SearchboxCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-declarations-searchbox
    display flex
    p
        margin 0px
        padding 0px 10px
        color $col("default","darker")
        &.toggle:hover
            background-color $col("default","dark")
            cursor pointer
        &.selected
            color $col("primary")
    input
        flex 1
        textApparanceClear()
        height 30px
</style>
