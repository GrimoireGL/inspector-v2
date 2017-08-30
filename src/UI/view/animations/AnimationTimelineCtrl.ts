import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import HorizontalGridGenerator from "./grid-generator/HorizontalGridGenerator"
import IAlignedTimeline from "./IAlignedTimeline";
import IAnimationTimeline from "grimoirejs-animation/ref/Animation/Schema/IAnimationTimeline";
import {getId} from "./AnimationStore"
@Component({})
export default class AnimationTimelineCtrl extends Vue {
    @Prop()
    public width:number;

    @Prop()
    public scrollLeft:number;

    private selectedIndex:number = -1;

    public mounted():void{
        this.$watch(()=>this.scrollLeft,()=>{
            (this.$refs.scrollTarget as HTMLDivElement).scrollLeft = this.scrollLeft;
        });
    }

    public get currentTimeLeft():number{
        return this.gridGenerator.timeToLeft(this.$store.state.currentTime);
    }

    public getId(attr:IAnimationTimeline):string{
        return getId(attr);
    }

    public getLeftFromTime(time:number):number{
        return this.gridGenerator.timeToLeft(time);
    }

    public get selectedId():string{
        if(this.$store.state.selectedAttribute === null){
            return "";
        }
        return getId(this.$store.state.selectedAttribute);
    }

    public get timelineWidth():number{
        return this.gridGenerator.timelineWidth;
    }

    public get timeArrayByName():{[key:string]:number[]}{
        return this.$store.getters.timeArrayByName;
    }

    public get alignedAnimation():IAlignedTimeline{
        return this.$store.getters.alignedAnimation;
    }

    private gridGenerator:HorizontalGridGenerator = HorizontalGridGenerator.instance;

    public get horizontalDividers(){
        return this.gridGenerator.horizontalGrid;
    }

    public onScroll(e:MouseWheelEvent):void{
        this.$emit("timeline-scroll",(this.$refs.scrollTarget as HTMLDivElement).scrollLeft);
    }

    public doubleClickKeyFrame(id:string,index:number):void{
        this.selectedIndex = index;
        this.$store.commit("setTime",{
            time:this.timeArrayByName[id][index]
        });
    }

    public getHeight(t:IAnimationTimeline):number{
        const id = getId(t);
        const rect = this.$store.state.attributeRects[id];
        if(!rect){
            return 0;
        }
        return rect.bottom - rect.top;
    }
}
