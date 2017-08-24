import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationDescription from "./declaration-description.vue";
import IGrimoireSymbol from "../declarations/IGrimoireSymbol"
import UIConnectorProvider from "../../model/UIConnectorProvider";
import AnimationStore from "./AnimationStore"
import VerticalSeparator from "../common/vertical-separator.vue";
import AnimationTimeline from "./animation-timeline.vue"
import AnimationTimelineHeader from "./animation-timeline-header.vue";
import AnimationTree from "./animation-tree.vue";
import AnimationTools from "./animation-tools.vue";
@Component({store:AnimationStore,components:{VerticalSeparator,AnimationTimeline,AnimationTimelineHeader,AnimationTree,AnimationTools}})
export default class AnimationCtrl extends Vue {

    public fromLeft:number = 1024;

    public timelineScroll:number = 0;

    public mounted():void{
        this.$store.commit("setSymbols",UIConnectorProvider.windowObserver.getDeclarationModel());
    }

    public get hasAnimationPlugin():boolean{
        return this.$store.getters.hasAnimationPlugin;
    }

    public onResize(size:number):void{
        this.fromLeft = size;
    }

    public onTimelineScroll(timeline:number):void{
        this.timelineScroll = timeline;
    }
}
