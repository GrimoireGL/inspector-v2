<template>
  <div class="component-root-inspector-attribute">
    <div v-if="visibleByFilter" class="attribute-container">
      <p class="attribute-name" @mouseover="openPopup" @mouseout="closePopup">{{attributeName}}</p>
      <div v-if="noError" class="attribute-value">
        <component :is="editorComponent" :value="editorModel" @input="onEditorInput"/>
      </div>
      <p v-else class="error"><i class="fa fa-fw fa-exclamation"></i>{{target.errorText}}</p>
    </div>
    <div class="popup-root" v-if="popupOpen">
      <div class="description-tooltip">
        <AttributeDescriptionTooltip :target="target"/>
      </div>
    </div>
  </div>
</template>

<script src="./InspectorAttributeCtrl">

</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-attribute
  // For attribute description popup
  .popup-root
    position relative
    .description-tooltip
      position absolute
      left 10px
  .attribute-container
    display flex
    margin 2px 0px
    >.error
      color red
      font-size font-size-smaller
    .attribute-name
      margin 0px 10px
      color $col("primary")
      min-width 180px
    .attribute-value
      flex 1
      margin-right 10px

</style>
