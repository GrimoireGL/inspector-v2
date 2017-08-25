<template>
    <div class="component-root-animation-timeline-wrap">
        <div class="component-root-animation-timeline" @scroll="onScroll" ref="scrollTarget">
            <div>
                <div class="timeline-point-container" :style="{width:timelineWidth + 'px'}">
                    <div v-for="query in alignedAnimation" class="query-margin">
                        <div v-for="component in query" class="component-margin">
                            <div v-for="attribute in component" class="attribute-margin" :style="{height:getHeight(attribute)+'px'}" :class="{selected:selectedId === getId(attribute)}">
                                <p v-for="time in timelineByName[getId(attribute)]" class="timeline-point" :style="{left:getLeftFromTime(time)+'px'}"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="horizontal-grid-container">
                    <div v-for="(h,index) in horizontalDividers" :key="h.left" :style="{left:h.left+'px'}" :class="['horizontal-divider','importance-' + h.importance]" />
                    <div class="horizontal-divider current-time-line" :style="{left:currentTimeLeft + 'px'}"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./AnimationTimelineCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.timeline-point
    width 9px
    height 9px
    border solid 1px black
    background-color gray
    position absolute
    transform translateX(-5px)translateY(50%)rotate(45deg)
    z-index 1
    margin 0px
    &:hover
        cursor pointer
.component-root-animation-timeline-wrap
    height 100%
    width 100%
    position relative
.component-root-animation-timeline
    absoluteFill()
    overflow-x scroll
    height 100%
    .timeline-point-container
        absoluteFill()
        .query-margin
            padding-top 28px
            .component-margin
                padding-top 24px
                .attribute-margin
                    height 22px
                    border-top 1px solid $col("default","darker")
                    border-bottom 1px solid $col("default","darker")
                    margin-bottom -1px
                    box-sizing border-box
                    &.selected
                        background-color $col("info")
    .horizontal-grid-container
        absoluteFill()
        >.horizontal-divider
            position absolute
            top 0px
            bottom 0px
            border-left 1px solid $col("default","dark")
            &.importance-1
                border-left 2px solid $col("default","darker")
            &.importance-2
                border-left 1px solid $col("primary")
            &.importance-3
                border-left 2px solid $col("error","color")
            &.current-time-line
                border-left 2px solid $col("seekbar")
                transform translateX(-1px)
</style>
