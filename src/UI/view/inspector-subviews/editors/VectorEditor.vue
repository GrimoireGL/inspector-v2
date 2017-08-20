<template>
  <div class="component-root-vector-editor">
      <div class="single-dimention" v-for="(v,index) of value" :key="index">
          <p>{{labels[index]}}</p>
          <input type="text" :value="v"/>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator';
@Component({})
export default class VectorEditor extends Vue{
  @Prop()
  public value:number[];

  public get labels():string[]{
      return ["X","Y","Z","W"];
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-vector-editor
  display flex
  color $col("primary")
  .single-dimention
    flex 1
    display flex
    p
        margin 0px
    input
        flex 1
        width 35px
        textApparanceClear()
        margin 0px 10px 3px 10px
        height 24px
        border-bottom 1px solid $col("default","darker")
</style>
