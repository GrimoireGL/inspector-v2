import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import HorizontalGridGenerator from "./grid-generator/HorizontalGridGenerator"
@Component({})
export default class AnimationTimelineCtrl extends Vue {
    @Prop()
    public width:number;

    @Prop()
    public scrollLeft:number;

    public mounted():void{
        this.$watch(()=>this.scrollLeft,()=>{
            (this.$refs.scrollTarget as HTMLDivElement).scrollLeft = this.scrollLeft;
        });
    }

    private gridGenerator:HorizontalGridGenerator = HorizontalGridGenerator.instance;

    public get horizontalDividers(){
        return this.gridGenerator.horizontalGrid;
    }

    public onScroll(e:MouseWheelEvent):void{
        this.$emit("timeline-scroll",(this.$refs.scrollTarget as HTMLDivElement).scrollLeft);
    }
}
