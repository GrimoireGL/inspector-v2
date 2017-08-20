<template>
  <div class="component-root-text-editor">
    <input ref="input" type="text" :value="displayValue" @input="input"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator';
@Component({})
export default class TextEditor extends Vue{
  @Prop()
  public value:string|null;

  public get displayValue():string{
    if(this.value === null){
      return "";
    }else{
      return this.value;
    }
  }

  public input():void{
    this.$emit("input",(this.$refs.input as HTMLInputElement).value);
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-text-editor
  display flex
  height 24px
  p
    margin 0px 0px 0px 5px
  i
    font-size font-size-small
    color $col("default","dark")
  input
    textApparanceClear()
    margin 0px 10px 3px 10px
    width 100%
    border-bottom 1px solid $col("default","darker")
</style>
