import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import { IAlignedTimelineByQuery } from "../IAlignedTimeline";
import AnimationTreeComponent from "./animation-tree-component.vue";
@Component({components:{AnimationTreeComponent}})
export default class AnimationTreeQuery extends Vue {
    @Prop({})
    public queried:IAlignedTimelineByQuery;

    @Prop({})
    public query:string;

    @Prop({})
    public queryIndex:number;
}
