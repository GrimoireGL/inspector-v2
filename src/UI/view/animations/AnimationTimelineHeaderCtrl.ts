import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import HorizontalGridGenerator from "./grid-generator/HorizontalGridGenerator"
import { WindowEvent } from "../../../common/WindowEvent";
@Component({})
export default class AnimationTimelineHeaderCtrl extends Vue {

    private gridGenerator:HorizontalGridGenerator = HorizontalGridGenerator.instance;

    @Prop()
    public scrollLeft:number;

    private holdingSeeker = false;

    public mounted():void{
        this.$watch(()=>this.scrollLeft,()=>{
            (this.$refs.scrollTarget as HTMLDivElement).scrollLeft = this.scrollLeft;
        });
    }

    public get timeSeekerLeft():number{
        return this.gridGenerator.timeToLeft(this.$store.state.currentTime);
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

    private onSeekerMouseDown():void{
        this.holdingSeeker = true;
    }

    private onSeekerMouseUp():void{
        this.holdingSeeker = false;
    }

    private onSeekerMouseMove(e:MouseEvent):void{
        let nextTime = this.$store.state.currentTime + this.gridGenerator.leftDeltaToTime(e.movementX);
        nextTime = Math.max(nextTime,0);
        nextTime = Math.min(nextTime,this.gridGenerator.maxMoment);
        this.$store.commit("setTime",{time:nextTime})
    }
}
