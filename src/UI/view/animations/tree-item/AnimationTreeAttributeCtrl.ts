import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import { IAlignedTimelineByQuery } from "../IAlignedTimeline";
import AnimationTreeComponent from "./animation-tree-component.vue";
import IAnimationTimeline from "grimoirejs-animation/ref/Animation/Schema/IAnimationTimeline";
@Component({ components: { AnimationTreeComponent } })
export default class AnimationTreeQuery extends Vue {
    @Prop({})
    public timeline: IAnimationTimeline;

    @Prop({})
    public attributeName: string;

    @Prop({})
    public queryIndex:number;

    @Prop({})
    public componentIndex:number;

    @Prop({})
    public attributeIndex:number;

    public mounted():void{
        const elem = this.$refs.attributeRoot as HTMLDivElement;
        const rect = elem.getBoundingClientRect();
        this.$store.commit("setAttributeRect",{
            attribute:this.timeline,
            top:rect.top,
            bottom:rect.bottom
        });
    }

    public get isSelected(): boolean {
        return this.$store.getters.selectedAttributeId === `${this.timeline.query}//${this.timeline.component}//${this.timeline.attribute}`;
    }

    public select(): void {
        const elem = this.$refs.attributeRoot as HTMLDivElement;
        const rect = elem.getBoundingClientRect();
        this.$store.commit("selectAttribute", {
            attribute: this.timeline
        });
    }
}
