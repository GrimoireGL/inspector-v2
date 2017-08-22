import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator';
import { Chrome } from "vue-color";
import {WindowEvent} from "../../../../common/WindowEvent";
@Component({ components: { Chrome } })
export default class ColorEditor extends Vue {
    @Prop()
    public value: number[];

    public open = false;

    public mounted():any{
        window.addEventListener("click",this.closeEditor.bind(this))
    }

    public get colorModel(): any {
        const colorScaled = this.value.map(v => Math.floor(v * 255));
        if (colorScaled.length === 4) {
            colorScaled[3] /= 255;
        } else {
            colorScaled.push(1);
        }
        return {
            hex: this._rgbToHex.apply(this, colorScaled),
            rgba: {
                r: colorScaled[0],
                g: colorScaled[1],
                b: colorScaled[2],
                a: colorScaled[3]
            },
            a: colorScaled[3]
        };
    }

    public get colorString(): string {
        return this._toColorString(this.value);
    }

    public get colorVisulaizerStyle() {
        return {
            "background-color": this.colorString
        };
    }

    public onInput(e: any): void {
        const rgba = e.rgba;
        const rgbaArray = [rgba.r, rgba.g, rgba.b, e.a];
        this.$emit("input", this._toColorString(rgbaArray, 1));
    }

    private _toColorString(colors: number[], scale = 255, scaleAlpha = 1): string {
        const colorScaled = colors.map(v => Math.floor(v * scale));
        colorScaled[3] = colors[3];
        if (this.value.length === 3) {
            return `rgb(${colorScaled[0]},${colorScaled[1]},${colorScaled[2]})`;
        } else {
            return `rgba(${colorScaled[0]},${colorScaled[1]},${colorScaled[2]},${(colorScaled[3] * scaleAlpha)})`;
        }
    }

    public openColorEditor():void{
        this.open = !this.open;;
    }

    public closeEditor():void{
        this.open = false;
    }

    private _rgbToHex(r:number, g:number, b:number) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
