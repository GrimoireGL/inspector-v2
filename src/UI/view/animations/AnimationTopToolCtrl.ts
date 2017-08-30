import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import AnimationStore from "./AnimationStore";
import HorizontalGridGenerator from "./grid-generator/HorizontalGridGenerator";
@Component({store:AnimationStore})
export default class AnimationTopToolCtrl extends Vue {
    public get currentTimeLabel():string{
        return HorizontalGridGenerator.instance.toTimeLabel(this.$store.state.currentTime);
    }
}
