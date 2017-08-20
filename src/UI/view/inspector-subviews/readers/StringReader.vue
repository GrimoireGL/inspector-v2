<template>
  <span :class="classNames">
    {{displayValue}}
  </span>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
@Component({})
export default class StringReader extends Vue{
  @Prop()
  public value:string;

  public get displayValue():string{
    if(this.value === null){
      return "(null)";
    }else if(this.value === ""){
      return "(Empty String)";
    }else{
      return this.value;
    }
  }

  public get classNames():string[]{
    if(this.value === null || this.value === ""){
      return ["component-root-inspector-reader-string","special-value"];
    }else{
      return ["component-root-inspector-reader-string"];
    }
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-reader-string
  &.special-value
    color $col("error","color")
</style>
