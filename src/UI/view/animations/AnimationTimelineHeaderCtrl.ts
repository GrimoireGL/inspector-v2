import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import HorizontalGridGenerator from "./grid-generator/HorizontalGridGenerator"
@Component({})
export default class AnimationTimelineHeaderCtrl extends Vue {

    private gridGenerator:HorizontalGridGenerator = HorizontalGridGenerator.instance;

    @Prop()
    public scrollLeft:number;

    public mounted():void{
        this.$watch(()=>this.scrollLeft,()=>{
            (this.$refs.scrollTarget as HTMLDivElement).scrollLeft = this.scrollLeft;
        });
    }

    public get horizontalDividers(){
        return this.gridGenerator.horizontalGrid;
    }

    public get scaleLabel(){
        return this.gridGenerator.scale;
    }

    public onScroll(e:MouseWheelEvent):void{
        this.$emit("timeline-scroll",(this.$refs.scrollTarget as HTMLDivElement).scrollLeft);
    }

    public onPlusClick():void{
        this.gridGenerator.scale *= 10;
    }

    public onMinusClick():void{
        this.gridGenerator.scale /= 10;
    }
}
