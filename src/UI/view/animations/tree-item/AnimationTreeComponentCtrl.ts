import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import { IAlignedTimelineByAttribute } from "../IAlignedTimeline";
import AnimationTreeAttribute from "./animation-tree-attribute.vue";
@Component({components:{AnimationTreeAttribute}})
export default class AnimationTreeQuery extends Vue {
    @Prop({})
    public component:IAlignedTimelineByAttribute;

    @Prop({})
    public componentName:string;

    @Prop({})
    public queryIndex:number;

    @Prop({})
    public componentIndex:number;
}
