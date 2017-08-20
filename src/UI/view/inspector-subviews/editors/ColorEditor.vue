<template>
    <div class="component-root-color-editor">
        <div class="color-fill" :style="colorVisulaizerStyle"/>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator';
@Component({})
export default class ColorEditor extends Vue {
    @Prop()
    public value: number[];

    public get colorString(): string {
        const colorScaled = this.value.map(v => Math.floor(v * 255));
        if (this.value.length === 3) {
            return `rgb(${colorScaled[0]},${colorScaled[1]},${colorScaled[2]})`;
        } else {
            return `rgba(${colorScaled[0]},${colorScaled[1]},${colorScaled[2]},${(colorScaled[3] / 255).toFixed()})`;
        }
    }

    public get colorVisulaizerStyle() {
        return {
            "background-color": this.colorString
        };
    }
}
</script>

<style lang="stylus">
@import "~gls/index.styl"
.component-root-color-editor
  height 16px
  border solid 2px black
  margin 2px 0px
  background-image url("../../../../resources/transparent.png")
  background-size 72px
  .color-fill
    height 100%
    width 100%

</style>
