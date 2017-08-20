<template>
    <div class="component-root-color-editor" @click.stop>
        <div class="color-fill" :style="colorVisulaizerStyle" @click="openColorEditor"/>
        <div class="color-editor-container-wrap">
            <div class="color-editor-container">
                <Chrome v-if="open" :value="colorModel" @input="onInput" />
            </div>
        </div>
    </div>
</template>

<script src="./ColorEditorCtrl">
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-color-editor
  height 16px
  border solid 2px black
  margin 2px 0px
  background-image url("../../../../resources/transparent.png")
  background-size 72px
  .color-editor-container-wrap
    position relative
    z-index 1000
    .color-editor-container
        position absolute
  .color-fill
    height 100%
    width 100%

</style>
