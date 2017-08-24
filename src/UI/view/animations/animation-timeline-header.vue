<template>
    <div class="component-root-animation-timeline-header">
        <div class="scroll-root" ref="scrollTarget" @scroll="onScroll">
            <div class="horizontal-grid-container">
                <div v-for="(h,index) in horizontalDividers" :key="h.left" :style="{left:h.left+'px'}" :class="['horizontal-divider','importance-' + h.importance]" >
                    <p v-if="h.importance >= 1" :class="'importance-' + h.importance">{{h.label}}</p>
                </div>
            </div>
        </div>
        <div class="control-root">
            <p @click="onPlusClick"><i class="fa fa-fw fa-search-plus"/></p>
            <p>{{scaleLabel}}</p>
            <p @click="onMinusClick"><i class="fa fa-fw fa-search-minus"/></p>
        </div>
    </div>
</template>

<script src="./AnimationTimelineHeaderCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-animation-timeline-header
    position relative
    height 100%
    overflow-y hidden
    .scroll-root
        overflow-x scroll
        position absolute
        right 0px
        left 0px
        top 0px
        bottom -20px
        >.horizontal-grid-container
            position absolute
            left 0px
            right 0px
            bottom 20px
            top 0px
            >.horizontal-divider
                position absolute
                top 37px
                bottom 0px
                border-left 1px solid $col("default","dark")
                &.importance-1
                    border-left 2px solid $col("default","darker")
                    top 35px
                &.importance-2
                    border-left 1px solid $col("primary")
                    top 30px
                &.importance-3
                    border-left 2px solid $col("error","color")
                    top 30px
                >p
                    position absolute
                    transform translateY(-150%)translateX(-50%)
                    color $col("default","darkest")
                    font-size font-size-small
                    &.importance-1
                        font-size font-size-smaller
                        color $col("default","darker")
    .control-root
        position absolute
        top 0px
        right 0px
        display flex
        p
            margin 0px
</style>
