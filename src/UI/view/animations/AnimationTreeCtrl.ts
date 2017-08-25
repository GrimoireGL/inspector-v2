import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import IAnimationTimeline from "grimoirejs-animation/ref/Animation/Schema/IAnimationTimeline";
import IAlignedTimeline from "./IAlignedTimeline";
import AnimationTreeQuery from "./tree-item/animation-tree-query.vue";
@Component({components:{AnimationTreeQuery}})
export default class AnimationTree extends Vue {
    public get alignedAnimation():IAlignedTimeline{
        return this.$store.getters.alignedAnimation;
    }

}
