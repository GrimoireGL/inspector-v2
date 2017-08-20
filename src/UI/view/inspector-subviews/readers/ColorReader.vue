<template>
  <span class="component-root-inspector-reader-color">
    <span class="colorVisualizer" :style="colorVisulaizerStyle"></span>{{colorString}}
  </span>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
@Component({})
export default class ColorReader extends Vue{
  @Prop()
  public value:number[];

  public get colorString():string{
      const colorScaled = this.value.map(v=>Math.floor(v*255));
      if(this.value.length === 3){
          return `rgb(${colorScaled[0]},${colorScaled[1]},${colorScaled[2]})`;
      }else{
          return `rgba(${colorScaled[0]},${colorScaled[1]},${colorScaled[2]},${(colorScaled[3]/255).toFixed()})`;
      }
  }

  public get colorVisulaizerStyle(){
      return {
        "background-color":this.colorString
      };
  }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-inspector-reader-color
    .colorVisualizer
        display inline-block
        width 13px
        height 13px
        border-radius 3px
        border 1px solid black
</style>
